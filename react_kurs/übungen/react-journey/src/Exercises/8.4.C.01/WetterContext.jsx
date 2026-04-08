import { useState, useCallback } from 'react';
import { WetterContext } from './wetterContextCore';

// API-Konfiguration - HIER EIGENEN API-SCHLÜSSEL EINTRAGEN
const API_KEY = '1b9abf08981534e917da040ab478d0fe'; // Kostenlos auf https://openweathermap.org/api
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export function WetterProvider({ children }) {
  // b) State für Wetterdaten, Ladezustand und Fehler
  const [stadt, setStadt] = useState('');
  const [aktuellesWetter, setAktuellesWetter] = useState(null);
  const [vorhersage, setVorhersage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // e) Optimistisches Update - vorherige Daten für Fallback
  const [vorherigesDaten, setVorherigesDaten] = useState({
    wetter: null,
    vorhersage: null,
    stadt: ''
  });

  // a) Suchfunktion für Wetterdaten
  const sucheWetter = useCallback(async (stadtName) => {
    if (!stadtName.trim()) {
      setError('Bitte gib einen Stadtnamen ein');
      return;
    }

    // e) Optimistisches Update: Speichere vorherige Daten
    if (aktuellesWetter) {
      setVorherigesDaten({
        wetter: aktuellesWetter,
        vorhersage: vorhersage,
        stadt: stadt
      });
    }

    // e) Optimistisch: Stadt sofort setzen
    setStadt(stadtName);
    setIsLoading(true);
    setError(null);

    try {
      // Aktuelles Wetter abrufen
      const wetterResponse = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(stadtName)}&appid=${API_KEY}&units=metric&lang=de`
      );

      if (!wetterResponse.ok) {
        if (wetterResponse.status === 404) {
          throw new Error(`Stadt "${stadtName}" nicht gefunden. Bitte überprüfe die Eingabe.`);
        } else if (wetterResponse.status === 401) {
          throw new Error('Ungültiger API-Schlüssel. Bitte trage deinen OpenWeatherMap API-Schlüssel in WetterContext.jsx ein.');
        }
        throw new Error(`Fehler beim Abrufen der Wetterdaten (Status: ${wetterResponse.status})`);
      }

      const wetterData = await wetterResponse.json();

      // 5-Tage Vorhersage abrufen
      const vorhersageResponse = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(stadtName)}&appid=${API_KEY}&units=metric&lang=de`
      );

      if (!vorhersageResponse.ok) {
        throw new Error('Fehler beim Abrufen der Wettervorhersage');
      }

      const vorhersageData = await vorhersageResponse.json();

      // Daten erfolgreich geladen
      setAktuellesWetter(wetterData);
      setVorhersage(vorhersageData);
      setError(null);

    } catch (err) {
      // d) Fehlerbehandlung
      setError(err.message);
      
      // e) Bei Fehler: Rollback auf vorherige Daten
      if (vorherigesDaten.wetter) {
        setAktuellesWetter(vorherigesDaten.wetter);
        setVorhersage(vorherigesDaten.vorhersage);
        setStadt(vorherigesDaten.stadt);
      } else {
        setAktuellesWetter(null);
        setVorhersage(null);
      }
    } finally {
      setIsLoading(false);
    }
  }, [aktuellesWetter, vorhersage, stadt, vorherigesDaten]);

  // d) Funktion für erneuten Suchversuch
  const erneutVersuchen = useCallback(() => {
    if (stadt) {
      sucheWetter(stadt);
    }
  }, [stadt, sucheWetter]);

  // Daten aktualisieren (für optimistisches Update)
  const aktualisieren = useCallback(() => {
    if (stadt) {
      sucheWetter(stadt);
    }
  }, [stadt, sucheWetter]);

  const value = {
    stadt,
    aktuellesWetter,
    vorhersage,
    isLoading,
    error,
    sucheWetter,
    erneutVersuchen,
    aktualisieren
  };

  return (
    <WetterContext.Provider value={value}>
      {children}
    </WetterContext.Provider>
  );
}
