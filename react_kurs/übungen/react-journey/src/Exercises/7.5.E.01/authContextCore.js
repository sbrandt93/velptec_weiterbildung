import { createContext, useContext } from 'react';

// c) Context für Benutzerauthentifizierung
export const AuthContext = createContext();

// Custom Hook für einfachen Zugriff auf den Auth-Context
export function useAuth() {
  return useContext(AuthContext);
}
