// Transferaufgabe 8.6.A.01
// Aufgabe: Arrays

// Entwickle ein kleines JavaScript-Programm, das folgende Funktionen umfasst: 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Erstelle ein Array mit Namen gemischteListe, das verschiedene Datentypen enthält (mindestens ein String, eine Zahl, ein Boolean, ein Objekt mit mindestens zwei Eigenschaften, 
//    ein Array mit mindestens zwei Elementen und eine Funktion, die eine einfache Ausgabe in die Konsole macht). 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const gemischteListe = [
    "Hallo Welt",
    42,
    true,
    { name: "Max", alter: 30 },
    [1, 2, 3],
    function () { console.log("Dies ist eine Funktion in einem Array."); }
];

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Füge dem Array gemischteListe zwei weitere Elemente hinzu: Ein weiteres Objekt und ein Datum-Objekt mit dem aktuellen Datum. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

gemischteListe.push(
    { beruf: "Entwickler", erfahrung: 4 },
    new Date()
);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Durchlaufe das Array gemischteListe mit einer Schleife deiner Wahl und gib für jedes Element den Typ (mittels typeof oder einer anderen Methode, wenn nötig) in der Konsole aus. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let element of gemischteListe) {
    console.log(`Element: ${element}, Typ: ${typeof element}`);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Verwende die if-else oder switch Kontrollstruktur, um für jedes Element im Array eine spezielle Nachricht in der Konsole auszugeben, 
// basierend auf dem Typ des Elements (z.B. "Dies ist ein String: [Wert des Strings]"). 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log('\n');
for (let element of gemischteListe) {
    let typ = typeof element;
    if (typ === 'string') {
        console.log(`Dies ist ein String: ${element}`);
    } else if (typ === 'number') {
        console.log(`Dies ist eine Zahl: ${element}`);
    } else if (typ === 'boolean') {
        console.log(`Dies ist ein Boolean: ${element}`);
    } else if (typ === 'object') {
        if (Array.isArray(element)) {
            console.log(`Dies ist ein Array mit ${element.length} Elementen: ${element}`);
        } else if (element instanceof Date) {
            console.log(`Dies ist ein Datum-Objekt: ${element.toDateString()}`);
        } else {
            console.log(`Dies ist ein Objekt mit Eigenschaften: ${JSON.stringify(element)}`);
        }
    } else if (typ === 'function') {
        console.log(`Dies ist eine Funktion:`);
        element();
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Entferne das letzte und das erste Element aus dem Array gemischteListe und gib das veränderte Array in der Konsole aus. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

gemischteListe.shift();
gemischteListe.pop();
console.log('\nVerändertes Array:', gemischteListe);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// f) Erstelle eine Funktion, die ein Array als Parameter akzeptiert und die Länge des Arrays sowie die Elemente in umgekehrter Reihenfolge in der Konsole ausgibt. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function arrayUmkehren(arr) {
    console.log(`Länge des Arrays: ${arr.length}`);
    console.log('Elemente in umgekehrter Reihenfolge:');
    console.log(arr.slice().reverse());
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// g) Nutze diese Funktion, um das Array gemischteListe zu bearbeiten und das Ergebnis auszugeben.  
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

arrayUmkehren(gemischteListe);