// Aufgabe: Serverkommunikation in React

// Entwickle eine kleine React-Anwendung, die eine Liste von Produkten von einer externen API lädt, diese anzeigt und es dem Benutzer ermöglicht, nach bestimmten Produkten zu suchen. 
// Die Anwendung soll auch Fehlermeldungen und Ladezustände korrekt handhaben. Verwende dabei React Hooks und den React Router für die Navigation. Die Anwendung soll folgende Funktionalitäten haben:

// a) Erstelle eine Komponente ProduktListe, die eine Liste von Produkten anzeigt. Nutze die fetch-api, um die Produkte von der API https://fakestoreapi.com/products zu laden. 
//    Zeige während des Ladens eine Ladeanzeige und nach dem Laden die Produktliste an. 
//    Bei einem Fehler soll eine benutzerfreundliche Fehlermeldung angezeigt werden, die dem Benutzer die Möglichkeit gibt, den Ladevorgang zu wiederholen.
// b) Implementiere eine Suchfunktion in der ProduktListe Komponente, die es ermöglicht, die angezeigten Produkte nach Namen zu filtern. 
//    Nutze dazu ein Eingabefeld, das die Liste in Echtzeit filtert, basierend auf der Eingabe. 
// c) Erstelle eine Komponente ProduktDetails, die detaillierte Informationen zu einem Produkt anzeigt, wenn der Benutzer auf ein Produkt in der Liste klickt. 
//    Verwende den React Router, um diese Detailansicht als separate Seite zu implementieren. Die URL sollte die Produkt-ID enthalten (z.B. /produkte/1 für das Produkt mit der ID 1).
// d) Implementiere eine Navigationsleiste, die es dem Benutzer ermöglicht, zwischen der Produktliste und einer "Über uns"-Seite zu wechseln. 
//    Die "Über uns"-Seite kann einfach einige statische Informationen über deine Anwendung enthalten. 