// a)
const kontaktListe = {
    "Max Mustermann": "max.mustermann@example.com",
    "Erika Musterfrau": "erika.musterfrau@example.com",
    "Hans Beispiel": "hans.beispiel@example.com"
};

// b)
kontaktListe.neuerKontakt = function (name, email) {
    // d)
    if (this[name]) {
        console.log("Kontakt existiert bereits.");
        return;
    }
    this[name] = email;
};

// c)
function emailSuche(name) {
    if (kontaktListe[name]) {
        return kontaktListe[name];
    } else {
        return "Kontakt nicht gefunden.";
    }
}

// e)
for (let name in kontaktListe) {
    if (typeof kontaktListe[name] === 'string') {
        console.log(`${name}: ${kontaktListe[name]}`);
    }
}

// f)
kontaktListe.kontaktLöschen = function (name) {
    if (this[name]) {
        delete this[name];
        console.log(`Kontakt ${name} wurde gelöscht.`);
    } else {
        console.log("Kontakt nicht gefunden.");
    }
}

// Testaufrufe
kontaktListe.neuerKontakt("Anna Beispiel", "anna.beispiel@example.com");
console.log(emailSuche("Erika Musterfrau")); // Erwartet: erika.musterfrau@example.com
kontaktListe.kontaktLöschen("Hans Beispiel");
console.log(emailSuche("Hans Beispiel")); // Erwartet: Kontakt nicht gefunden.
console.log(kontaktListe);
