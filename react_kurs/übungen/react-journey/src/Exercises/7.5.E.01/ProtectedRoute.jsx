import { Navigate } from 'react-router-dom';
import { useAuth } from './authContextCore';

// c) Navigation Guard - leitet nicht authentifizierte Benutzer zur Login-Seite um
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Wenn nicht angemeldet, automatisch zur Login-Seite umleiten
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
