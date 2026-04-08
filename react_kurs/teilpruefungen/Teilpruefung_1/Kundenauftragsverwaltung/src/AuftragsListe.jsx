// AuftragsListe.jsx - Kundenauftragsverwaltung Komponente
// Diese Komponente ermöglicht das Anzeigen, Filtern und Hinzufügen von Kundenaufträgen

import { useState, useEffect } from 'react';
import './AuftragsListe.css';

// ============================================================================
// a) Funktionale Komponente AuftragsListe mit State für Auftragsliste
//    Jeder Auftrag hat: id, kunde, datum, status
// ============================================================================
function AuftragsListe() {
  // State für die Liste der Aufträge - initialisiert mit 3 Beispielaufträgen
  const [auftraege, setAuftraege] = useState([
    { id: 1, kunde: 'Max Mustermann', datum: '2026-02-20', status: 'offen' },
    { id: 2, kunde: 'Anna Schmidt', datum: '2026-02-22', status: 'abgeschlossen' },
    { id: 3, kunde: 'Peter Weber', datum: '2026-02-25', status: 'offen' }
  ]);

  // State für das Formular (neuer Auftrag)
  const [neuerKunde, setNeuerKunde] = useState('');
  const [neuesDatum, setNeuesDatum] = useState('');

  // State für den Filter (alle, offen, abgeschlossen)
  const [statusFilter, setStatusFilter] = useState('alle');

  // State für Ladezustand - initial true, da API-Anfrage bei Mount startet
  const [isLoading, setIsLoading] = useState(true);

  // ============================================================================
  // b) useEffect Hook für simulierte API-Anfrage bei Initialisierung
  //    Nach 2 Sekunden wird die Auftragsliste aktualisiert
  // ============================================================================
  useEffect(() => {
    // Simulierte API-Daten, die nach 2 Sekunden "geladen" werden
    const simulierteApiDaten = [
      { id: 4, kunde: 'Maria Müller', datum: '2026-02-15', status: 'abgeschlossen' },
      { id: 5, kunde: 'Thomas Fischer', datum: '2026-02-18', status: 'offen' },
      { id: 6, kunde: 'Laura Becker', datum: '2026-02-26', status: 'offen' }
    ];

    // setTimeout simuliert eine API-Anfrage mit 2 Sekunden Verzögerung
    const timeoutId = setTimeout(() => {
      // Aufträge mit den "geladenen" Daten ergänzen
      setAuftraege(vorhandeneAuftraege => [
        ...vorhandeneAuftraege,
        ...simulierteApiDaten
      ]);
      // Ladezustand deaktivieren
      setIsLoading(false);
      console.log('API-Daten erfolgreich geladen!');
    }, 2000);

    // Cleanup-Funktion: Timeout abbrechen, wenn Komponente unmountet
    return () => clearTimeout(timeoutId);
  }, []); // Leeres Dependency-Array = Nur bei Initialisierung ausführen

  // ============================================================================
  // c) Funktion zum Hinzufügen eines neuen Auftrags
  //    Generiert eindeutige ID und setzt Status auf "offen"
  // ============================================================================
  const handleAuftragHinzufuegen = (event) => {
    // Verhindert das Standard-Formular-Submit-Verhalten (Seiten-Reload)
    event.preventDefault();

    // Validierung: Prüfen ob alle Felder ausgefüllt sind
    if (!neuerKunde.trim() || !neuesDatum) {
      alert('Bitte alle Felder ausfüllen!');
      return;
    }

    // Neuen Auftrag erstellen mit:
    // - Eindeutiger ID (basierend auf Timestamp für Eindeutigkeit)
    // - Eingegebener Kunde und Datum
    // - Status standardmäßig auf "offen" gesetzt
    const neuerAuftrag = {
      id: Date.now(), // Eindeutige ID basierend auf aktuellem Timestamp
      kunde: neuerKunde.trim(),
      datum: neuesDatum,
      status: 'offen' // Standard-Status für neue Aufträge
    };

    // Auftrag zur Liste hinzufügen (Spread-Operator für Immutability)
    setAuftraege(vorhandeneAuftraege => [...vorhandeneAuftraege, neuerAuftrag]);

    // Formularfelder zurücksetzen
    setNeuerKunde('');
    setNeuesDatum('');

    console.log('Neuer Auftrag hinzugefügt:', neuerAuftrag);
  };

  // ============================================================================
  // d) Filterfunktion: Filtert Aufträge nach Status
  //    Zeigt alle, nur offene oder nur abgeschlossene Aufträge
  // ============================================================================
  const gefilterteAuftraege = auftraege.filter(auftrag => {
    // Wenn "alle" ausgewählt ist, alle Aufträge anzeigen
    if (statusFilter === 'alle') {
      return true;
    }
    // Sonst nur Aufträge mit dem ausgewählten Status anzeigen
    return auftrag.status === statusFilter;
  });

  // ============================================================================
  // Funktion zum Ändern des Auftragsstatus (Bonus-Feature)
  // ============================================================================
  const handleStatusAendern = (auftragId) => {
    setAuftraege(vorhandeneAuftraege =>
      vorhandeneAuftraege.map(auftrag => {
        if (auftrag.id === auftragId) {
          // Status umschalten: offen -> abgeschlossen, abgeschlossen -> offen
          return {
            ...auftrag,
            status: auftrag.status === 'offen' ? 'abgeschlossen' : 'offen'
          };
        }
        return auftrag;
      })
    );
  };

  // ============================================================================
  // JSX Render-Ausgabe der Komponente
  // ============================================================================
  return (
    <div className="auftrags-container">
      <h1>Kundenauftragsverwaltung</h1>

      {/* Ladeanzeige während simulierter API-Anfrage */}
      {isLoading && (
        <div className="loading-indicator">
          Lade weitere Aufträge von API...
        </div>
      )}

      {/* ================================================================== */}
      {/* c) Formular zum Hinzufügen neuer Aufträge */}
      {/* ================================================================== */}
      <section className="neuer-auftrag-section">
        <h2>Neuen Auftrag anlegen</h2>
        <form onSubmit={handleAuftragHinzufuegen} className="auftrag-form">
          {/* Eingabefeld für Kundennamen */}
          <div className="form-group">
            <label htmlFor="kunde">Kunde:</label>
            <input
              type="text"
              id="kunde"
              value={neuerKunde}
              onChange={(e) => setNeuerKunde(e.target.value)}
              placeholder="Kundenname eingeben"
              required
            />
          </div>

          {/* Eingabefeld für Datum */}
          <div className="form-group">
            <label htmlFor="datum">Datum:</label>
            <input
              type="date"
              id="datum"
              value={neuesDatum}
              onChange={(e) => setNeuesDatum(e.target.value)}
              required
            />
          </div>

          {/* Submit-Button */}
          <button type="submit" className="btn-hinzufuegen">
            Auftrag hinzufügen
          </button>
        </form>
      </section>

      {/* ================================================================== */}
      {/* d) Filter-Dropdown für Status-Filterung */}
      {/* ================================================================== */}
      <section className="filter-section">
        <h2>Aufträge filtern</h2>
        <div className="filter-group">
          <label htmlFor="statusFilter">Status:</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="alle">Alle anzeigen</option>
            <option value="offen">Offen</option>
            <option value="abgeschlossen">Abgeschlossen</option>
          </select>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Auftragsliste mit gefilterten Ergebnissen */}
      {/* ================================================================== */}
      <section className="auftrags-liste-section">
        <h2>
          Auftragsliste 
          <span className="auftrag-count">
            ({gefilterteAuftraege.length} von {auftraege.length} Aufträgen)
          </span>
        </h2>

        {/* Prüfen ob gefilterte Liste leer ist */}
        {gefilterteAuftraege.length === 0 ? (
          <p className="keine-auftraege">Keine Aufträge mit dem Status "{statusFilter}" gefunden.</p>
        ) : (
          <table className="auftrags-tabelle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Kunde</th>
                <th>Datum</th>
                <th>Status</th>
                <th>Aktion</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping über alle gefilterten Aufträge */}
              {gefilterteAuftraege.map(auftrag => (
                <tr key={auftrag.id} className={`status-${auftrag.status}`}>
                  <td>{auftrag.id}</td>
                  <td>{auftrag.kunde}</td>
                  <td>{auftrag.datum}</td>
                  <td>
                    <span className={`status-badge ${auftrag.status}`}>
                      {auftrag.status}
                    </span>
                  </td>
                  <td>
                    {/* Button zum Umschalten des Status */}
                    <button
                      onClick={() => handleStatusAendern(auftrag.id)}
                      className="btn-status"
                    >
                      {auftrag.status === 'offen' ? 'Abschließen' : 'Wiedereröffnen'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default AuftragsListe;
