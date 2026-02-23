/// 2. Teilprüfung - Klasse Buch

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Erstelle eine Klasse Buch, die Konstruktorparameter für den Titel (String), den Autor (String), das Veröffentlichungsjahr (Number) und ob das Buch einen Preis gewonnen hat (Boolean) akzeptiert. 
//    Die Klasse soll auch eine Methode beschreibung haben, die eine Zeichenkette zurückgibt, die den Titel, den Autor und das Veröffentlichungsjahr enthält.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Buch {
    constructor(titel, autor, veroeffentlichungsjahr, preisGewonnen) {

        // Fehlerbehandlung für den Titel (Aufgabe g)
        if (typeof titel !== "string") {
            console.error(`❌ Fehler: Der Titel des Buches muss ein String sein. Übergebener Wert: ${titel}`);
        }

        this.titel = titel;
        this.autor = autor;
        this.veroeffentlichungsjahr = veroeffentlichungsjahr;
        this.preisGewonnen = preisGewonnen;
    }

    beschreibung() {
        return `${this.titel} von ${this.autor}, veröffentlicht im Jahr ${this.veroeffentlichungsjahr}.`;
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Erstelle ein Objekt dieser Klasse für "Der Herr der Ringe", geschrieben von "JRR Tolkien", veröffentlicht im Jahr 1954, das keinen Preis gewonnen hat.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const lieblingsbuch = new Buch("Der Herr der Ringe", "JRR Tolkien", 1954, false);

console.log("Aufgabe b) Buch-Objekt:");
console.log(lieblingsbuch);
console.log("\n");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Verwende eine for-in-Schleife, um über die Eigenschaften des Buchobjekts zu iterieren und jede Eigenschaft und ihren Wert in der Konsole auszugeben.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("Aufgabe c) Eigenschaften des Buchobjekts:");

for (let eigenschaft in lieblingsbuch) {
    if (typeof lieblingsbuch[eigenschaft] !== 'function') {
        console.log(`${eigenschaft}: ${lieblingsbuch[eigenschaft]}`);
    }
}

console.log("\n");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Füge dem Buchobjekt eine neue Eigenschaft genre hinzu, die den Wert "Fantasy" hat, ohne die Klasse Buch zu modifizieren. Gib das aktualisierte Objekt in der Konsole aus.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

lieblingsbuch.genre = "Fantasy";
console.log("Aufgabe d) Aktualisiertes Buchobjekt mit Genre:");
console.log(lieblingsbuch);
console.log("\n");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Schreibe eine Funktion aktuellesDatum, die das aktuelle Datum und die Uhrzeit als Zeichenkette im Format "TT.MM.JJJJ, HH:MM:SS" zurückgibt. 
//    Verwende diese Funktion, um das aktuelle Datum und die Uhrzeit in der Konsole auszugeben.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function aktuellesDatum() {
    return new Date().toLocaleString('de-DE');
}

console.log("Aufgabe e) Aktuelles Datum und Uhrzeit:");
console.log(aktuellesDatum());
console.log("\n");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// f) Demonstriere die Verwendung von mindestens zwei unterschiedlichen String-Methoden anhand des Titels des Buches.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("Aufgabe f) String-Methoden am Buchtitel:");
console.log("str.replace:");
console.log(lieblingsbuch.titel.replace("der Ringe", "aller Dinge"));
console.log("str.split und str.map:");
console.log(lieblingsbuch.titel.split(" ").map(wort => wort[0]).join(""));
console.log("\n");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// g) Implementiere eine einfache Fehlerbehandlung für den Fall, dass der Titel des Buches nicht als String übergeben wird. Gib eine entsprechende Fehlermeldung in der Konsole aus.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fehlerbehandlung wurde bereits im Konstruktor der Klasse Buch implementiert.
console.log("g) Test der Fehlerbehandlung bei Konstruktion eines Buches mit nicht-String-Titel:");
let testBuch = new Buch(123, "Test Autor", 2025, true);
console.log("\n\n\n");

// Bonusaufgabe:
// Um zu verhindern, dass der Titel des Buches nachträglich in einen nicht-String geändert wird, müsste man Getter und Setter verwenden. Hier ist eine mögliche Implementierung:

class SicheresBuch {
    #titel = "";

    constructor(titel, autor, veroeffentlichungsjahr, preisGewonnen) {
        this.titel = titel;
        this.autor = autor;
        this.veroeffentlichungsjahr = veroeffentlichungsjahr;
        this.preisGewonnen = preisGewonnen;
    }

    get titel() {
        return this.#titel;
    }

    set titel(neuerTitel) {
        if (typeof neuerTitel !== "string") {
            console.error(`❌ Fehler: Die Änderung des Titels auf "${neuerTitel}" wurde blockiert, da der Wert kein String ist.`);
            return;
        }
        this.#titel = neuerTitel;
    }

    beschreibung() {
        return `${this.titel} von ${this.autor}, veröffentlicht im Jahr ${this.veroeffentlichungsjahr}.`;
    }
}

// Test der SicheresBuch-Klasse

console.log("Bonusaufgabe) SicheresBuch-Klasse mit Getter und Setter für den Titel:");
console.log("\n");

console.log('Versuch, ein Buch mit einem nicht-String-Titel zu erstellen:');
let sicheresBuch = new SicheresBuch(123, "J.R.R. Tolkien", 1937, true);
console.log("\n");

console.log('Versuch, den Titel auf einen nicht-String-Wert zu ändern:');
let sicheresBuch2 = new SicheresBuch("Der Hobbit", "J.R.R. Tolkien", 1937, true);

console.log('Titel vor der Änderung:', sicheresBuch2.titel);
sicheresBuch2.titel = 456;
console.log('Titel nach dem Versuch der Änderung:', sicheresBuch2.titel);
console.log("\n");


console.log('Versuch, den Titel auf einen gültigen String zu ändern:');
sicheresBuch2.titel = "Der Hobbit - Eine unerwartete Reise";
console.log('Titel nach der erfolgreichen Änderung:', sicheresBuch2.titel);
