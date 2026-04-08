// App.jsx - Hauptkomponente der Kundenauftragsverwaltung
// Importiert und rendert die AuftragsListe-Komponente

import './App.css'
import AuftragsListe from './AuftragsListe'

function App() {
  return (
    <div className="app">
      {/* Hauptkomponente: AuftragsListe mit allen Funktionen */}
      <AuftragsListe />
    </div>
  )
}

export default App
