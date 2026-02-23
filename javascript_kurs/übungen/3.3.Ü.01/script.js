let temperatur = 23;
let istWarm = temperatur > 25;

let anzahlBesucher = 50;
const maxBesucher = 100;

let istUeberfuellt = anzahlBesucher > maxBesucher;

if (istWarm) {
    console.log("Es ist warm draußen.");
} else {
    console.log("Es ist nicht so warm draußen.");
}

if (istUeberfuellt) {
    console.log("Der Veranstaltungsort ist überfüllt.");
} else {
    console.log("Der Veranstaltungsort hat noch Platz.");
}