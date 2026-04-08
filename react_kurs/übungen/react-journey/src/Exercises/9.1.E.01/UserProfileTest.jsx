import { useState } from 'react';
import styles from './UserProfileTest.module.css';

/**
 * UserProfile Komponente
 * 
 * Zeigt den Benutzernamen und das Alter an.
 * Verwaltet den Anmeldestatus mit useState.
 */
function UserProfileTest({ username, age }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <h2>Übung 9.1.E.01 - Testing</h2>
      <div className={styles.card}>
        <p data-testid="username">
          <strong>Benutzername:</strong> {username}
        </p>
        <p data-testid="age">
          <strong>Alter:</strong> {age} Jahre
        </p>
        <div 
          className={`${styles.status} ${isLoggedIn ? styles.statusLoggedIn : styles.statusLoggedOut}`} 
          data-testid="status"
        >
          Status: {isLoggedIn ? 'Angemeldet' : 'Nicht angemeldet'}
        </div>
        <button 
          className={`${styles.button} ${isLoggedIn ? styles.buttonLogout : styles.buttonLogin}`}
          onClick={toggleLogin}
          data-testid="login-button"
        >
          {isLoggedIn ? 'Abmelden' : 'Anmelden'}
        </button>
      </div>
    </div>
  );
}

export default UserProfileTest;
