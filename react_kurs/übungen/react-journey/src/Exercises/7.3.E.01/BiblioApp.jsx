import { MemoryRouter, Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { useAuth } from './authContextCore';
import Home from './Home';
import BuchListe from './BuchListe';
import BuchDetail from './BuchDetail';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import styles from './BiblioApp.module.css';

// Header-Komponente mit Navigation
function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className={styles.header}>
      <h1>📚 Bibliothek</h1>
      <nav className={styles.nav}>
        {/* a) NavLink für Navigation */}
        <NavLink 
          to="/"
          className={({ isActive }) => 
            isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/buecher"
          className={({ isActive }) => 
            isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
          }
        >
          Bücher
        </NavLink>
        {!isAuthenticated ? (
          <NavLink 
            to="/login"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Login
          </NavLink>
        ) : (
          <div className={styles.userInfo}>
            <span>Hallo, {user.username}</span>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

// Hauptkomponente mit Router
function BiblioApp() {
  return (
    <MemoryRouter>
      <AuthProvider>
        <div className={styles.container}>
          <Header />
          
          <main className={styles.main}>
            <Routes>
              {/* a) Home-Route */}
              <Route path="/" element={<Home />} />
              
              {/* c) Login-Route */}
              <Route path="/login" element={<Login />} />
              
              {/* b) & c) Geschützte Buchliste-Route */}
              <Route 
                path="/buecher" 
                element={
                  <ProtectedRoute>
                    <BuchListe />
                  </ProtectedRoute>
                } 
              />
              
              {/* b) Dynamische Route für Buchdetails */}
              <Route 
                path="/buecher/:buchId" 
                element={
                  <ProtectedRoute>
                    <BuchDetail />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </MemoryRouter>
  );
}

export default BiblioApp;
