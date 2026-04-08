import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileTest from './UserProfileTest';

describe('UserProfileTest Komponente', () => {
  // Test a) + d): Überprüft, ob Benutzername und Alter korrekt angezeigt werden
  it('zeigt den Benutzernamen korrekt an', () => {
    render(<UserProfileTest username="Max Mustermann" age={25} />);
    
    const usernameElement = screen.getByTestId('username');
    expect(usernameElement).toHaveTextContent('Max Mustermann');
  });

  it('zeigt das Alter korrekt an', () => {
    render(<UserProfileTest username="Max Mustermann" age={25} />);
    
    const ageElement = screen.getByTestId('age');
    expect(ageElement).toHaveTextContent('25');
  });

  // Test b) + c): Überprüft den initialen Anmeldestatus
  it('zeigt initial den Status "Nicht angemeldet" an', () => {
    render(<UserProfileTest username="Test User" age={30} />);
    
    const statusElement = screen.getByTestId('status');
    expect(statusElement).toHaveTextContent('Nicht angemeldet');
  });

  it('zeigt initial den Button-Text "Anmelden" an', () => {
    render(<UserProfileTest username="Test User" age={30} />);
    
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toHaveTextContent('Anmelden');
  });

  // Test c): Überprüft das Umschalten des Anmeldestatus
  it('wechselt den Status zu "Angemeldet" nach Klick auf Anmelden', () => {
    render(<UserProfileTest username="Test User" age={30} />);
    
    const loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    
    const statusElement = screen.getByTestId('status');
    expect(statusElement).toHaveTextContent('Angemeldet');
    expect(loginButton).toHaveTextContent('Abmelden');
  });

  it('wechselt den Status zurück zu "Nicht angemeldet" nach erneutem Klick', () => {
    render(<UserProfileTest username="Test User" age={30} />);
    
    const loginButton = screen.getByTestId('login-button');
    
    // Erster Klick: Anmelden
    fireEvent.click(loginButton);
    expect(screen.getByTestId('status')).toHaveTextContent('Angemeldet');
    
    // Zweiter Klick: Abmelden
    fireEvent.click(loginButton);
    expect(screen.getByTestId('status')).toHaveTextContent('Nicht angemeldet');
    expect(loginButton).toHaveTextContent('Anmelden');
  });

  // Test mit verschiedenen Props
  it('zeigt verschiedene Benutzerdaten korrekt an', () => {
    render(<UserProfileTest username="Anna Schmidt" age={42} />);
    
    expect(screen.getByTestId('username')).toHaveTextContent('Anna Schmidt');
    expect(screen.getByTestId('age')).toHaveTextContent('42');
  });
});
