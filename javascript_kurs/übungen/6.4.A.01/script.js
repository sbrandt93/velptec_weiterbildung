// a)
var besucherZaehler = 0; // Globale Variable zur Speicherung der Besucheranzahl

// b)
/// Funktion zum Hinzufügen von Besuchern
function besucherHinzufuegen(anzahl) {
    besucherZaehler += anzahl;
    console.log(`Aktuelle Besucheranzahl: ${besucherZaehler}`);
}

// c)
console.log("c) Besucher hinzufügen:");
besucherHinzufuegen(1);
besucherHinzufuegen(3);
besucherHinzufuegen(37);

// d)
/// Erweiterte Funktion mit Statusanzeige
function besucherHinzufuegen2(anzahl) {
    besucherZaehler += anzahl;
    console.log(`Aktuelle Besucheranzahl: ${besucherZaehler}`);
    if (besucherZaehler > 10) {
        let status = "voll";
        console.log(`Status: ${status}`);
    } else {
        let status = "offen";
        console.log(`Status: ${status}`);
    }
}

console.log("d) Besucher hinzufügen mit Statusanzeige:");
besucherZaehler = 0; // Reset before starting
besucherHinzufuegen2(1);
besucherHinzufuegen2(3);
besucherHinzufuegen2(7);

// e)
/// Funktion zum Zurücksetzen des Zählers
function resetBesucherZaehler() {
    besucherZaehler = 0;
    console.log("Besucherzähler wurde zurückgesetzt.");
}

// f)
/// Erweiterte Funktion mit automatischem Zurücksetzen des Zählers
function besucherHinzufuegen3(anzahl) {
    besucherZaehler += anzahl;
    console.log(`Aktuelle Besucheranzahl: ${besucherZaehler}`);
    if (besucherZaehler > 10) {
        let status = "voll";
        console.log(`Status: ${status}`);
    } else {
        let status = "offen";
        console.log(`Status: ${status}`);
    }

    if (besucherZaehler >= 20) {
        resetBesucherZaehler();
    }
}

console.log("f) Besucher hinzufügen mit automatischem Zurücksetzen:");
besucherZaehler = 0; // Reset before starting
besucherHinzufuegen3(5);
besucherHinzufuegen3(8);
besucherHinzufuegen3(10);