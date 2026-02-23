// a)
const auto = {
    marke: "Kia",
    modell: "Ceed",
    farbe: "Blue Flame",
    jahr: 2018,
    istVerkauft: false
}

// b)
auto.verkaufen = function () {
    this.istVerkauft = true;
    console.log("Das Auto ist nun verkauft.");
}

console.log(`Vor dem Verkauf: Ist verkauft? ${auto.istVerkauft}`);
auto.verkaufen();
console.log(`Nach dem Verkauf: Ist verkauft? ${auto.istVerkauft}`);

// c)
if (new Date().getFullYear() - auto.jahr > 10) {
    console.log("Das Auto ist älter als 10 Jahre und gilt als Oldtimer.");
} else {
    console.log("Das Auto ist 10 Jahre oder jünger.");
}

// d)
auto.autoInfo = function () {
    return `Marke: ${this.marke}, Modell: ${this.modell}, Farbe: ${this.farbe}, Jahr: ${this.jahr}, Verkauft: ${this.istVerkauft ? "Ja" : "Nein"}`;
}

console.log(`Auto Info: ${auto.autoInfo()}`);

// e)
for (let eigenschaft in auto) {
    if (typeof auto[eigenschaft] !== 'function') {
        console.log(`${eigenschaft}: ${auto[eigenschaft]}`);
    }
}

// f)
const updateFarbe = (neueFarbe) => {
    auto.farbe = neueFarbe;
    console.log(`Die Farbe des Autos wurde zu ${neueFarbe} geändert.`);
}

updateFarbe("Sunrise Orange");

// g)
try {
    auto.nichtExistierendeMethode();
} catch (error) {
    console.log("Fehler: Die Methode existiert nicht im auto-Objekt.");
}