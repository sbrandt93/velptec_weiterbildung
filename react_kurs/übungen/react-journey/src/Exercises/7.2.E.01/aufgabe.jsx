// Entwickle eine kleine React-Anwendung, die folgende Anforderungen erfüllt: 

// a) Erstelle eine Hauptkomponente App, die mithilfe von React Router zwei Seiten routet: eine Startseite (/) und eine Produktseite (/produkte/:produktId). Verwende BrowserRouter und Routes für das Routing. 
// b) Auf der Startseite zeige eine Liste von Produktnamen an, die als Links (Link-Komponente) zur jeweiligen Produktseite führen. Die Produkt-IDs sollen dynamisch in die URL eingefügt werden. 
// c) Für die Produktseite erstelle eine Komponente ProduktDetail, die die Produkt-ID aus der URL liest (mithilfe von useParams) und einen Text anzeigt, der sagt: "Details für Produkt mit der ID: [produktId]". 
// d) Implementiere einen einfachen Zustand in der ProduktDetail-Komponente mit einem Zähler, der bei jedem Klick auf einen Button um eins erhöht wird. Zeige den aktuellen Zählerstand an.
// e) Füge der App-Komponente ein einfaches CSS-Modul für grundlegende Styling-Anforderungen hinzu. Stelle sicher, dass die Links visuell hervorgehoben werden, wenn sie aktiv sind (verwende NavLink anstelle von Link). 
// f) Nutze den useEffect-Hook in der ProduktDetail-Komponente, um eine Konsolenausgabe zu erzeugen, die anzeigt, dass die Komponente geladen wurde, jedes Mal wenn die Produkt-ID sich ändert. 

