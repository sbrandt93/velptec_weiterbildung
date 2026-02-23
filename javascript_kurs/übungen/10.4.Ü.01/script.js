// Übung 10.4.Ü.01
// Aufgabe: DOM

// Erstelle eine JavaScript-Funktion filterAndModify, die ein Array von Objekten als Parameter annimmt. Jedes Objekt im Array hat die Eigenschaften name (ein String), age (eine Zahl) und email (ein String). Die Funktion soll folgendes tun: 
// a) Filtere alle Objekte heraus, deren age größer als 18 ist.  
// b) Modifiziere die gefilterten Objekte, indem du eine neue Eigenschaft adult hinzufügst, die true ist, wenn das Alter größer als 18 ist, ansonsten false.  
// c) Verwende querySelector um ein div-Element mit der ID results im DOM zu finden und füge für jedes gefilterte und modifizierte Objekt einen neuen Paragraphen (<p>) hinzu, der den Namen und das Alter aus dem Objekt in der Form "Name: [name], Alter: [age]" darstellt. 
// d) Stelle sicher, dass deine Funktion keine Fehler wirft, wenn das Array leer ist oder null/undefined übergeben wird.  
// e) Verwende Arrow-Funktionen, wo immer es möglich ist.

const filterAndModify = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Das übergebene Array ist leer oder ungültig.");
        return;
    }
    const resultsDiv = document.querySelector("#results");
    if (!resultsDiv) {
        console.log("Das div-Element mit der ID 'results' wurde nicht gefunden.");
        return;
    }
    const gefilterteObjekte = arr.filter(obj => obj.age > 18);
    gefilterteObjekte.forEach(obj => {
        obj.adult = obj.age > 18;
        const p = document.createElement("p");
        p.textContent = `Name: ${obj.name}, Alter: ${obj.age}`;
        resultsDiv.appendChild(p);
    });
}

// Beispielaufruf der Funktion
const personenArray = [
    { name: "Anna", age: 22, email: "anna@example.com" },
    { name: "Ben", age: 17, email: "ben@example.com" },
    { name: "Clara", age: 19, email: "clara@example.com" }
];

filterAndModify(personenArray);