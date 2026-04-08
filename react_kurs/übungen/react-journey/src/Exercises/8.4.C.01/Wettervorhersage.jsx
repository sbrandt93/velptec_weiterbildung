import { useWetter } from './wetterContextCore';
import styles from './WetterApp.module.css';

// c) Wettervorhersage-Komponente (erreichbar über React Router)
function Wettervorhersage() {
  const { vorhersage, isLoading, stadt, aktualisieren } = useWetter();

  // b) Ladezustand
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Vorhersage wird geladen...</p>
      </div>
    );
  }

  // Keine Daten vorhanden
  if (!vorhersage) {
    return (
      <div className={styles.placeholder}>
        <p>📅 Suche zuerst auf der "Aktuell"-Seite nach einer Stadt, um die Vorhersage zu sehen</p>
      </div>
    );
  }

  // 5-Tage Vorhersage aufbereiten (jeden Tag um 12:00 Uhr)
  const tagesVorhersage = vorhersage.list.filter(item => 
    item.dt_txt.includes('12:00:00')
  ).slice(0, 5);

  // Formatiere Datum
  const formatiereDatum = (dateString) => {
    const date = new Date(dateString);
    const optionen = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('de-DE', optionen);
  };

  return (
    <div>
      <h2>📅 5-Tage Vorhersage für {stadt}</h2>
      
      <div className={styles.vorhersageListe}>
        {tagesVorhersage.map((tag, index) => (
          <div key={index} className={styles.vorhersageItem}>
            <span className={styles.vorhersageZeit}>
              {formatiereDatum(tag.dt_txt)}
            </span>
            <img
              src={`https://openweathermap.org/img/wn/${tag.weather[0].icon}.png`}
              alt={tag.weather[0].description}
              className={styles.vorhersageIcon}
            />
            <span className={styles.vorhersageBeschreibung}>
              {tag.weather[0].description}
            </span>
            <span className={styles.vorhersageTemp}>
              {Math.round(tag.main.temp)}°C
            </span>
          </div>
        ))}
      </div>

      {/* Stündliche Vorhersage für heute */}
      <h3 style={{ marginTop: '30px' }}>⏰ Stündliche Vorhersage</h3>
      <div className={styles.vorhersageListe}>
        {vorhersage.list.slice(0, 8).map((stunde, index) => (
          <div key={index} className={styles.vorhersageItem}>
            <span className={styles.vorhersageZeit}>
              {new Date(stunde.dt_txt).toLocaleTimeString('de-DE', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
            <img
              src={`https://openweathermap.org/img/wn/${stunde.weather[0].icon}.png`}
              alt={stunde.weather[0].description}
              className={styles.vorhersageIcon}
            />
            <span className={styles.vorhersageBeschreibung}>
              {stunde.weather[0].description}
            </span>
            <span className={styles.vorhersageTemp}>
              {Math.round(stunde.main.temp)}°C
            </span>
          </div>
        ))}
      </div>

      {/* e) Optimistisches Update Button */}
      <button 
        onClick={aktualisieren} 
        className={styles.refreshButton}
        disabled={isLoading}
      >
        🔄 Vorhersage aktualisieren
      </button>
    </div>
  );
}

export default Wettervorhersage;
