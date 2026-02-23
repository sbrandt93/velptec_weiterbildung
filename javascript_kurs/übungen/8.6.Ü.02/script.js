// Übung 8.6.Ü.02
// Aufgabe: Arrays

// Erstelle ein JavaScript-Programm, das folgende Funktionen ausführt: 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Definiere ein Array gemischteElemente, das verschiedene Datentypen enthält (mindestens einen String, eine Zahl, ein Boolean, ein Objekt mit mindestens zwei Eigenschaften, eine Funktion, 
//    die eine einfache Berechnung durchführt, und ein weiteres Array mit mindestens drei Elementen). 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const gemischteElemente = [
    "Hallo Welt",
    42,
    true,
    { name: "Max", alter: 30 },
    function (a, b) { return a + b; },
    [1, 2, 3]
];
console.log("Ursprüngliches Array:", gemischteElemente);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Füge dem Array gemischteElemente am Ende zwei neue Elemente hinzu: einen weiteren String und eine Zahl. Verwende dafür die Methode push(). 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

gemischteElemente.push("Neuer String", 100);
console.log("Array nach dem Hinzufügen neuer Elemente:", gemischteElemente);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Entferne das erste Element des Arrays und speichere es in einer Variablen erstesElement. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const erstesElement = gemischteElemente.shift();
console.log("Entferntes erstes Element:", erstesElement);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Erstelle eine for-Schleife, die über das Array gemischteElemente iteriert und für jedes Element seinen Typ in der Konsole ausgibt. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < gemischteElemente.length; i++) {
    console.log(`Element: ${gemischteElemente[i]}, Typ: ${typeof gemischteElemente[i]}`);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Definiere eine Funktion findeStrings, die das Array gemischteElemente durchläuft und alle Elemente, die Strings sind, in einem neuen Array sammelt und dieses zurückgibt. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function findeStrings() {
    const stringElemente = [];
    for (let element of gemischteElemente) {
        if (typeof element === "string") {
            stringElemente.push(element);
        }
    }
    return stringElemente;
}
console.log("Gefundene Strings:", findeStrings());

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// f) Erstelle ein Objekt person mit den Eigenschaften name, alter und einer Methode vorstellen, die eine Begrüßungsnachricht in der Konsole ausgibt, die den Namen und das Alter der Person enthält. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const person = {
    name: "Anna",
    alter: 25,
    vorstellen: function () {
        console.log(`Hallo, mein Name ist ${this.name} und ich bin ${this.alter} Jahre alt.`);
    }
}
person.vorstellen();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// g) Verwende eine for-in-Schleife, um alle Eigenschaften und Werte des Objekts person in der Konsole auszugeben.  
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let eigenschaft in person) {
    console.log(`Eigenschaft: ${eigenschaft}, Wert: ${person[eigenschaft]}`);
}