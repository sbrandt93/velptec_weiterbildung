import { useState } from 'react';
import { AuthContext } from './authContextCore';

// AuthProvider Komponente
export function AuthProvider({ children }) {
  // c) Zustandsvariable für Login-Status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username) => {
    setIsLoggedIn(true);
    setUser({ username });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
