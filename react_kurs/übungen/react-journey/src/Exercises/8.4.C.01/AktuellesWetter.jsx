import { useState } from 'react';
import { useWetter } from './wetterContextCore';
import styles from './WetterApp.module.css';

// a) + b) Komponente für aktuelles Wetter mit Suchfunktion
function AktuellesWetter() {
  const [suchbegriff, setSuchbegriff] = useState('');
  const { 
    aktuellesWetter, 
    isLoading, 
    error, 
    sucheWetter, 
    erneutVersuchen,
    aktualisieren
  } = useWetter();

  // a) Suchfunktion Handler
  const handleSuche = (e) => {
    e.preventDefault();
    sucheWetter(suchbegriff);
  };

  return (
    <div>
      {/* a) Suchformular */}
      <form onSubmit={handleSuche} className={styles.searchForm}>
        <input
          type="text"
          value={suchbegriff}
          onChange={(e) => setSuchbegriff(e.target.value)}
          placeholder="Stadt eingeben (z.B. Berlin)"
          className={styles.searchInput}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={styles.searchButton}
          disabled={isLoading || !suchbegriff.trim()}
        >
          🔍 Suchen
        </button>
      </form>

      {/* b) Ladezustand */}
      {isLoading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Wetterdaten werden geladen...</p>
        </div>
      )}

      {/* d) Fehlerbehandlung mit Möglichkeit zum erneuten Versuch */}
      {error && !isLoading && (
        <div className={styles.error}>
          <h3>⚠️ Fehler</h3>
          <p>{error}</p>
          <button onClick={erneutVersuchen} className={styles.retryButton}>
            🔄 Erneut versuchen
          </button>
        </div>
      )}

      {/* Wetterdaten anzeigen */}
      {aktuellesWetter && !isLoading && (
        <div className={`${styles.wetterCard} ${isLoading ? styles.updating : ''}`}>
          <div className={styles.wetterHeader}>
            <h2>📍 {aktuellesWetter.name}, {aktuellesWetter.sys.country}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${aktuellesWetter.weather[0].icon}@2x.png`}
              alt={aktuellesWetter.weather[0].description}
              className={styles.wetterIcon}
            />
          </div>

          <p className={styles.temperatur}>
            {Math.round(aktuellesWetter.main.temp)}°C
          </p>
          <p className={styles.beschreibung}>
            {aktuellesWetter.weather[0].description}
          </p>

          <div className={styles.wetterDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Gefühlt</span>
              <span className={styles.detailValue}>
                {Math.round(aktuellesWetter.main.feels_like)}°C
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Luftfeuchtigkeit</span>
              <span className={styles.detailValue}>
                {aktuellesWetter.main.humidity}%
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Wind</span>
              <span className={styles.detailValue}>
                {Math.round(aktuellesWetter.wind.speed * 3.6)} km/h
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Luftdruck</span>
              <span className={styles.detailValue}>
                {aktuellesWetter.main.pressure} hPa
              </span>
            </div>
          </div>

          {/* e) Optimistisches Update - Aktualisieren Button */}
          <button 
            onClick={aktualisieren} 
            className={styles.refreshButton}
            disabled={isLoading}
          >
            🔄 Wetterdaten aktualisieren
          </button>
        </div>
      )}

      {/* Placeholder wenn keine Daten */}
      {!aktuellesWetter && !isLoading && !error && (
        <div className={styles.placeholder}>
          <p>🌤️ Suche nach einer Stadt, um das aktuelle Wetter anzuzeigen</p>
        </div>
      )}
    </div>
  );
}

export default AktuellesWetter;
