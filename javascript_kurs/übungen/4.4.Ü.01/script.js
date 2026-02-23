let kursDetails = {
    name: "JavaScript Einführungskurs",
    teilnehmerzahl: 15,
    ort: "Berlin"
};

console.log(`Kursdetails: Name: ${kursDetails.name},Teilnehmerzahl: ${kursDetails.teilnehmerzahl}, Ort: ${kursDetails.ort}`);

kursDetails.teilnehmerzahl += 5;

console.log(`Aktualisierte Teilnehmerzahl: ${kursDetails.teilnehmerzahl}`);

let auslastung = kursDetails.teilnehmerzahl * 100 / 30;

console.log(`Auslastung des Kurses: ${auslastung}%`);

// math round verwenden 2 nachkommastellen
let gerundeteAuslastung = Math.round(auslastung * 100) / 100;

console.log(`Gerundete Auslastung: ${gerundeteAuslastung}%`);