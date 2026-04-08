import { useState } from 'react';
import GrusskartenApp from './Exercises/2.9.E.01/GrusskartenApp';
import ContactListApp from './Exercises/2.9.E.02/ContactListApp';
import UserProfile from './Exercises/3.2.E.01/UserProfile';
import ToDoList from './Exercises/3.2.E.02/TodoList';
import UserProfileV2 from './Exercises/3.3.E.01/UserProfileV2';
import UserProfileV3 from './Exercises/4.2.E.01/UserProfileV3';
import RouterApp from './Exercises/7.2.E.01/RouterApp';
import BiblioApp from './Exercises/7.3.E.01/BiblioApp';
import RoutingApp from './Exercises/7.5.E.01/RoutingApp';
import ServerApp from './Exercises/8.2.E.01/ServerApp';
import WetterApp from './Exercises/8.4.C.01/WetterApp';
import ProduktApp from './Exercises/8.4.A.01/ProduktApp';
import UserProfileTest from './Exercises/9.1.E.01/UserProfileTest';
import WetterWidget from './Exercises/9.1.E.02/WetterWidget';

function App() {
  const [activeExercise, setActiveExercise] = useState('01');

  // Container-Styles für ein stabiles Layout
  const mainLayout = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Zentriert alles horizontal
    minHeight: '100vh',
    backgroundColor: '#242424', // Dunkler Hintergrund für die ganze Seite
    color: 'white',
    fontFamily: 'sans-serif'
  };

  const contentBox = {
    width: '100%',
    maxWidth: '600px', // Damit es auf breiten Bildschirmen nicht wegläuft
    minHeight: '400px', // Verhindert das "Hüpfen" beim Umschalten
    backgroundColor: '#ffffff', // Weißer Hintergrund für die Übung
    color: '#333', // Dunkle Schrift in der Übung
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    marginTop: '20px',
    boxSizing: 'border-box'
  };

  return (
    <div style={mainLayout}>
      <header style={{ textAlign: 'center', paddingTop: '40px' }}>
        <h1>React Journey 🚀</h1>
        <nav style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
          <button onClick={() => setActiveExercise('01')}>Ü1: Grußkarten</button>
          <button onClick={() => setActiveExercise('02')}>Ü2: Kontaktliste</button>
          <button onClick={() => setActiveExercise('03')}>Ü3: Benutzerprofil</button>
          <button onClick={() => setActiveExercise('04')}>Ü4: To-Do Liste</button>
          <button onClick={() => setActiveExercise('05')}>Ü5: Benutzerprofil v2</button>
          <button onClick={() => setActiveExercise('06')}>Ü6: Styling</button>
          <button onClick={() => setActiveExercise('07')}>Ü7: Router</button>
          <button onClick={() => setActiveExercise('08')}>Ü8: Bibliothek</button>
          <button onClick={() => setActiveExercise('09')}>Ü9: Routing</button>
          <button onClick={() => setActiveExercise('10')}>Ü10: Server</button>
          <button onClick={() => setActiveExercise('11')}>Ü11: Wetter</button>
          <button onClick={() => setActiveExercise('12')}>Ü12: Shop</button>
          <button onClick={() => setActiveExercise('13')}>Ü13: Testing</button>
          <button onClick={() => setActiveExercise('14')}>Ü14: WetterWidget</button>
        </nav>
      </header>

      <main style={contentBox}>
        <div className="exercise-container">
          {activeExercise === '01' && <GrusskartenApp />}
          {activeExercise === '02' && <ContactListApp />}
          {activeExercise === '03' && <UserProfile username="Max Mustermann" age={30} hobbies={['Lesen', 'Schwimmen', 'Reisen']} />}
          {activeExercise === '04' && <ToDoList />}
          {activeExercise === '05' && <UserProfileV2 username="Max Mustermann" age={30} hobby="Lesen" />}
          {activeExercise === '06' && <UserProfileV3 />}
          {activeExercise === '07' && <RouterApp />}
          {activeExercise === '08' && <BiblioApp />}
          {activeExercise === '09' && <RoutingApp />}
          {activeExercise === '10' && <ServerApp />}
          {activeExercise === '11' && <WetterApp />}
          {activeExercise === '12' && <ProduktApp />}
          {activeExercise === '13' && <UserProfileTest username="Max Mustermann" age={25} />}
          {activeExercise === '14' && <WetterWidget />}
        </div>
      </main>
    </div>
  );
}

export default App;