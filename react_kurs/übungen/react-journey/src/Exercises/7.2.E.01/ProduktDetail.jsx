import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ZaehlerContext } from './ZaehlerContext';
import styles from './RouterApp.module.css';

// c) ProduktDetail-Komponente
function ProduktDetail() {
  const { produktId } = useParams();
  const navigate = useNavigate();
  const { zaehlerStaende, setZaehlerStand } = useContext(ZaehlerContext);
  
  // d) Zähler-State pro Produkt aus dem Context
  const zaehler = zaehlerStaende[produktId] || 0;

  // f) useEffect für Konsolenausgabe bei Änderung der Produkt-ID
  useEffect(() => {
    console.log(`ProduktDetail geladen für Produkt-ID: ${produktId}`);
  }, [produktId]);

  const erhoeheZaehler = () => {
    setZaehlerStand(produktId, zaehler + 1);
  };

  return (
    <div className={styles.produktDetail}>
      <button onClick={() => navigate('/')} className={styles.backButton}>
        ← Zurück zur Startseite
      </button>
      
      <h2>Details für Produkt mit der ID: {produktId}</h2>
      
      <div className={styles.zaehlerBox}>
        <p>Aktueller Zählerstand: <strong>{zaehler}</strong></p>
        <button 
          onClick={erhoeheZaehler}
          className={styles.zaehlerButton}
        >
          Zähler erhöhen
        </button>
      </div>
    </div>
  );
}

export default ProduktDetail;
