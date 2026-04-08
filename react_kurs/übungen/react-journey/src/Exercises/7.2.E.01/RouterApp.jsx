import { useState } from 'react';
import { MemoryRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ZaehlerContext } from './ZaehlerContext';
import Startseite from './Startseite';
import ProduktDetail from './ProduktDetail';
import styles from './RouterApp.module.css';

// a) Hauptkomponente mit Router
function RouterApp() {
  // State für alle Zählerstände (pro Produkt gespeichert)
  const [zaehlerStaende, setZaehlerStaende] = useState({});

  const setZaehlerStand = (produktId, wert) => {
    setZaehlerStaende(prev => ({
      ...prev,
      [produktId]: wert
    }));
  };

  return (
    // MemoryRouter wird verwendet, da die App in einer bestehenden App eingebettet ist
    <MemoryRouter>
      <ZaehlerContext.Provider value={{ zaehlerStaende, setZaehlerStand }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>🛒 Produkt-Shop</h1>
            <nav>
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
                }
              >
                Startseite
              </NavLink>
            </nav>
          </header>
          
          {/* a) Routing mit Routes */}
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Startseite />} />
              <Route path="/produkte/:produktId" element={<ProduktDetail />} />
            </Routes>
          </main>
        </div>
      </ZaehlerContext.Provider>
    </MemoryRouter>
  );
}

export default RouterApp;
