import { Navigate } from 'react-router-dom';
import { useAuth } from './authContextCore';

// c) Geschützte Route - leitet nicht authentifizierte Benutzer zur Login-Seite um
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
