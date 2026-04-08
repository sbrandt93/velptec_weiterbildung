import { MemoryRouter, Routes, Route, NavLink } from 'react-router-dom';
import ProduktListe from './ProduktListe';
import ProduktDetails from './ProduktDetails';
import UeberUns from './UeberUns';
import styles from './ProduktApp.module.css';

// Hauptkomponente der Produkt-App
// d) React Router für Navigation zwischen Produktliste, Details und "Über uns"
function ProduktApp() {
  return (
    // MemoryRouter wird verwendet, da die App eingebettet ist
    <MemoryRouter>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>🛒 Produkt-Shop</h1>
          {/* d) Navigationsleiste */}
          <nav className={styles.nav}>
            <NavLink 
              to="/"
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
              }
              end
            >
              📦 Produkte
            </NavLink>
            <NavLink 
              to="/ueber-uns"
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
              }
            >
              📋 Über uns
            </NavLink>
          </nav>
        </header>

        <main className={styles.main}>
          <Routes>
            {/* a) + b) Produktliste mit Suche */}
            <Route path="/" element={<ProduktListe />} />
            {/* c) Produkt-Detailansicht mit ID in URL */}
            <Route path="/produkte/:id" element={<ProduktDetails />} />
            {/* d) Über uns Seite */}
            <Route path="/ueber-uns" element={<UeberUns />} />
          </Routes>
        </main>
      </div>
    </MemoryRouter>
  );
}

export default ProduktApp;
