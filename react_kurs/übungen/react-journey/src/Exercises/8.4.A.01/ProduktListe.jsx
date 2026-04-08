import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProduktApp.module.css';

// a) ProduktListe Komponente mit fetch und Fehlerbehandlung
// b) Suchfunktion für Echtzeit-Filterung
function ProduktListe() {
  // State für Produkte, Ladezustand und Fehler
  const [produkte, setProdukte] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // b) State für Suchbegriff
  const [suchbegriff, setSuchbegriff] = useState('');

  // a) Produkte von API laden
  const fetchProdukte = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://fakestoreapi.com/products');
      
      if (!response.ok) {
        throw new Error(`HTTP-Fehler: ${response.status}`);
      }
      
      const data = await response.json();
      setProdukte(data);
    } catch (err) {
      setError(err.message || 'Fehler beim Laden der Produkte');
    } finally {
      setIsLoading(false);
    }
  };

  // Produkte beim Laden der Komponente abrufen
  useEffect(() => {
    fetchProdukte();
  }, []);

  // b) Gefilterte Produkte basierend auf Suchbegriff
  const gefilterteProdukte = produkte.filter(produkt =>
    produkt.title.toLowerCase().includes(suchbegriff.toLowerCase())
  );

  // a) Ladeanzeige
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Produkte werden geladen...</p>
      </div>
    );
  }

  // a) Fehleranzeige mit Wiederholungsmöglichkeit
  if (error) {
    return (
      <div className={styles.error}>
        <h3>⚠️ Fehler beim Laden</h3>
        <p>{error}</p>
        <button onClick={fetchProdukte} className={styles.retryButton}>
          🔄 Erneut versuchen
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* b) Suchfeld für Echtzeit-Filterung */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={suchbegriff}
          onChange={(e) => setSuchbegriff(e.target.value)}
          placeholder="🔍 Produkte suchen..."
          className={styles.searchInput}
        />
      </div>

      {/* Anzahl der Ergebnisse */}
      <p className={styles.resultCount}>
        {gefilterteProdukte.length} von {produkte.length} Produkten
        {suchbegriff && ` für "${suchbegriff}"`}
      </p>

      {/* Keine Ergebnisse */}
      {gefilterteProdukte.length === 0 ? (
        <div className={styles.noResults}>
          <p>Keine Produkte gefunden für "{suchbegriff}"</p>
        </div>
      ) : (
        /* c) Produktliste mit Links zu Detailansicht */
        <div className={styles.produktListe}>
          {gefilterteProdukte.map(produkt => (
            <Link
              key={produkt.id}
              to={`/produkte/${produkt.id}`}
              className={styles.produktCard}
            >
              <img
                src={produkt.image}
                alt={produkt.title}
                className={styles.produktImage}
              />
              <span className={styles.produktKategorie}>
                {produkt.category}
              </span>
              <h3 className={styles.produktTitle}>{produkt.title}</h3>
              <span className={styles.produktPreis}>
                {produkt.price.toFixed(2)} €
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProduktListe;
