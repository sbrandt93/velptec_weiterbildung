import { useState } from 'react';
import styles from './WetterWidget.module.css';

/**
 * WetterWidget Komponente
 * 
 * Zeigt die aktuelle Temperatur und den Wetterstatus an.
 * Props können verwendet werden, um initiale Werte zu setzen.
 */
function WetterWidget({ initialTemperatur = 20, initialStatus = 'sonnig', onTemperaturChange }) {
  const [temperatur, setTemperatur] = useState(initialTemperatur);
  const [wetterStatus, setWetterStatus] = useState(initialStatus);

  const wetterOptionen = ['sonnig', 'bewölkt', 'regnerisch', 'stürmisch', 'verschneit'];

  const getWetterIcon = (status) => {
    const icons = {
      'sonnig': '☀️',
      'bewölkt': '☁️',
      'regnerisch': '🌧️',
      'stürmisch': '⛈️',
      'verschneit': '❄️'
    };
    return icons[status] || '🌤️';
  };

  const handleTemperaturChange = (delta) => {
    const neueTemperatur = temperatur + delta;
    setTemperatur(neueTemperatur);
    if (onTemperaturChange) {
      onTemperaturChange(neueTemperatur);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Übung 9.1.E.02 - WetterWidget</h2>
      <div className={styles.widget}>
        <div className={styles.icon} data-testid="wetter-icon">
          {getWetterIcon(wetterStatus)}
        </div>
        <div className={styles.temperatur} data-testid="temperatur">
          {temperatur}°C
        </div>
        <div className={styles.status} data-testid="wetter-status">
          {wetterStatus}
        </div>
        
        <div className={styles.controls}>
          <div className={styles.temperaturControls}>
            <button 
              onClick={() => handleTemperaturChange(-1)}
              data-testid="temp-decrease"
              className={styles.tempButton}
            >
              -
            </button>
            <span>Temperatur</span>
            <button 
              onClick={() => handleTemperaturChange(1)}
              data-testid="temp-increase"
              className={styles.tempButton}
            >
              +
            </button>
          </div>
          
          <select 
            value={wetterStatus} 
            onChange={(e) => setWetterStatus(e.target.value)}
            className={styles.select}
            data-testid="status-select"
          >
            {wetterOptionen.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default WetterWidget;
