// Übung 10.3.Ü.01
// Aufgabe: DOM

// Erstelle eine JavaScript-Funktion, die eine Liste von Objekten durchgeht, die jeweils einen Mitarbeiter repräsentieren. 
// Jedes Objekt enthält den Namen, die Abteilung und das Gehalt des Mitarbeiters. Die Funktion sollte das Gesamtgehalt aller Mitarbeiter in der IT-Abteilung berechnen und zurückgeben. 
// Verwende dabei Schleifen, Bedingungen und die entsprechenden DOM-Methoden, um auf die Daten zuzugreifen. 
// Gehe davon aus, dass die Daten in einem Array von Objekten vorliegen und die HTML-Seite ein leeres div-Element mit der id "ergebnis" enthält, in das das Gesamtgehalt eingefügt werden soll.  

const mitarbeiterListe = [
    { name: "Laura Meier", abteilung: "IT", gehalt: 75000 },
    { name: "Tom Bauer", abteilung: "Vertrieb", gehalt: 50000 },
    { name: "Eva Schulze", abteilung: "IT", gehalt: 82000 },
    { name: "Jan Fischer", abteilung: "Marketing", gehalt: 60000 },
    { name: "Sophie Wagner", abteilung: "IT", gehalt: 91000 }
];

function berechneGesamtgehaltIT(mitarbeiterArray) {
    let gesamtgehalt = 0;
    for (let mitarbeiter of mitarbeiterArray) {
        if (mitarbeiter.abteilung === "IT") {
            gesamtgehalt += mitarbeiter.gehalt;
        }
    }
    return gesamtgehalt;
}

const gesamtgehaltIT = berechneGesamtgehaltIT(mitarbeiterListe);
const ergebnisDiv = document.getElementById("ergebnis");
ergebnisDiv.innerText = `Das Gesamtgehalt aller Mitarbeiter in der IT-Abteilung beträgt: ${gesamtgehaltIT} EUR.`;

console.log("Gesamtgehalt IT-Abteilung:", gesamtgehaltIT);