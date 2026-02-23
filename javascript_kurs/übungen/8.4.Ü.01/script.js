// Übung 8.4.Ü.01

// Erstelle eine JavaScript-Funktion verwalteFilmSammlung, die ein Array von Filmobjekten verwaltet.
// Jedes Filmobjekt soll folgende Eigenschaften haben: titel, jahr, genre, bewertung. Die Funktion soll folgende Funktionalitäten bieten:

// a) Hinzufügen eines neuen Films.
// b) Aktualisieren der Bewertung eines Films durch den Titel.
// c) Löschen eines Films durch den Titel.
// d) Anzeigen aller Filme in der Konsole, sortiert nach dem Jahr der Veröffentlichung.
// e) Suchen eines Films durch den Titel und Anzeigen der Details in der Konsole.

// Verwende dabei Kontrollstrukturen, Schleifen, Bedingungen, und Objektmanipulationen, die du kennst. Nutze die Konsole zur Ausgabe von Informationen. 

class Film {
    constructor(titel, jahr, genre, bewertung) {
        this.titel = titel;
        this.jahr = jahr;
        this.genre = genre;
        this.bewertung = bewertung;
    }
    toString() {
        return `${this.titel} (${this.jahr}), Genre: ${this.genre}, Bewertung: ${this.bewertung}`;
    }
}

function verwalteFilmSammlung() {
    const filmSammlung = [];

    // a)
    function hinzufuegen(titel, jahr, genre, bewertung) {
        const neuerFilm = new Film(titel, jahr, genre, bewertung);
        filmSammlung.push(neuerFilm);
        console.log(`Film hinzugefügt: ${titel} (${jahr}), Genre: ${genre}, Bewertung: ${bewertung}`);
    }

    // b)
    function aktualisieren(titel, neueBewertung) {
        const film = filmSammlung.find(f => f.titel === titel);
        if (film) {
            film.bewertung = neueBewertung;
            console.log(`Bewertung aktualisiert: ${titel} hat jetzt die Bewertung ${neueBewertung}`);
        } else {
            console.log(`Film nicht gefunden: ${titel}`);
        }
    }

    // c)
    function loeschen(titel) {
        const index = filmSammlung.findIndex(f => f.titel === titel);
        if (index !== -1) {
            filmSammlung.splice(index, 1);
            console.log(`Film gelöscht: ${titel}`);
        } else {
            console.log(`Film nicht gefunden: ${titel}`);
        }
    }

    // d) 
    function anzeigenNachJahr() {
        const sortierteFilme = [...filmSammlung].sort((a, b) => a.jahr - b.jahr);
        console.log("Filme sortiert nach Jahr:");
        console.log(`Filmsammelung: ${sortierteFilme}`);
    }

    // e)
    function suchen(titel) {
        const film = filmSammlung.find(f => f.titel === titel);
        if (film) {
            console.log(`Film gefunden: ${film}`);
        } else {
            console.log(`Film nicht gefunden: ${titel}`);
        }
    }

    return {
        hinzufuegen,
        aktualisieren,
        loeschen,
        anzeigenNachJahr,
        suchen
    };
}

// Beispielnutzung
const meineFilme = verwalteFilmSammlung();
meineFilme.hinzufuegen("Inception", 2010, "Sci-Fi", 8.8);
meineFilme.hinzufuegen("The Dark Knight", 2008, "Action", 9.0);
meineFilme.hinzufuegen("Interstellar", 2014, "Sci-Fi", 8.6);
meineFilme.aktualisieren("Inception", 9.0);
meineFilme.loeschen("The Dark Knight");
meineFilme.anzeigenNachJahr();
meineFilme.suchen("Interstellar");
