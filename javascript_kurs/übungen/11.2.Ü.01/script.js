// Übungen 11.2.Ü.01
// Aufgabe: Events

// Erstelle eine JavaScript-Funktion, die ein Array von Objekten, die jeweils einen Namen und eine E-Mail-Adresse enthalten, verarbeitet. Die Funktion soll folgende Aufgaben erfüllen: 
// a) Überprüfe für jedes Objekt im Array, ob die E-Mail-Adresse das Format einer gültigen E-Mail hat (einfache Überprüfung auf das Vorhandensein eines "@"-Zeichens). 
//    Wenn nicht, füge dem Objekt eine neue Eigenschaft isValid mit dem Wert false hinzu. Wenn doch, setze isValid auf true. 
// b) Für jedes Objekt, dessen E-Mail-Adresse gültig ist (isValid ist true), füge einen Event Listener hinzu, der bei einem Klick ein Alert-Fenster mit dem Namen und der E-Mail-Adresse anzeigt. 
//    Verwende dazu ein dynamisch erstelltes DOM-Element für jeden gültigen Eintrag (z.B. ein <div>-Element), das den Namen und die E-Mail-Adresse enthält. 
// c) Gib das modifizierte Array zurück und stelle sicher, dass alle DOM-Elemente auf der Webseite angezeigt werden.  


// Beispiel-Array von Objekten
const personen = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bobexample.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "David", email: "david@.com" }
];

// Funktion zur Verarbeitung des Arrays von Personen
function verarbeitePersonen(personenArray) {
    // Überprüfung der E-Mail-Adressen und Hinzufügen der isValid-Eigenschaft
    personenArray.forEach(person => {
        if (person.email.includes("@")) {
            person.isValid = true;
        } else {
            person.isValid = false;
        }
    });

    // b) Erstellen von DOM-Elementen für gültige E-Mail-Adressen und Hinzufügen von Event Listeners

    const container = document.getElementById('personenContainer');

    personenArray.forEach(person => {
        if (person.isValid) {
            // Neues DOM-Element erstellen
            const personDiv = document.createElement('div');
            personDiv.className = 'person';
            personDiv.textContent = `${person.name} - ${person.email}`;
            // Event Listener hinzufügen
            personDiv.addEventListener('click', () => {
                alert(`Name: ${person.name}\nE-Mail: ${person.email}`);
            });
            container.appendChild(personDiv);
        }
    });

    // c) Rückgabe des modifizierten Arrays
    return personenArray;
}

// Aufruf der Funktion und Ausgabe des modifizierten Arrays
const modifiziertePersonen = verarbeitePersonen(personen);
console.log(modifiziertePersonen);

