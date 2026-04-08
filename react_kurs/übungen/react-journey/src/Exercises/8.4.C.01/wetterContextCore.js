import { createContext, useContext } from 'react';

// Context für Wetterdaten
export const WetterContext = createContext();

// Custom Hook für einfachen Zugriff auf den Wetter-Context
export function useWetter() {
  const context = useContext(WetterContext);
  if (!context) {
    throw new Error('useWetter muss innerhalb eines WetterProviders verwendet werden');
  }
  return context;
}
