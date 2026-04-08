import { MemoryRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserProfile from './UserProfile';
import Startseite from './Startseite';
import styles from './ServerApp.module.css';

// f) Hauptkomponente mit React Router für Navigation
function ServerApp() {
  return (
    // MemoryRouter wird verwendet, da die App eingebettet ist
    <MemoryRouter>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>🌐 Server-Kommunikation</h1>
          {/* f) Navigation zwischen Startseite und UserProfile */}
          <nav className={styles.nav}>
            <NavLink 
              to="/"
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
              }
            >
              Startseite
            </NavLink>
            <NavLink 
              to="/profil"
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
              }
            >
              Benutzerprofil
            </NavLink>
          </nav>
        </header>

        <main className={styles.main}>
          <Routes>
            {/* f) Startseite mit Willkommensnachricht */}
            <Route path="/" element={<Startseite />} />
            {/* f) UserProfile Komponente */}
            <Route path="/profil" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </MemoryRouter>
  );
}

export default ServerApp;
