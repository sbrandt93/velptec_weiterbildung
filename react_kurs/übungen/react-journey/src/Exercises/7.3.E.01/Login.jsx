import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authContextCore';
import styles from './BiblioApp.module.css';

// c) Login-Seite mit einfacher Authentifizierung
function Login() {
  const [username, setUsername] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Wenn bereits eingeloggt, zur Startseite weiterleiten
  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      navigate('/buecher');
    }
  };

  return (
    <div className={styles.login}>
      <h2>🔐 Anmelden</h2>
      <p>Bitte gib deinen Benutzernamen ein, um dich anzumelden.</p>
      
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Benutzername:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Dein Name..."
            className={styles.input}
            autoFocus
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Anmelden
        </button>
      </form>
    </div>
  );
}

export default Login;
