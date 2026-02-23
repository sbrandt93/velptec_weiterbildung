// Übung 9.2.A.01
// Aufgabe: JSON

// Entwickle ein kleines JavaScript-Programm, das folgende Anforderungen erfüllt: 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Definiere eine Klasse Buch, die Eigenschaften wie titel, autor, veroeffentlichungsjahr und genre hat. Der Konstruktor der Klasse soll alle diese Eigenschaften initialisieren. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Buch {
    constructor(titel, autor, veroeffentlichungsjahr, genre) {
        this.titel = titel;
        this.autor = autor;
        this.veroeffentlichungsjahr = veroeffentlichungsjahr;
        this.genre = genre;
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Erstelle eine Methode innerhalb der Klasse Buch, die das Buchobjekt in ein JSON-Objekt umwandelt und dieses als String zurückgibt. Verwende dafür JSON.stringify(). 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Buch.prototype.toJSON = function () {
    return JSON.stringify(this);
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Schreibe eine Funktion buecherLaden, die einen JSON-String akzeptiert, der ein Array von Buch-Objekten repräsentiert. 
//    Die Funktion soll das JSON-Array parsen und jedes Buchobjekt in eine Instanz der Klasse Buch umwandeln. Verwende dafür JSON.parse() und gib das resultierende Array von Buch-Instanzen zurück. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function buecherLaden(jsonString) {
    const buchArray = JSON.parse(jsonString);
    return buchArray;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Implementiere eine Funktion sucheNachJahr, die ein Array von Buch-Instanzen und ein Jahr als Parameter nimmt. 
//    Die Funktion soll alle Bücher zurückgeben, die nach dem gegebenen Jahr veröffentlicht wurden. Verwende eine Schleife, um durch das Array zu iterieren und eine if-Bedingung, um die Bücher zu filtern. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sucheNachJahr(buecher, jahr) {
    const gefundeneBuecher = [];
    for (let buch of buecher) {
        if (buch.veroeffentlichungsjahr > jahr) {
            gefundeneBuecher.push(buch);
        }
    }
    return gefundeneBuecher;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Erstelle ein Array von Buch-JSON-Strings (mindestens zwei Bücher) und wandle dieses Array in einen JSON-String um. 
//    Lade dann die Bücher mit der Funktion buecherLaden und verwende sucheNachJahr, um alle Bücher zu finden, die nach 2000 veröffentlicht wurden. Gib das Ergebnis auf der Konsole aus. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const buchJsonArray = [
    '{"titel":"Das Parfum","autor":"Patrick Süskind","veroeffentlichungsjahr":1985,"genre":"Historischer Roman"}',
    '{"titel":"Der Schatten des Windes","autor":"Carlos Ruiz Zafón","veroeffentlichungsjahr":2001,"genre":"Mystery"}',
    '{"titel":"Die Bücherdiebin","autor":"Markus Zusak","veroeffentlichungsjahr":2005,"genre":"Historischer Roman"}',
    '{"titel":"1984","autor":"George Orwell","veroeffentlichungsjahr":1949,"genre":"Dystopie"}',
    '{"titel":"Der Alchimist","autor":"Paulo Coelho","veroeffentlichungsjahr":1988,"genre":"Abenteuer"}'
];

const jsonString = JSON.stringify(buchJsonArray);
const geladeneBuecher = buecherLaden(jsonString);
const buecherNach2000 = sucheNachJahr(geladeneBuecher.map(b => JSON.parse(b)), 2000);
console.log("Bücher nach 2000 veröffentlicht:", buecherNach2000);