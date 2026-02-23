// Übung 8.6.Ü.01
// Aufgabe: Arrays

// Entwickle ein kleines Programm in JavaScript, das folgende Funktionalitäten umfasst: 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Erstelle eine Klasse Buch, die Eigenschaften wie titel, autor, veröffentlichungsjahr und genre besitzt. Der Konstruktor der Klasse soll alle diese Eigenschaften initialisieren. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Buch {
    constructor(titel, autor, veröffentlichungsjahr, genre) {
        this.titel = titel;
        this.autor = autor;
        this.veröffentlichungsjahr = veröffentlichungsjahr;
        this.genre = genre;
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Füge der Klasse Buch eine Methode beschreibung hinzu, die eine Zeichenkette zurückgibt, welche den Titel, den Autor, das Veröffentlichungsjahr und das Genre des Buches in einem schönen Satz zusammenfasst. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Bereits in der Klasse Buch implementiert

Buch.prototype.beschreibung = function () {
    return `${this.titel} ist ein ${this.genre}-Buch von ${this.autor}, veröffentlicht im Jahr ${this.veröffentlichungsjahr}.`;
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Erstelle ein Array bibliothek, das mehrere Instanzen der Klasse Buch enthält. Nutze verschiedene Genres und Veröffentlichungsjahre. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const bibliothek = [
    new Buch("Der Alchimist", "Paulo Coelho", 1988, "Fiktion"),
    new Buch("1984", "George Orwell", 1949, "Dystopie"),
    new Buch("Die Verwandlung", "Franz Kafka", 1915, "Novelle"),
    new Buch("Der Herr der Ringe", "J.R.R. Tolkien", 1954, "Fantasy")
];

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Schreibe eine Funktion sucheNachGenre, die als Parameter ein Genre annimmt und alle Bücher dieses Genres aus dem Array bibliothek in der Konsole ausgibt. Verwende dazu eine Schleife. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sucheNachGenre(genre) {
    console.log(`Bücher im Genre "${genre}":`);
    for (let buch of bibliothek) {
        if (buch.genre.toLowerCase() === genre.toLowerCase()) {
            console.log(buch.beschreibung());
        }
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Implementiere eine Funktion neuestesBuch, die das Buch mit dem neuesten Veröffentlichungsjahr aus dem Array bibliothek findet und dessen Beschreibung mithilfe der Methode beschreibung in der Konsole ausgibt.  
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function neuestesBuch() {
    let neuestes = bibliothek[0];
    for (let buch of bibliothek) {
        if (buch.veröffentlichungsjahr > neuestes.veröffentlichungsjahr) {
            neuestes = buch;
        }
    }
    console.log("Das neueste Buch ist:");
    console.log(neuestes.beschreibung());
}

// Teste die Funktionen
sucheNachGenre("Fiktion");
neuestesBuch();


// refactor function neustesBuch and use array methods
function neuestesBuchRefactored() {
    const neuestes = bibliothek.reduce((aktuellNeuestes, buch) => {
        return (buch.veröffentlichungsjahr > aktuellNeuestes.veröffentlichungsjahr) ? buch : aktuellNeuestes;
    }, bibliothek[0]);
    console.log("Das neueste Buch (refactored) ist:");
    console.log(neuestes.beschreibung());
}

neuestesBuchRefactored();