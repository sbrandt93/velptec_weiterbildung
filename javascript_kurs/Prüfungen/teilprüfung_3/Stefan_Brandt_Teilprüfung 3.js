/// 3. Teilprüfung - Buchverwaltungssystem

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* 

Aufgabe:
Du arbeitest als Entwickler*in in einem Unternehmen, das eine Webanwendung für ein Buchverwaltungssystem entwickelt. 
Deine Aufgabe ist es, eine JavaScript-Funktion zu entwickeln, die eine Liste von Büchern als JSON-String erhält. 
Diese Liste soll anschließend analysiert und bearbeitet werden, um verschiedene Informationen und Statistiken zu den Büchern zu erzeugen. Die Funktion soll folgende Aufgaben erfüllen:

a) Konvertiere den JSON-String in ein JavaScript-Objekt.
b) Zähle die Anzahl der Bücher und gib diese aus.
c) Finde das Buch mit der höchsten Seitenanzahl und gib dessen Titel und Seitenanzahl aus.
d) Erstelle ein neues Array, das nur die Titel der Bücher enthält, die vor dem Jahr 2000 veröffentlicht wurden.
e) Sortiere dieses Array alphabetisch und gib es aus.
f) Konvertiere das resultierende Array zurück in einen JSON-String und gib diesen aus.


Nutze folgenden JSON-String als Eingabedaten:

[ 
    {"titel": "Mansfield Park", "veröffentlicht": 1814, "seiten": 480}, 
    {"titel": "Stolz und Vorurteil", "veröffentlicht": 1813, "seiten": 432}, 
    {"titel": "Emma", "veröffentlicht": 1816, "seiten": 392}, 
    {"titel": "Der große Gatsby", "veröffentlicht": 1925, "seiten": 180}, 
    {"titel": "1984", "veröffentlicht": 1949, "seiten": 328} 
]
    */

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Beispiel JSON-String
const jsonString = `[
    {"titel": "Mansfield Park", "veröffentlicht": 1814, "seiten": 480},
    {"titel": "Stolz und Vorurteil", "veröffentlicht": 1813, "seiten": 432},
    {"titel": "Emma", "veröffentlicht": 1816, "seiten": 392},
    {"titel": "Der große Gatsby", "veröffentlicht": 1925, "seiten": 180},
    {"titel": "1984", "veröffentlicht": 1949, "seiten": 328}
]`;

/// Funktion zur Analyse der Bücher 
function analysiereBuecher(jsonString) {

    // a) Konvertiere den JSON-String in ein JavaScript-Objekt
    const buecherArray = JSON.parse(jsonString);
    console.log("Bücher Array:", buecherArray);

    // b) Zähle die Anzahl der Bücher und gib diese aus
    const anzahlBuecher = buecherArray.length;
    console.log(`Anzahl der Bücher: ${anzahlBuecher}`);

    // c) Finde das Buch mit der höchsten Seitenanzahl und gib dessen Titel und Seitenanzahl aus
    const buchMitMeistenSeiten = buecherArray.reduce((maxBuch, aktuellesBuch) => {
        return aktuellesBuch.seiten > maxBuch.seiten ? aktuellesBuch : maxBuch;
    });
    console.log(`Buch mit der höchsten Seitenanzahl: ${buchMitMeistenSeiten.titel} (${buchMitMeistenSeiten.seiten} Seiten)`);

    // d) Erstelle ein neues Array, das nur die Titel der Bücher enthält, die vor dem Jahr 2000 veröffentlicht wurden
    const titelVor2000 = buecherArray.filter(buch => buch.veröffentlicht < 2000).map(buch => buch.titel);
    console.log("Titel der Bücher, die vor dem Jahr 2000 veröffentlicht wurden:", titelVor2000);

    // e) Sortiere dieses Array alphabetisch und gib es aus
    const sortierteTitel = titelVor2000.sort();
    console.log("Titel der Bücher, die vor dem Jahr 2000 veröffentlicht wurden (alphabetisch sortiert):", sortierteTitel);

    // f) Konvertiere das resultierende Array zurück in einen JSON-String und gib diesen aus
    const jsonStringSortierteTitel = JSON.stringify(sortierteTitel);
    console.log("JSON-String der sortierten Titel:", jsonStringSortierteTitel);
}

// Aufruf der Funktion mit dem gegebenen JSON-String
analysiereBuecher(jsonString);