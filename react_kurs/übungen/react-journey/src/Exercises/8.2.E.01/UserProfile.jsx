import { useState, useEffect } from 'react';
import styles from './ServerApp.module.css';

// a) + b) UserProfile Komponente mit useState für Benutzerdaten
function UserProfile() {
  // b) useState für den Zustand der Benutzerdaten
  const [userData, setUserData] = useState(null);
  // e) Ladezustand
  const [isLoading, setIsLoading] = useState(true);
  // c) Fehlerzustand für Fehlerbehandlung
  const [error, setError] = useState(null);

  // c) fetchUserData Funktion mit fetch-api und Fehlerbehandlung
  const fetchUserData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      
      if (!response.ok) {
        throw new Error(`HTTP-Fehler: ${response.status}`);
      }
      
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message || 'Ein Fehler ist aufgetreten');
    } finally {
      setIsLoading(false);
    }
  };

  // d) useEffect um fetchUserData beim Laden der Komponente auszuführen
  useEffect(() => {
    fetchUserData();
  }, []);

  // e) Ladezustand anzeigen
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Laden...</p>
      </div>
    );
  }

  // Fehlerzustand anzeigen
  if (error) {
    return (
      <div className={styles.error}>
        <h3>Fehler beim Laden</h3>
        <p>{error}</p>
        <button onClick={fetchUserData} className={styles.retryButton}>
          Erneut versuchen
        </button>
      </div>
    );
  }

  // a) JSX für die Strukturierung der Benutzerdaten
  return (
    <div className={styles.profile}>
      <h2>👤 Benutzerprofil</h2>
      
      <div className={styles.card}>
        <div className={styles.section}>
          <h3>Persönliche Daten</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Benutzername:</strong> @{userData.username}</p>
          <p><strong>E-Mail:</strong> {userData.email}</p>
          <p><strong>Telefon:</strong> {userData.phone}</p>
          <p><strong>Website:</strong> {userData.website}</p>
        </div>

        <div className={styles.section}>
          <h3>Adresse</h3>
          <p>{userData.address.street}, {userData.address.suite}</p>
          <p>{userData.address.zipcode} {userData.address.city}</p>
        </div>

        <div className={styles.section}>
          <h3>Unternehmen</h3>
          <p><strong>{userData.company.name}</strong></p>
          <p><em>"{userData.company.catchPhrase}"</em></p>
        </div>
      </div>

      <button onClick={fetchUserData} className={styles.refreshButton}>
        🔄 Daten aktualisieren
      </button>
    </div>
  );
}

export default UserProfile;
