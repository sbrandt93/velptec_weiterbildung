// Übung 10.14.Ü.03
// Aufgabe: DOM

// Entwickle eine kleine Webanwendung, die eine Liste von Büchern anzeigt. Jedes Buch soll als ein Objekt repräsentiert werden, das folgende Eigenschaften hat: 
// Titel, Autor, Jahr der Veröffentlichung und eine ID. Die Anwendung soll folgende Funktionalitäten umfassen:  

// a) Erstelle eine Klasse Buch mit einem Konstruktor, der die oben genannten Eigenschaften initialisiert. 
// b) Erstelle ein Array buecherListe, das mehrere Bücher enthält, welche mit der Klasse Buch erstellt wurden. 
// c) Verwende DOM-Methoden, um jedes Buch aus der buecherListe in der Webseite anzuzeigen. Jedes Buch soll in einem eigenen <div>-Element angezeigt werden, das den Titel, den Autor und das Jahr der Veröffentlichung enthält. 
// d) Füge jedem Buch-<div> ein <button> hinzu, der "Löschen" sagt. Wenn dieser Button geklickt wird, soll das Buch aus der buecherListe entfernt und die Anzeige aktualisiert werden. 
// e) Implementiere eine Funktion aktualisiereAnzeige(), die die Anzeige aktualisiert, indem sie die Liste der Bücher neu aus dem buecherListe Array lädt und anzeigt. 
// f) Nutze CSS-Selektoren, um jedem Buch-<div> einen einheitlichen Stil zu geben und die Lesbarkeit zu verbessern.  


// a) Klasse Buch erstellen
class Buch {
    constructor(titel, autor, jahr, id) {
        this.titel = titel;
        this.autor = autor;
        this.jahr = jahr;
        this.id = id;
    }
}

// b) Array buecherListe erstellen
let buecherListe = [
    new Buch("Der Alchimist", "Paulo Coelho", 1988, 1),
    new Buch("1984", "George Orwell", 1949, 2),
    new Buch("Die Verwandlung", "Franz Kafka", 1915, 3)
];

// c) Funktion zur Anzeige der Bücher
function aktualisiereAnzeige(buecher) {
    const container = document.getElementById('buecherContainer');
    container.innerHTML = ''; // Vorherige Anzeige löschen
    buecher.forEach(buch => {
        let buchDiv = document.createElement('div');
        buchDiv.className = 'buch';
        buchDiv.innerHTML = `
            <h3>${buch.titel}</h3>
            <p>Autor: ${buch.autor}</p>
            <p>Jahr: ${buch.jahr}</p>
            <button onclick="loescheBuch(${buch.id})">Löschen</button>
        `;
        container.appendChild(buchDiv);
    });
}

aktualisiereAnzeige(buecherListe);

// d) Funktion zum Löschen eines Buches
function loescheBuch(id) {
    buecherListe = buecherListe.filter(buch => buch.id !== id);
    aktualisiereAnzeige(buecherListe);
}

// e) Funktion aktualisiereAnzeige() ist bereits implementiert oben

// f) CSS-Stil hinzufügen (dieser Teil sollte in einer separaten CSS-Datei oder in einem <style>-Tag im HTML-Dokument stehen)
const style = document.createElement('style');
style.innerHTML = `
    .buch {
    width: 33%;
        border: 1px solid #ccc; 
        padding: 10px; 
        margin: 10px 0;
        background-color: #f9f9f9;
    }   
    .buch h3 {
        margin: 0 0 10px 0;
    }
`;
document.head.appendChild(style);