/// 4. Teilprüfung - Produktgalerie für einen Online-Shop

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* 

Aufgabe
Du arbeitest an einem Webprojekt für einen Online-Shop, der spezialisiert ist auf den Verkauf von handgefertigten Dekorationsartikeln. 
Deine Aufgabe ist es, eine interaktive Produktgalerie zu erstellen. Die Galerie soll folgende Funktionalitäten haben: 

a) Lade die Produktinformationen aus einem JSON-String, der Produktname, Preis und eine URL zum Bild jedes Produkts enthält. Parse diesen JSON-String zu einem JavaScript-Objekt. 
b) Erstelle für jedes Produkt in der Liste ein neues DOM-Element, das ein Bild (img), den Produktnamen (h3) und den Preis (p) enthält. Setze die entsprechenden Werte aus dem JSON-Objekt. 
c) Platziere jedes dieser neuen Elemente in einem Container-Element auf der Webseite. 
d) Füge jedem Produkt eine Schaltfläche hinzu, die es ermöglicht, das Produkt zum "Warenkorb" hinzuzufügen. 
   Bei Klick auf diese Schaltfläche soll eine Funktion aufgerufen werden, die den Namen und den Preis des Produkts in der Konsole ausgibt, als Simulation, dass das Produkt zum Warenkorb hinzugefügt wurde.  

*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// JSON-String mit Produktinformationen
const produktDatenJSON = `[
    {"name": "Smartphone Model X", "preis": 399.99, "bildURL": "https://img.freepik.com/fotos-kostenlos/smartphone-in-bunten-kleinen-blumen_23-2147761831.jpg"},
    {"name": "Smartphone Model Y", "preis": 249.99, "bildURL": "https://img.freepik.com/fotos-kostenlos/modernes-smartphone-und-arrangierte-blumen_23-2147761830.jpg?t=st=1768214542~exp=1768218142~hmac=59827db0bce8e3c33ffd6ecb3aa6a7ec1e95e6c3384a12397df0f12e8bf7fd9b&w=1060"},
    {"name": "Smartphone Model Z", "preis": 999.99, "bildURL": "https://img.freepik.com/fotos-kostenlos/smartphone-im-naturkonzept_23-2150246081.jpg?t=st=1768214762~exp=1768218362~hmac=a41061d399286028c380e4350843025800c39e3b922b0446c7c10227a2539294&w=1060"}
]`;

// JSON-String parsen
const produktListe = JSON.parse(produktDatenJSON);

// Funktion zur Erstellung und Anzeige der Produktgalerie
function erstelleProduktGalerie(produkte) {
    const container = document.getElementById('produktContainer');
    produkte.forEach(produkt => {
        // Neues DOM-Element für jedes Produkt erstellen
        const produktDiv = document.createElement('div');
        produktDiv.className = 'produkt';
        produktDiv.innerHTML = `
            <img src="${produkt.bildURL}" alt="${produkt.name}">
            <h3>${produkt.name}</h3>
            <p>Preis: ${produkt.preis.toFixed(2)}€</p>
            <button onclick="hinzufuegenZumWarenkorb('${produkt.name}', ${produkt.preis})">Zum Warenkorb hinzufügen</button>
        `;
        container.appendChild(produktDiv);
    });
}

// Funktion zum Hinzufügen eines Produkts zum Warenkorb
function hinzufuegenZumWarenkorb(name, preis) {
    console.log(`Produkt zum Warenkorb hinzugefügt: ${name}, Preis: ${preis.toFixed(2)}€`);
    alert(`Produkt zum Warenkorb hinzugefügt: \n${name}, Preis: ${preis.toFixed(2)}€`);
}

// Galerie erstellen und anzeigen
erstelleProduktGalerie(produktListe);



// Bonus: Deaktiviere Button für noch nicht veröffentlichte Produkte (Smartphone Model Z)

document.querySelectorAll('.produkt').forEach(produktDiv => {
    const produktName = produktDiv.querySelector('h3').innerText;
    if (produktName === 'Smartphone Model Z') {
        const button = produktDiv.querySelector('button');
        button.disabled = true;
        button.innerText = 'Bald verfügbar';
    }
});