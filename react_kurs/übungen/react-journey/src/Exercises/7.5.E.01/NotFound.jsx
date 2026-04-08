import { Link } from 'react-router-dom';
import styles from './RoutingApp.module.css';

// a) 404-Seite für nicht gefundene Inhalte (Route: *)
function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>404 - Seite nicht gefunden</h2>
      <p>Die angeforderte Seite existiert nicht.</p>
      <Link to="/" className={styles.backLink}>← Zurück zur Startseite</Link>
    </div>
  );
}

export default NotFound;
