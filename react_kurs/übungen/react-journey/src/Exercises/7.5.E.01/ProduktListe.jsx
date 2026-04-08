import { Link } from 'react-router-dom';
import { produkte } from './produkte';
import styles from './RoutingApp.module.css';

// b) ProduktListe-Komponente für die Route "/produkte"
function ProduktListe() {
  return (
    <div>
      <h2>Unsere Produkte</h2>
      <p>Klicke auf ein Produkt, um mehr Details zu sehen:</p>
      
      <ul className={styles.produktListe}>
        {produkte.map(produkt => (
          <li key={produkt.id} className={styles.produktItem}>
            {/* b) Link zu dynamischer Route /produkte/:produktId */}
            <Link to={`/produkte/${produkt.id}`} className={styles.produktLink}>
              <span className={styles.produktName}>{produkt.name}</span>
              <span className={styles.produktPreis}>{produkt.preis.toFixed(2)} €</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProduktListe;
