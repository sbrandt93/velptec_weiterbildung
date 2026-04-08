import { MemoryRouter, Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { useAuth } from './authContextCore';
import ProtectedRoute from './ProtectedRoute';
import Startseite from './Startseite';
import ProduktListe from './ProduktListe';
import ProduktDetail from './ProduktDetail';
import Login from './Login';
import NotFound from './NotFound';
import styles from './RoutingApp.module.css';

// Header-Komponente mit Navigation
function Header() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <h1>🛍️ Mein Shop</h1>
      {/* d) Navigation mit NavLink für aktiven Zustand */}
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
          to="/produkte"
          className={({ isActive }) => 
            isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
          }
        >
          Produkte
        </NavLink>
        <NavLink 
          to="/login"
          className={({ isActive }) => 
            isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
          }
        >
          Login
        </NavLink>
        
        {/* Zeige User-Info wenn eingeloggt */}
        {isLoggedIn && (
          <div className={styles.userInfo}>
            <span>Hallo, {user?.username}!</span>
            <button onClick={logout} className={styles.logoutButton}>
              Abmelden
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

// a) Hauptkomponente App mit BrowserRouter (MemoryRouter für eingebettete App)
function RoutingApp() {
  return (
    // MemoryRouter wird verwendet, da die App in einer bestehenden App eingebettet ist
    <MemoryRouter>
      <AuthProvider>
        <div className={styles.container}>
          <Header />
          
          <main className={styles.main}>
            {/* a) Routing-Setup mit mindestens drei Seiten */}
            <Routes>
              {/* a) Startseite (/) */}
              <Route path="/" element={<Startseite />} />
              
              {/* a) + c) Produktseite (/produkte) - geschützt */}
              <Route 
                path="/produkte" 
                element={
                  <ProtectedRoute>
                    <ProduktListe />
                  </ProtectedRoute>
                } 
              />
              
              {/* b) Dynamische Route für individuelle Produktseiten - geschützt */}
              <Route 
                path="/produkte/:produktId" 
                element={
                  <ProtectedRoute>
                    <ProduktDetail />
                  </ProtectedRoute>
                } 
              />
              
              {/* Login-Seite */}
              <Route path="/login" element={<Login />} />
              
              {/* a) 404-Seite für nicht gefundene Inhalte (*) */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </MemoryRouter>
  );
}

export default RoutingApp;
