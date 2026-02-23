// a) 
const filmsammlung = {
    film1: {
        titel: "Inception",
        jahr: 2010,
        genre: "Sci-Fi",
        info: function () {
            return `${this.titel} ist ein ${this.genre} Film aus dem Jahr ${this.jahr}.`;
        }
    },
    film2: {
        titel: "The Godfather",
        jahr: 1972,
        genre: "Crime",
        info: function () {
            return `${this.titel} ist ein ${this.genre} Film aus dem Jahr ${this.jahr}.`;
        }
    },
};

// b)
for (let film in filmsammlung) {
    console.log(filmsammlung[film].info());
}

// c)
filmsammlung.alter = function () {
    const aktuellesJahr = new Date().getFullYear();
    for (let film in this) {
        if (this[film].jahr) {
            const alter = aktuellesJahr - this[film].jahr;
            console.log(`${this[film].titel} ist ${alter} Jahre alt.`);
        }
    }
};

filmsammlung.alter();
