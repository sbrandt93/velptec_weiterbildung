import { useParams, Link } from 'react-router-dom';
import { getProduktById } from './produkte';
import styles from './RoutingApp.module.css';

// b) ProduktDetail-Komponente für dynamische Route /produkte/:produktId
function ProduktDetail() {
  // b) useParams-Hook zum Extrahieren der produktId aus der URL
  const { produktId } = useParams();
  const produkt = getProduktById(produktId);

  if (!produkt) {
    return (
      <div>
        <h2>Produkt nicht gefunden</h2>
        <p>Das Produkt mit der ID "{produktId}" existiert nicht.</p>
        <Link to="/produkte" className={styles.backLink}>← Zurück zur Produktliste</Link>
      </div>
    );
  }

  return (
    <div className={styles.produktDetail}>
      <h2>{produkt.name}</h2>
      <div className={styles.produktInfo}>
        <p><strong>Kategorie:</strong> {produkt.kategorie}</p>
        <p><strong>Preis:</strong> {produkt.preis.toFixed(2)} €</p>
        <p><strong>Beschreibung:</strong> {produkt.beschreibung}</p>
      </div>
      <Link to="/produkte" className={styles.backLink}>← Zurück zur Produktliste</Link>
    </div>
  );
}

export default ProduktDetail;
