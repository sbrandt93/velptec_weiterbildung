// Übung 9.2.Ü.03
// Aufgabe: JSON

// Entwickle ein kleines JavaScript-Programm, das folgende Anforderungen erfüllt:

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Definiere ein JSON-Objekt, das Informationen über drei verschiedene Bücher enthält. Jedes Buch soll folgende Eigenschaften haben: Titel, Autor, Veröffentlichungsjahr und eine Liste von Stichworten.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const buecherInfos = {
    "buecher": [
        {
            "titel": "Die Verwandlung",
            "autor": "Franz Kafka",
            "veroeffentlichungsjahr": 1915,
            "stichworte": ["Existentialismus", "Surrealismus", "Moderne"]
        },
        {
            "titel": "Der Prozess",
            "autor": "Franz Kafka",
            "veroeffentlichungsjahr": 1925,
            "stichworte": ["Recht", "Bürokratie", "Absurdität"]
        },
        {
            "titel": "1984",
            "autor": "George Orwell",
            "veroeffentlichungsjahr": 1949,
            "stichworte": ["Dystopie", "Totalitarismus", "Überwachung"]
        }
    ]
};
console.log("Bücher Informationen:", buecherInfos);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Wandle das JSON-Objekt in einen String um und gib diesen String in der Konsole aus. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const buecherJsonString = JSON.stringify(buecherInfos);
console.log("Bücher JSON String:", buecherJsonString);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) c) Parse den String zurück in ein JavaScript-Objekt. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const geparstesBuecherObjekt = JSON.parse(buecherJsonString);
console.log("Geparstes Bücher Objekt:", geparstesBuecherObjekt);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Verwende eine for-Schleife, um über die Bücher zu iterieren. Für jedes Buch sollst du das Veröffentlichungsjahr überprüfen.
//    Wenn das Buch vor dem Jahr 2000 veröffentlicht wurde, gib den Titel und das Veröffentlichungsjahr in der Konsole aus.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let buch of geparstesBuecherObjekt.buecher) {
    if (buch.veroeffentlichungsjahr < 2000) {
        console.log(`Buch: ${buch.titel}, Veröffentlichungsjahr: ${buch.veroeffentlichungsjahr}`);
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Erstelle eine Funktion, die für jedes Buch überprüft, ob ein bestimmtes Stichwort (z.B. "Abenteuer") in der Liste der Stichworte enthalten ist. Wenn ja, gib den Titel des Buches aus.  
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sucheNachStichwort(buecherObjekt, stichwort) {
    for (let buch of buecherObjekt.buecher) {
        if (buch.stichworte.includes(stichwort)) {
            console.log(`Buch mit dem Stichwort "${stichwort}": ${buch.titel}`);
        }
    }
}

sucheNachStichwort(geparstesBuecherObjekt, "Absurdität");