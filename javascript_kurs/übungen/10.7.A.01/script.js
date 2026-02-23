// Übung 10.7.A.01
// Aufgabe: DOM

// Entwickle eine kleine Webanwendung, die eine Liste von Produkten anzeigt. Jedes Produkt soll in einem Objekt gespeichert werden, das folgende Eigenschaften hat: id (Nummer), name (String), preis (Nummer), und kategorie (String). 
// Die Anwendung soll folgende Funktionalitäten umfassen: 
// a) Erstelle ein Array von Produktobjekten mit mindestens fünf verschiedenen Produkten. 
// b) Implementiere eine Funktion, die alle Produkte in das DOM einbindet. Verwende dazu document.createElement(), innerText und Methoden zur DOM-Navigation, um jedes Produkt als ein div-Element mit Unterelementen für id, name, preis, und kategorie anzuzeigen. 
// c) Füge eine Suchfunktion hinzu, die es ermöglicht, Produkte nach Namen zu filtern. Nutze dabei ein Input-Feld und einen Button. Die Suchergebnisse sollen im DOM aktualisiert werden. 
// d) Implementiere eine Funktion, die es erlaubt, Produkte nach Preis auf- oder absteigend zu sortieren. Füge entsprechende Buttons hinzu, um die Sortierrichtung auszuwählen. 
// e) Erstelle eine Funktion, die ein Produkt nach seiner id sucht und dieses Produkt aus dem Array entfernt. Füge ein Eingabefeld für die id und einen Button zum Entfernen hinzu.

// a)
const produkte = [
    { id: 1, name: "Laptop", preis: 999.99, kategorie: "Elektronik" },
    { id: 2, name: "Smartphone", preis: 699.99, kategorie: "Elektronik" },
    { id: 3, name: "Kaffeemaschine", preis: 49.99, kategorie: "Haushalt" },
    { id: 4, name: "Buch", preis: 19.99, kategorie: "Literatur" },
    { id: 5, name: "Kopfhörer", preis: 89.99, kategorie: "Elektronik" }
];

// b)
function produkteAnzeigen(produktListe) {
    const container = document.getElementById("produktContainer");
    container.innerHTML = "";
    produktListe.forEach(produkt => {
        const produktDiv = document.createElement("div");
        produktDiv.classList.add("produkt");
        produktDiv.innerHTML = `
            <p>ID: ${produkt.id}</p>
            <p>Name: ${produkt.name}</p>    
            <p>Preis: €${produkt.preis.toFixed(2)}</p>
            <p>Kategorie: ${produkt.kategorie}</p>
        `;
        produktDiv.style.border = "1px solid #000";
        produktDiv.style.padding = "10px";
        produktDiv.style.margin = "10px 0";
        produktDiv.style.backgroundColor = "orange";
        container.appendChild(produktDiv);
    });
}

produkteAnzeigen(produkte);

// c)
function sucheProdukte() {
    const suchbegriff = document.getElementById("suchInput").value.toLowerCase();
    const gefilterteProdukte = produkte.filter(produkt => produkt.name.toLowerCase().includes(suchbegriff));
    produkteAnzeigen(gefilterteProdukte);
}

// d) Eine Funktion, die Produkte nach Preis sortiert, entweder aufsteigend oder absteigend
function sortiereProdukteNachPreis(aufsteigend = true) {
    const sortierteProdukte = [...produkte].sort((a, b) => {
        return aufsteigend ? a.preis - b.preis : b.preis - a.preis;
    });
    produkteAnzeigen(sortierteProdukte);
}

// e)
function entferneProduktNachId() {
    const idInput = document.getElementById("entferneIdInput");
    const idZuEntfernen = parseInt(idInput.value);
    const produktIndex = produkte.findIndex(produkt => produkt.id === idZuEntfernen);
    if (produktIndex !== -1) {
        produkte.splice(produktIndex, 1);
        produkteAnzeigen(produkte);
        alert(`Produkt mit ID ${idZuEntfernen} wurde entfernt.`);
    } else {
        alert(`Kein Produkt mit ID ${idZuEntfernen} gefunden.`);
    }
    idInput.value = "";
}







// Warte, bis das DOM geladen ist
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("suchInput");

    // Überprüfe jeden Tastendruck im Input-Feld
    input.addEventListener("keypress", (event) => {
        // Wenn die gedrückte Taste "Enter" ist
        if (event.key === "Enter") {
            sucheProdukte();
        }
    });
});