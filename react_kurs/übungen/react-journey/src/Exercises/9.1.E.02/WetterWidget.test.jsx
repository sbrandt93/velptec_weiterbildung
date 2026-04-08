import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import WetterWidget from './WetterWidget';

describe('WetterWidget Komponente', () => {
  // Test a): Überprüft, ob die Komponente korrekt rendert
  describe('Rendering Tests', () => {
    it('rendert die Komponente korrekt', () => {
      render(<WetterWidget />);
      
      // Prüft, ob alle wichtigen Elemente vorhanden sind
      expect(screen.getByTestId('temperatur')).toBeInTheDocument();
      expect(screen.getByTestId('wetter-status')).toBeInTheDocument();
      expect(screen.getByTestId('wetter-icon')).toBeInTheDocument();
      expect(screen.getByTestId('temp-decrease')).toBeInTheDocument();
      expect(screen.getByTestId('temp-increase')).toBeInTheDocument();
      expect(screen.getByTestId('status-select')).toBeInTheDocument();
    });

    it('rendert mit Standard-Werten wenn keine Props übergeben werden', () => {
      render(<WetterWidget />);
      
      expect(screen.getByTestId('temperatur')).toHaveTextContent('20°C');
      expect(screen.getByTestId('wetter-status')).toHaveTextContent('sonnig');
    });
  });

  // Test b): Überprüft mit Mocking, ob Temperatur und Wetterstatus korrekt angezeigt werden
  describe('Werte-Anzeige mit Mocking', () => {
    it('zeigt die Temperatur korrekt an wenn mit Beispielwert initialisiert', () => {
      // Mock-Wert für die Temperatur
      const mockTemperatur = 25;
      
      render(<WetterWidget initialTemperatur={mockTemperatur} />);
      
      expect(screen.getByTestId('temperatur')).toHaveTextContent(`${mockTemperatur}°C`);
    });

    it('zeigt den Wetterstatus korrekt an wenn mit Beispielwert initialisiert', () => {
      // Mock-Wert für den Wetterstatus
      const mockStatus = 'bewölkt';
      
      render(<WetterWidget initialStatus={mockStatus} />);
      
      expect(screen.getByTestId('wetter-status')).toHaveTextContent(mockStatus);
    });

    it('zeigt beide Werte korrekt an wenn mit Mock-Werten initialisiert', () => {
      // Mock-Werte simulieren
      const mockWetterDaten = {
        temperatur: -5,
        status: 'verschneit'
      };
      
      render(
        <WetterWidget 
          initialTemperatur={mockWetterDaten.temperatur} 
          initialStatus={mockWetterDaten.status} 
        />
      );
      
      expect(screen.getByTestId('temperatur')).toHaveTextContent('-5°C');
      expect(screen.getByTestId('wetter-status')).toHaveTextContent('verschneit');
    });

    it('verwendet Mock-Funktion für Temperaturänderung', () => {
      const mockOnChange = vi.fn();
      
      render(<WetterWidget initialTemperatur={20} onTemperaturChange={mockOnChange} />);
      
      const increaseButton = screen.getByTestId('temp-increase');
      fireEvent.click(increaseButton);
      
      // Mock-Funktion sollte mit der neuen Temperatur aufgerufen worden sein
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(21);
      expect(screen.getByTestId('temperatur')).toHaveTextContent('21°C');
    });
  });

  // Zusätzliche Interaktionstests
  describe('Interaktions-Tests', () => {
    it('erhöht die Temperatur beim Klick auf +', () => {
      render(<WetterWidget initialTemperatur={15} />);
      
      const increaseButton = screen.getByTestId('temp-increase');
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      
      expect(screen.getByTestId('temperatur')).toHaveTextContent('17°C');
    });

    it('verringert die Temperatur beim Klick auf -', () => {
      render(<WetterWidget initialTemperatur={15} />);
      
      const decreaseButton = screen.getByTestId('temp-decrease');
      fireEvent.click(decreaseButton);
      
      expect(screen.getByTestId('temperatur')).toHaveTextContent('14°C');
    });

    it('ändert den Wetterstatus über das Dropdown', () => {
      render(<WetterWidget initialStatus="sonnig" />);
      
      const select = screen.getByTestId('status-select');
      fireEvent.change(select, { target: { value: 'regnerisch' } });
      
      expect(screen.getByTestId('wetter-status')).toHaveTextContent('regnerisch');
    });
  });
});
