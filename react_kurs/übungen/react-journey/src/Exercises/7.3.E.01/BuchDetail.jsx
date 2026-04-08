import { useParams, useNavigate } from 'react-router-dom';
import { buecher } from './buecher';
import styles from './BiblioApp.module.css';

// b) Buchdetail-Seite mit useParams
function BuchDetail() {
  // b) useParams um Buch-ID aus URL zu extrahieren
  const { buchId } = useParams();
  const navigate = useNavigate();

  const buch = buecher.find(b => b.id === parseInt(buchId));

  if (!buch) {
    return (
      <div className={styles.buchDetail}>
        <p className={styles.error}>Buch nicht gefunden!</p>
        <button onClick={() => navigate('/buecher')} className={styles.backButton}>
          ← Zurück zur Buchliste
        </button>
      </div>
    );
  }

  return (
    <div className={styles.buchDetail}>
      <button onClick={() => navigate('/buecher')} className={styles.backButton}>
        ← Zurück zur Buchliste
      </button>

      <div className={styles.buchDetailCard}>
        <h2>{buch.titel}</h2>
        <p className={styles.detailAutor}>von <strong>{buch.autor}</strong></p>
        <span className={styles.detailKategorie}>{buch.kategorie}</span>
        <p className={styles.beschreibung}>{buch.beschreibung}</p>
      </div>
    </div>
  );
}

export default BuchDetail;
