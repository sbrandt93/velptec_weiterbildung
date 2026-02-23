// Übung 8.1.Ü.01

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Definiere eine Funktion bewerteWetter, die als Parameter eine Zeichenkette wetter erhält. 
//    Die Funktion gibt basierend auf dem übergebenen Wetterzustand (Sonnig, Bewölkt, Regnerisch, Schneefall) eine Empfehlung für eine Aktivität zurück. 
//    Verwende eine switch-Anweisung für die Entscheidungsfindung.
// ------------------------------------------------------------------------------------------------------------------------------------------------------

function bewerteWetter(wetter) {

    // b)
    const wetterZustaende = ["Sonnig", "Bewölkt", "Regnerisch", "Schneefall"];
    if (!wetterZustaende.includes(wetter)) {
        return "Ungültiger Wetterzustand! Bitte gib einen der folgenden Zustände ein: Sonnig, Bewölkt, Regnerisch, Schneefall.";
    }

    switch (wetter) {
        case "Sonnig":
            return "Gehe spazieren im Park!";
        case "Bewölkt":
            return "Besuche ein Museum!";
        case "Regnerisch":
            return "Schau einen Film!";
        case "Schneefall":
            return "Baue einen Schneemann!";
        default:
            return "Ungültiger Wetterzustand!";
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Erweitere die Funktion um eine Prüfung der übergebenen Zeichenkette. 
//    Stelle sicher, dass nur valide Wetterzustände verarbeitet werden (Sonnig, Bewölkt, Regnerisch, Schneefall). 
//    Gib eine entsprechende Fehlermeldung aus, falls ein ungültiger Zustand übergeben wird. Nutze eine Kombination aus if-else und switch.
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Bereits in a) implementiert

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Implementiere eine Schleife (wahlweise for oder while), die die Funktion bewerteWetter für eine Liste von verschiedenen Wetterzuständen aufruft. 
//    Die Liste soll mindestens vier verschiedene Zustände enthalten, darunter mindestens einen ungültigen Zustand.
// ------------------------------------------------------------------------------------------------------------------------------------------------------

for (let wetterZustand of ["Sonnig", "Bewölkt", "Regnerisch", "Schneefall", "Windig"]) {
    console.log(`Wetterzustand: ${wetterZustand} - Empfehlung: ${bewerteWetter(wetterZustand)}`);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Verwende Funktionsausdrücke und/oder Arrow-Funktionen, um eine anonyme Funktion zu definieren, 
//    die die aktuelle Uhrzeit in Stunden ausgibt und eine Empfehlung abgibt, ob es Zeit für das Mittagessen ist (zwischen 12 und 14 Uhr).
// ------------------------------------------------------------------------------------------------------------------------------------------------------

const uhrzeitPruefen = () => {
    const aktuelleStunde = new Date().getHours();

    // e)
    console.log(`Aktuelle Uhrzeit: ${aktuelleStunde} Uhr`);


    if (aktuelleStunde >= 12 && aktuelleStunde <= 14) {
        return `Es ist ${aktuelleStunde} Uhr. Zeit für das Mittagessen!`;
    } else {
        return `Es ist ${aktuelleStunde} Uhr. Kein Mittagessen jetzt.`;
    };
};

console.log(uhrzeitPruefen());

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Füge Debugging-Code hinzu, der überprüft, ob die Uhrzeit korrekt ausgegeben wird.
//    Verwende console.log für die Ausgabe der Ergebnisse und der Empfehlungen.
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Bereits in d) implementiert

// Ende der Übung 8.1.Ü.01

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Bonus
// ------------------------------------------------------------------------------------------------------------------------------------------------------

function bewerteWetter2(wetter) {
    const wetterAktivitaeten = {
        "Sonnig": ["Gehe spazieren im Park!", "Mache ein Picknick!", "Fahre Fahrrad!"],
        "Bewölkt": ["Besuche ein Museum!", "Lies ein Buch zu Hause!", "Gehe ins Kino!"],
        "Regnerisch": ["Schau einen Film!", "Backe Kekse!", "Spiele Brettspiele!"],
        "Schneefall": ["Baue einen Schneemann!", "Mache eine Schneeballschlacht!", "Gehe Ski fahren!"]
    }

    let randomIndex = Math.floor(Math.random() * 3);

    if (!wetterAktivitaeten.hasOwnProperty(wetter)) {
        return "Ungültiger Wetterzustand! Bitte gib einen der folgenden Zustände ein: Sonnig, Bewölkt, Regnerisch, Schneefall.";
    }
    return wetterAktivitaeten[wetter][randomIndex];
}

console.log(bewerteWetter2("Sonnig"));
console.log(bewerteWetter2("Bewölkt"));
console.log(bewerteWetter2("Regnerisch"));
console.log(bewerteWetter2("Schneefall"));
console.log(bewerteWetter2("Windig"));