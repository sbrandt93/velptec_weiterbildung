// a)
let berechneQuadrat = function (zahl) {
    return zahl * zahl;
}

// b)
var nummer = 7;

// c)
let ergebnis = berechneQuadrat(nummer);

// d)
if (ergebnis > 100) {
    console.log("Das Ergebnis ist größer als 100.");
} else {
    console.log("Das Ergebnis ist kleiner oder gleich 100.");
}

// e) 
for (let i = 1; i <= 5; i++) {
    // f)
    console.log(i % 2 !== 0 ? `${i} - Ungerade` : `${i} - Gerade`);
}