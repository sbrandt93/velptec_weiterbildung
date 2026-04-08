import styles from './ServerApp.module.css';

// f) Startseite mit Willkommensnachricht
function Startseite() {
  return (
    <div className={styles.startseite}>
      <h2>Willkommen!</h2>
      <p>Dies ist eine Demo-Anwendung für Serverkommunikation in React.</p>
      <p>Nutze die Navigation, um das Benutzerprofil anzuzeigen.</p>
      <p>Die Daten werden von einer externen API abgerufen.</p>
    </div>
  );
}

export default Startseite;
