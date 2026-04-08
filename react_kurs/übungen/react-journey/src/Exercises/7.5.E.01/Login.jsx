import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authContextCore';
import styles from './RoutingApp.module.css';

// c) Login-Komponente für die Route "/login"
function Login() {
  const [username, setUsername] = useState('');
  const { login, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      // c) Nach erfolgreichem Login zur Produktseite navigieren
      navigate('/produkte');
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (isLoggedIn) {
    return (
      <div className={styles.loginContainer}>
        <h2>Du bist bereits angemeldet</h2>
        <p>Du kannst jetzt die Produktseite besuchen.</p>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Abmelden
        </button>
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <p>Bitte melde dich an, um die Produkte zu sehen.</p>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Benutzername eingeben"
          className={styles.loginInput}
          required
        />
        <button type="submit" className={styles.loginButton}>
          Anmelden
        </button>
      </form>
    </div>
  );
}

export default Login;
