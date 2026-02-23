// Übungen 11.9.A.01
// Aufgabe: Events

// Entwickle eine interaktive Webanwendung, die folgende Funktionalitäten umfasst: 

// a) Erstelle eine HTML-Seite mit einem leeren div-Element. Verwende JavaScript, um dynamisch eine Liste von Produkten (mindestens 5 verschiedene Produkte) in diesem div anzuzeigen. 
//    Jedes Produkt soll aus einem Namen, einer Beschreibung und einem Preis bestehen. Nutze Arrays und Objekte, um die Produktdaten zu speichern.  
// b) Füge eine Suchfunktion hinzu, die es ermöglicht, die Liste der Produkte nach Namen zu filtern. Nutze dabei ein Eingabefeld und einen Button. Die Filterung soll in Echtzeit erfolgen, sobald der Nutzer den Button klickt. 
// c) Implementiere eine Funktion, die es erlaubt, Produkte nach ihrem Preis zu sortieren (aufsteigend und absteigend). Füge zwei Buttons hinzu, um die Sortierrichtung auszuwählen. 
// d) Erstelle ein Feature, bei dem Nutzer auf ein Produkt klicken können, um eine detaillierte Ansicht dieses Produkts in einem neuen div-Element anzuzeigen. 
//    Dies soll das Bild des Produkts (verwende eine URL als Platzhalter), den Namen, die Beschreibung und den Preis beinhalten. 
// e) Implementiere ein einfaches Bewertungssystem, bei dem Nutzer Produkte mit Sternen (1 bis 5) bewerten können. Speichere die Bewertungen in einem Array und zeige den Durchschnitt der Bewertungen neben dem Produktnamen an. 
// f) Nutze das window-object, um die Größe des Browserfensters zu überwachen. Wenn das Fenster eine bestimmte Größe unterschreitet, passe die Anzeige der Produkte automatisch an (z.B. weniger Spalten in der Produktliste).


// Beispiel-Array von Produkten
const produkte = [
    { name: "Produkt A", beschreibung: "Beschreibung von Produkt A", preis: 29.99, bild: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Xbox_One_Elite_Wireless_Controller_Series_2_%28Model_1797%29.jpg", bewertungen: [] },
    { name: "Produkt B", beschreibung: "Beschreibung von Produkt B", preis: 19.99, bild: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Xbox_One_Elite_Wireless_Controller_Series_2_%28Model_1797%29.jpg", bewertungen: [] },
    { name: "Produkt C", beschreibung: "Beschreibung von Produkt C", preis: 39.99, bild: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Xbox_One_Elite_Wireless_Controller_Series_2_%28Model_1797%29.jpg", bewertungen: [] },
    { name: "Produkt D", beschreibung: "Beschreibung von Produkt D", preis: 9.99, bild: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Xbox_One_Elite_Wireless_Controller_Series_2_%28Model_1797%29.jpg", bewertungen: [] },
    { name: "Produkt E", beschreibung: "Beschreibung von Produkt E", preis: 49.99, bild: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Xbox_One_Elite_Wireless_Controller_Series_2_%28Model_1797%29.jpg", bewertungen: [] }
]

// a) Funktion zur Anzeige der Produktliste
function zeigeProdukte(produktListe) {
    const container = document.getElementById('produktContainer');
    container.innerHTML = ''; // Vorherigen Inhalt löschen
    produktListe.forEach(produkt => {
        const produktDiv = document.createElement('div');
        produktDiv.className = 'produkt';
        produktDiv.innerHTML = `
            <h3>${produkt.name}</h3>
            <p>${produkt.beschreibung}</p>
            <p>Preis: ${produkt.preis.toFixed(2)}€</p>
            <p>Durchschnittsbewertung: ${berechneDurchschnittsbewertung(produkt.name)}</p>
        `;

        container.appendChild(produktDiv);
    });
}

// Initiale Anzeige der Produkte
zeigeProdukte(produkte);

// b) Suchfunktion 
function sucheProdukte(suchbegriff) {
    const gefilterteProdukte = produkte.filter(produkt =>
        produkt.name.toLowerCase().includes(suchbegriff.toLowerCase())
    );
    zeigeProdukte(gefilterteProdukte);
}
document.getElementById('suchButton').addEventListener('click', () => {
    const suchbegriff = document.getElementById('suchfeld').value;
    sucheProdukte(suchbegriff);
});

// c) Sortierfunktion
function sortiereProdukte(richtung) {
    const sortierteProdukte = [...produkte].sort((a, b) =>
        richtung === 'aufsteigend' ? a.preis - b.preis : b.preis - a.preis
    );
    zeigeProdukte(sortierteProdukte);
}
document.getElementById('sortAufsteigend').addEventListener('click', () => {
    sortiereProdukte('aufsteigend');
});
document.getElementById('sortAbsteigend').addEventListener('click', () => {
    sortiereProdukte('absteigend');
});

// d) Detaillierte Ansicht (Platzhalterfunktion)
function zeigeProduktDetails(produkt) {
    const detailsContainer = document.getElementById('produktDetailsContainer');
    detailsContainer.innerHTML = `
        <h2>${produkt.name}</h2>
        <img src="${produkt.bild}" alt="${produkt.name}">
        <p>${produkt.beschreibung}</p>
        <p>Preis: ${produkt.preis.toFixed(2)}€</p>
    `;
}
// Event Listener für Produktklicks
document.getElementById('produktContainer').addEventListener('click', (event) => {
    if (event.target.closest('.produkt')) {
        const produktName = event.target.closest('.produkt').querySelector('h3').textContent;
        const produkt = produkte.find(p => p.name === produktName);
        if (produkt) {
            zeigeProduktDetails(produkt);
        }
    }
});

// e) Bewertungssystem 
function berechneDurchschnittsbewertung(produktName) {
    const produkt = produkte.find(p => p.name === produktName);
    if (produkt.bewertungen.length === 0) return "Keine Bewertungen";
    const summe = produkt.bewertungen.reduce((acc, bewertung) => acc + bewertung, 0);
    return (summe / produkt.bewertungen.length).toFixed(2);
}
function fuegeBewertungHinzu(produktName, bewertung) {
    const produkt = produkte.find(p => p.name === produktName);
    if (produkt) {
        produkt.bewertungen.push(bewertung);
        zeigeProdukte(produkte); // Aktualisiere die Anzeige
    }
}
// Beispiel: Bewertung hinzufügen (kann durch UI-Elemente ersetzt werden)
fuegeBewertungHinzu("Produkt A", 5);
fuegeBewertungHinzu("Produkt A", 4);
fuegeBewertungHinzu("Produkt B", 3);

// f) Überwachung der Fenstergröße
window.addEventListener('resize', () => {
    const container = document.getElementById('produktContainer');
    if (window.innerWidth < 600) {
        container.style.gridTemplateColumns = '1fr'; // Eine Spalte
    } else {
        container.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Drei Spalten
    }
});

// Initiale Anpassung der Anzeige basierend auf der Fenstergröße
if (window.innerWidth < 600) {
    document.getElementById('produktContainer').style.gridTemplateColumns = '1fr';
} else {
    document.getElementById('produktContainer').style.gridTemplateColumns = 'repeat(3, 1fr)';
}

// Galerie erstellen und anzeigen
zeigeProdukte(produkte);

