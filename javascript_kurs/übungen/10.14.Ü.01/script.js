// Übung 10.14.Ü.02
// Aufgabe: DOM

// Entwickle ein kleines JavaScript-Projekt, das folgende Anforderungen erfüllt: 
// a) Erstelle eine Klasse Buch, die Eigenschaften wie titel, autor, isbn und veröffentlicht (Jahr der Veröffentlichung) besitzt. Der Konstruktor der Klasse soll alle diese Eigenschaften initialisieren. 
// b) Erweitere die Klasse Buch um eine Methode info(), die eine Zeichenkette zurückgibt, die den Titel, den Autor und das Jahr der Veröffentlichung enthält. 
// c) Erstelle ein Array bibliothek, das mehrere Buch-Objekte enthält. 
// d) Nutze die DOM-Methoden, um eine Tabelle im HTML-Dokument zu erstellen, die die Informationen jedes Buches aus dem Array bibliothek anzeigt. 
//    Verwende dabei document.createElement, innerHTML oder innerText und füge die Tabelle in ein bestehendes Element mit der ID buchListe ein. 
// e) Füge CSS-Stile hinzu, um die Tabelle ansprechend zu gestalten. 
//    Verwende document.querySelector oder document.querySelectorAll, um Zugriff auf die Tabelle oder deren Zellen zu bekommen und ändere die Hintergrundfarbe der Zeilen abwechselnd, um die Lesbarkeit zu verbessern.

class Buch {
    constructor(titel, autor, isbn, veröffentlicht) {
        this.titel = titel;
        this.autor = autor;
        this.isbn = isbn;
        this.veröffentlicht = veröffentlicht;
    }

    info() {
        return `${this.titel} von ${this.autor}, veröffentlicht im Jahr ${this.veröffentlicht}`;
    }
}

const bibliothek = [
    new Buch("Der Alchimist", "Paulo Coelho", "978-3-423-14523-4", 1988),
    new Buch("1984", "George Orwell", "978-0-452-28423-4", 1949),
    new Buch("Die Verwandlung", "Franz Kafka", "978-3-15-000001-4", 1915)
];

const buchListeDiv = document.getElementById("buchListe");
const table = document.createElement("table");
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>Titel</th><th>Autor</th><th>ISBN</th><th>Veröffentlicht</th>";
table.appendChild(headerRow);

bibliothek.forEach((buch, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${buch.titel}</td><td>${buch.autor}</td><td>${buch.isbn}</td><td>${buch.veröffentlicht}</td>`;
    table.appendChild(row);
});
buchListeDiv.appendChild(table);

const style = document.createElement("style");
style.innerHTML = `
    table { width: 33%; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    tr:nth-child(even) { background-color: #f2f2f2; }
    th { background-color: #4CAF50; color: white; }
`;
document.head.appendChild(style);

