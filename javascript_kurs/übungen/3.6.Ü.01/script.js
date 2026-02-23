let alter = "30";
let name = "Max";

console.log(`Name: ${name}
Alter: ${alter}`);

let alterAlsZahl = parseInt(alter) + 5;
console.log(`Alter in 5 Jahren: ${alterAlsZahl}`);

let besucher;

if (besucher === undefined) {
    besucher = "Neue Besucher";
    console.log(besucher);
}

let loginVersuche = null;

// Login Versuch simulieren
if (loginVersuche === null) {
    loginVersuche = 1;
    console.log(`Login Versuch: ${loginVersuche}`);
}

let leerString = "";

if (leerString.length === 0) {
    console.log("Der String ist leer.");
} else {
    console.log(leerString);
}

let zahlString = "1234.56";

console.log(`zahlString als Ganzzahl: ${parseInt(zahlString)}`);
console.log(`zahlString als Gleitkommazahl: ${parseFloat(zahlString)}`);

let a = false;
let b = false;
let c = a && b;

console.log(`a: ${a}, b: ${b}, a && b: ${c}`);