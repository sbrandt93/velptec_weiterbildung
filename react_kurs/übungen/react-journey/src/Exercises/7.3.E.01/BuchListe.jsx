import { NavLink, useSearchParams } from 'react-router-dom';
import { buecher, kategorien } from './buecher';
import styles from './BiblioApp.module.css';

// b) & d) Buchliste mit Kategoriefilter
function BuchListe() {
  // d) useSearchParams für Filterlogik
  const [searchParams, setSearchParams] = useSearchParams();
  const aktiveKategorie = searchParams.get('kategorie') || '';

  // Bücher nach Kategorie filtern
  const gefilterteBuecher = aktiveKategorie
    ? buecher.filter(buch => buch.kategorie === aktiveKategorie)
    : buecher;

  const handleKategorieChange = (kategorie) => {
    if (kategorie) {
      setSearchParams({ kategorie });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={styles.buchListe}>
      <h2>📖 Buchliste</h2>

      {/* d) Kategoriefilter */}
      <div className={styles.filter}>
        <span>Filter nach Kategorie:</span>
        <div className={styles.filterButtons}>
          <button
            onClick={() => handleKategorieChange('')}
            className={`${styles.filterButton} ${!aktiveKategorie ? styles.activeFilter : ''}`}
          >
            Alle
          </button>
          {kategorien.map(kategorie => (
            <button
              key={kategorie}
              onClick={() => handleKategorieChange(kategorie)}
              className={`${styles.filterButton} ${aktiveKategorie === kategorie ? styles.activeFilter : ''}`}
            >
              {kategorie}
            </button>
          ))}
        </div>
      </div>

      {/* Buchliste */}
      <ul className={styles.buchGrid}>
        {gefilterteBuecher.map(buch => (
          <li key={buch.id} className={styles.buchCard}>
            <NavLink 
              to={`/buecher/${buch.id}`}
              className={styles.buchLink}
            >
              <h3>{buch.titel}</h3>
              <p className={styles.autor}>von {buch.autor}</p>
              <span className={styles.kategorie}>{buch.kategorie}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {gefilterteBuecher.length === 0 && (
        <p className={styles.noBuecher}>Keine Bücher in dieser Kategorie gefunden.</p>
      )}
    </div>
  );
}

export default BuchListe;
