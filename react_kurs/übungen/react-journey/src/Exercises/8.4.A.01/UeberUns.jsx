import styles from './ProduktApp.module.css';

// d) "Über uns"-Seite mit statischen Informationen
function UeberUns() {
  return (
    <div className={styles.ueberUns}>
      <h2>📋 Über uns</h2>
      
      <p>
        Willkommen bei unserer <strong>Produkt-Demo-App</strong>! Diese Anwendung wurde 
        im Rahmen eines React-Kurses entwickelt, um die Grundlagen der 
        Serverkommunikation in React zu demonstrieren.
      </p>

      <h3>🎯 Was diese App zeigt:</h3>
      <ul className={styles.featureList}>
        <li>
          <span>📦</span>
          Abrufen von Daten mit der fetch-API
        </li>
        <li>
          <span>🔍</span>
          Echtzeit-Suche und Filterung
        </li>
        <li>
          <span>⏳</span>
          Ladezustände und Fehlerbehandlung
        </li>
        <li>
          <span>🛤️</span>
          Navigation mit React Router
        </li>
        <li>
          <span>🎨</span>
          Modernes UI mit CSS Modules
        </li>
      </ul>

      <h3>🔧 Technologien:</h3>
      <p>
        Die App nutzt <strong>React Hooks</strong> (useState, useEffect), 
        <strong> React Router</strong> für die Navigation und die 
        <strong> Fake Store API</strong> als Datenquelle für die Produktdaten.
      </p>

      <h3>📚 Lernziele:</h3>
      <p>
        Diese Übung demonstriert, wie man in React mit externen APIs kommuniziert, 
        Lade- und Fehlerzustände verwaltet und eine benutzerfreundliche 
        Single-Page-Anwendung mit mehreren Ansichten erstellt.
      </p>
    </div>
  );
}

export default UeberUns;
