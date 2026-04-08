import { NavLink } from 'react-router-dom';
import { useAuth } from './authContextCore';
import styles from './BiblioApp.module.css';

// a) Hauptseite mit Begrüßung und Navigation
function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className={styles.home}>
      <h2>📚 Willkommen in der Bibliothek!</h2>
      
      {isAuthenticated ? (
        <p className={styles.greeting}>
          Hallo <strong>{user.username}</strong>! Schön, dass du da bist.
        </p>
      ) : (
        <p className={styles.greeting}>
          Bitte melde dich an, um alle Funktionen nutzen zu können.
        </p>
      )}

      <div className={styles.homeNav}>
        <h3>Navigation</h3>
        <ul>
          <li>
            <NavLink to="/buecher" className={styles.homeLink}>
              📖 Zur Buchliste
            </NavLink>
          </li>
          {!isAuthenticated && (
            <li>
              <NavLink to="/login" className={styles.homeLink}>
                🔐 Zum Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
