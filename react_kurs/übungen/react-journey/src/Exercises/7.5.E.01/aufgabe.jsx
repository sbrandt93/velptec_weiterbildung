// Aufgabe: Routing & Navigation

// Entwickle eine kleine React-Anwendung, die folgende Anforderungen erfüllt:

// a) Erstelle eine Hauptkomponente App, die den BrowserRouter von React Router verwendet. Innerhalb des BrowserRouter solltest du ein Routing-Setup mit mindestens drei Seiten implementieren: 
//    eine Startseite (/), eine Produktseite (/produkte) und eine 404-Seite für nicht gefundene Inhalte (*). Verwende für jede Seite eine separate Komponente.
// b) In der Produktseite (/produkte), implementiere dynamische Routen für individuelle Produktseiten. Die Route soll so aussehen: /produkte/:produktId. 
//    Nutze den useParams-Hook, um die produktId aus der URL zu extrahieren und auf der Seite anzuzeigen. 
// c) Füge einen einfachen Navigation Guard hinzu, der überprüft, ob ein Benutzer angemeldet ist (simuliere dies durch eine Zustandsvariable in der App-Komponente). 
//    Wenn der Benutzer nicht angemeldet ist, soll der Versuch, die Produktseite zu besuchen, automatisch auf eine Login-Seite (/login) umleiten. Nutze dafür den Navigate-Komponenten oder den useNavigate-Hook.
// d) Implementiere auf der Startseite eine Navigation, die Links (Link-Komponente) zur Startseite, Produktseite und Login-Seite enthält. 
//    Stelle sicher, dass die Navigation auch einen aktiven Zustand für den aktuellen Link anzeigt, indem du NavLink statt Link verwendest. 