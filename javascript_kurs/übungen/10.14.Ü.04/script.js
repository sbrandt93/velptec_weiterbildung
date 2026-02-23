// Übung 10.14.Ü.04
// Aufgabe: DOM

// Entwickle eine JavaScript-Funktion, die eine Liste von Produktnamen und deren Preise als Array von Objekten entgegennimmt. 
// Die Funktion soll dann ein neues DOM-Element für jedes Produkt erstellen, das den Produktnamen und den Preis in einem <div>-Element anzeigt. Verwende dabei folgende Kriterien: 

// a) Nutze eine Schleife, um über das Array zu iterieren. 
// b) Für jedes Produkt soll ein neues <div>-Element erstellt werden, das den Namen und Preis des Produkts enthält. Nutze dabei Template Strings, um die Inhalte einzufügen. 
// c) Füge jedes <div>-Element einem vorher im HTML-Dokument definierten Container-Element hinzu. Verwende dafür einen CSS-Selektor, um auf den Container zuzugreifen. 
// d) Stelle sicher, dass deine Funktion auch prüft, ob der Container im DOM existiert, bevor sie versucht, Elemente hinzuzufügen. 
// e) Optional: Setze CSS-Styles über JavaScript, um den neu erstellten <div>-Elementen ein einheitliches Aussehen zu geben.

const produkte = [
    { name: "Laptop", preis: 999.99 },
    { name: "Smartphone", preis: 499.99 },
    { name: "Tablet", preis: 299.99 }
];

function zeigeProdukte(produktListe) {
    const container = document.querySelector('#produktContainer');
    if (!container) {
        console.error('Container-Element nicht gefunden!');
        return;
    }
    produktListe.forEach(produkt => {
        const produktDiv = document.createElement('div');
        produktDiv.className = 'produkt';
        produktDiv.innerHTML = `
            <h4>${produkt.name}</h4>
            <p>Preis: ${produkt.preis.toFixed(2)}€</p>
        `;
        container.appendChild(produktDiv);
    });
}

zeigeProdukte(produkte);

