import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProduktApp.module.css';

// c) ProduktDetails Komponente - zeigt Details basierend auf URL-Parameter
function ProduktDetails() {
  const { id } = useParams(); // Produkt-ID aus URL
  const [produkt, setProdukt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Produkt-Details von API laden
  const fetchProduktDetails = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Produkt nicht gefunden');
        }
        throw new Error(`HTTP-Fehler: ${response.status}`);
      }
      
      const data = await response.json();
      setProdukt(data);
    } catch (err) {
      setError(err.message || 'Fehler beim Laden des Produkts');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduktDetails();
  }, [fetchProduktDetails]);

  // Ladeanzeige
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Produkt wird geladen...</p>
      </div>
    );
  }

  // Fehleranzeige
  if (error) {
    return (
      <div className={styles.detailsContainer}>
        <Link to="/" className={styles.backLink}>
          ← Zurück zur Übersicht
        </Link>
        <div className={styles.error}>
          <h3>⚠️ Fehler</h3>
          <p>{error}</p>
          <button onClick={fetchProduktDetails} className={styles.retryButton}>
            🔄 Erneut versuchen
          </button>
        </div>
      </div>
    );
  }

  // Sterne-Rating rendern
  const renderRating = (rate) => {
    const volleSterne = Math.floor(rate);
    const sterne = '★'.repeat(volleSterne) + '☆'.repeat(5 - volleSterne);
    return sterne;
  };

  return (
    <div className={styles.detailsContainer}>
      {/* Zurück-Link */}
      <Link to="/" className={styles.backLink}>
        ← Zurück zur Übersicht
      </Link>

      {/* Produkt-Details */}
      <div className={styles.detailsCard}>
        <div className={styles.detailsHeader}>
          <img
            src={produkt.image}
            alt={produkt.title}
            className={styles.detailsImage}
          />
          <div className={styles.detailsInfo}>
            <span className={styles.produktKategorie}>
              {produkt.category}
            </span>
            <h2>{produkt.title}</h2>
            <div className={styles.detailsPreis}>
              {produkt.price.toFixed(2)} €
            </div>
            <div className={styles.detailsRating}>
              <span>{renderRating(produkt.rating.rate)}</span>
              {produkt.rating.rate.toFixed(1)} ({produkt.rating.count} Bewertungen)
            </div>
          </div>
        </div>

        <div className={styles.detailsBeschreibung}>
          <h3>Beschreibung</h3>
          <p>{produkt.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProduktDetails;
