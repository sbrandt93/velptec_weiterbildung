import { NavLink } from 'react-router-dom';
import { produkte } from './produkte';
import styles from './RouterApp.module.css';

// b) Startseite mit Produktliste
function Startseite() {
  return (
    <div className={styles.startseite}>
      <h2>Produktübersicht</h2>
      <ul className={styles.produktListe}>
        {produkte.map(produkt => (
          <li key={produkt.id}>
            {/* e) NavLink für aktive Hervorhebung */}
            <NavLink 
              to={`/produkte/${produkt.id}`}
              className={({ isActive }) => 
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              {produkt.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Startseite;
