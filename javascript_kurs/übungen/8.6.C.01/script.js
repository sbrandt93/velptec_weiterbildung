// Übung 8.6.C.01
// Aufgabe: Arrays

// Du arbeitest als Entwickler*in in einem Unternehmen, das eine interne Webanwendung zur Verwaltung von Mitarbeiterdaten entwickelt. 
// Die Anwendung soll es ermöglichen, Mitarbeiterdaten wie Name, Alter, Abteilung und Jahresgehalt in einem Array von Objekten zu speichern. 
// Außerdem soll die Anwendung die Möglichkeit bieten, neue Mitarbeiter hinzuzufügen, Mitarbeiterdaten zu aktualisieren, 
// Mitarbeiter nach verschiedenen Kriterien zu filtern und die durchschnittlichen Jahresgehälter innerhalb der Abteilungen zu berechnen. 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Erstelle eine Klasse Mitarbeiter, die Konstruktorparameter für Name, Alter, Abteilung und Jahresgehalt hat. Die Klasse soll auch eine Methode vorstellen enthalten, die eine kurze Beschreibung des Mitarbeiters ausgibt. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


class Mitarbeiter {
    constructor(name, alter, abteilung, jahresgehalt) {
        this.name = name;
        this.alter = alter;
        this.abteilung = abteilung;
        this.jahresgehalt = jahresgehalt;
    }
    vorstellen() {
        return `Mein Name ist ${this.name}, ich bin ${this.alter} Jahre alt, arbeite in der Abteilung ${this.abteilung}. Mein Jahresgehalt beträgt ${this.jahresgehalt} Euro.`;
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) b) Implementiere eine Funktion mitarbeiterHinzufuegen, die ein Mitarbeiterobjekt zu einem Array von Mitarbeiterobjekten hinzufügt. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let mitarbeiterListe = [];
function mitarbeiterHinzufuegen(mitarbeiterListe, mitarbeiter) {
    mitarbeiterListe.push(mitarbeiter);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Implementiere eine Funktion mitarbeiterAktualisieren, die es ermöglicht, das Jahresgehalt eines Mitarbeiters anhand seines Namens zu aktualisieren. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function gehaltAktualisieren(name, neuesGehalt) {
    mitarbeiterListe.find(mitarbeiter => mitarbeiter.name === name).jahresgehalt = neuesGehalt;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Implementiere eine Funktion durchschnittsGehaltBerechnen, die das durchschnittliche Jahresgehalt innerhalb einer bestimmten Abteilung berechnet. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function durchschnittsGehaltBerechnen(abteilung) {
    const mitarbeiterInAbteilung = mitarbeiterListe.filter(mitarbeiter => mitarbeiter.abteilung === abteilung);
    const gesamtGehalt = mitarbeiterInAbteilung.reduce((sum, mitarbeiter) => sum + mitarbeiter.jahresgehalt, 0);
    const durchschnittlichesGehalt = gesamtGehalt / mitarbeiterInAbteilung.length;
    return durchschnittlichesGehalt;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Implementiere eine Funktion mitarbeiterFiltern, die Mitarbeiter nach einem spezifischen Kriterium filtert (z.B. alle Mitarbeiter über 30 Jahre). 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function mitarbeiterFiltern(kriterium) {
    return mitarbeiterListe.filter(kriterium);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// f) Verwende die Array.prototype.sort-Methode, um die Mitarbeiter nach ihrem Jahresgehalt in aufsteigender Reihenfolge zu sortieren
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function mitarbeiterSortierenNachGehalt() {
    mitarbeiterListe.sort((a, b) => a.jahresgehalt - b.jahresgehalt);
}

// Testen der Funktionen
const mitarbeiter1 = new Mitarbeiter("Anna", 28, "Entwicklung", 60000);
const mitarbeiter2 = new Mitarbeiter("Bernd", 35, "Marketing", 55000);
const mitarbeiter3 = new Mitarbeiter("Clara", 30, "Entwicklung", 70000);
mitarbeiterHinzufuegen(mitarbeiterListe, mitarbeiter1);
mitarbeiterHinzufuegen(mitarbeiterListe, mitarbeiter2);
mitarbeiterHinzufuegen(mitarbeiterListe, mitarbeiter3);
console.log(mitarbeiterListe.map(m => m.vorstellen()));
gehaltAktualisieren("Bernd", 58000);
console.log("Nach Gehaltsaktualisierung:");
console.log(mitarbeiterListe.map(m => m.vorstellen()));
console.log("Durchschnittsgehalt Entwicklung:", durchschnittsGehaltBerechnen("Entwicklung"));
const gefilterteMitarbeiter = mitarbeiterFiltern(m => m.alter > 30);
console.log("Mitarbeiter über 30 Jahre:", gefilterteMitarbeiter.map(m => m.vorstellen()));
mitarbeiterSortierenNachGehalt();
console.log("Mitarbeiter sortiert nach Gehalt:", mitarbeiterListe.map(m => m.vorstellen()));