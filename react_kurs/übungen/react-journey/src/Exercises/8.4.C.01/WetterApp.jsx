import { MemoryRouter, Routes, Route, NavLink } from 'react-router-dom';
import { WetterProvider } from './WetterContext';
import AktuellesWetter from './AktuellesWetter';
import Wettervorhersage from './Wettervorhersage';
import styles from './WetterApp.module.css';

// Hauptkomponente der Wetter-App
// c) React Router für Navigation zwischen aktueller Wetteransicht und Vorhersage
function WetterApp() {
  return (
    // WetterProvider stellt den Context für alle Kindkomponenten bereit
    <WetterProvider>
      {/* MemoryRouter wird verwendet, da die App eingebettet ist */}
      <MemoryRouter>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>⛅ Wetter-App</h1>
            {/* c) Navigation zwischen Ansichten */}
            <nav className={styles.nav}>
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
                }
              >
                🌡️ Aktuell
              </NavLink>
              <NavLink 
                to="/vorhersage"
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
                }
              >
                📅 Vorhersage
              </NavLink>
            </nav>
          </header>

          <main className={styles.main}>
            <Routes>
              {/* a) Aktuelle Wetteransicht mit Suchfunktion */}
              <Route path="/" element={<AktuellesWetter />} />
              {/* c) Wettervorhersage-Ansicht */}
              <Route path="/vorhersage" element={<Wettervorhersage />} />
            </Routes>
          </main>
        </div>
      </MemoryRouter>
    </WetterProvider>
  );
}

export default WetterApp;
