// Übung 9.2.Ü.01
// Aufgabe: JSON

// Erstelle ein JavaScript-Programm, das folgende Aufgaben erfüllt: 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Definiere ein Array von Objekten, wobei jedes Objekt einen Mitarbeiter darstellt. 
//    Jedes Mitarbeiterobjekt soll die Eigenschaften name, position, startDatum (als String im Format YYYY-MM-DD) und gehalt enthalten. Füge mindestens drei Mitarbeiter in das Array ein. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const mitarbeiterArray = [
    { name: "Anna Müller", position: "Entwicklerin", startDatum: "2018-03-15", gehalt: 60000 },
    { name: "Bernd Schmidt", position: "Designer", startDatum: "2019-07-22", gehalt: 55000 },
    { name: "Clara Becker", position: "Projektmanagerin", startDatum: "2020-11-01", gehalt: 70000 }
];
console.log("Mitarbeiter Array:", mitarbeiterArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Schreibe eine Funktion, die das Array entgegennimmt und das durchschnittliche Gehalt der Mitarbeiter berechnet. Gib das Ergebnis auf der Konsole aus. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function berechneDurchschnittsgehalt(mitarbeiter) {
    let gesamtGehalt = mitarbeiter.reduce((summe, mitarbeiter) => summe + mitarbeiter.gehalt, 0);
    return gesamtGehalt / mitarbeiter.length;
}

const durchschnittsgehalt = berechneDurchschnittsgehalt(mitarbeiterArray);
console.log("Durchschnittliches Gehalt:", durchschnittsgehalt.toFixed(2) + " EUR");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Nutze die Array.prototype.sort() Methode, um die Mitarbeiter basierend auf ihrem Startdatum, vom ältesten zum neuesten, zu sortieren. Gib das sortierte Array auf der Konsole aus. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const sortierteMitarbeiter = mitarbeiterArray.slice().sort((a, b) => new Date(a.startDatum) - new Date(b.startDatum));
console.log("Sortierte Mitarbeiter nach Startdatum:", sortierteMitarbeiter);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Konvertiere das Mitarbeiter-Array in einen JSON-String und speichere diesen in einer Variablen. Verwende JSON.stringify() für die Konvertierung. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const mitarbeiterJsonString = JSON.stringify(mitarbeiterArray);
console.log("Mitarbeiter JSON String:", mitarbeiterJsonString);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Parse den JSON-String zurück in ein JavaScript-Objekt. Verwende JSON.parse() und speichere das Ergebnis in einer neuen Variablen. 
//    Überprüfe, ob das ursprüngliche Array und das geparste Objekt identisch sind, indem du das Ergebnis auf der Konsole ausgibst.  
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const geparstesMitarbeiterObjekt = JSON.parse(mitarbeiterJsonString);
console.log("Geparstes Mitarbeiter Objekt:", geparstesMitarbeiterObjekt);
console.log("Sind das ursprüngliche Array und das geparste Objekt identisch?", JSON.stringify(mitarbeiterArray) === JSON.stringify(geparstesMitarbeiterObjekt));