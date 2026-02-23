// Übung 10.14.Ü.01
// Aufgabe: DOM

// Entwickle ein kleines JavaScript-Programm, das folgende Anforderungen erfüllt: 
// a) Erstelle eine Klasse Person mit den Eigenschaften name und alter. Füge der Klasse eine Methode vorstellen hinzu, die eine Begrüßungsnachricht in der Konsole ausgibt, welche den Namen und das Alter der Person enthält. 
// b) Nutze die DOM-API, um ein neues div-Element zu erzeugen. Dieses Element soll den Namen und das Alter einer Person (Instanz der Person-Klasse) anzeigen, die du zuvor erstellt hast. 
// Setze die id des div-Elements auf "person-info" und füge es dem body des Dokuments hinzu. 
// c) Ändere die Farbe des Textes des div-Elements zu Blau, indem du die CSS-Eigenschaft color direkt über JavaScript setzt. 
// d) Erstelle eine Funktion aktualisiereAlter, die das Alter der Person in der Anzeige aktualisiert, wenn sie aufgerufen wird. Diese Funktion sollte ein neues Alter als Parameter akzeptieren und die Anzeige im div-Element entsprechend aktualisieren.  

class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    vorstellen() {
        console.log(`Hallo, mein Name ist ${this.name} und ich bin ${this.alter} Jahre alt.`);
    }
}

const person = new Person("Max Mustermann", 30);
person.vorstellen();

const personDiv = document.createElement("div");
personDiv.id = "person-info";
personDiv.innerText = `Name: ${person.name}, Alter: ${person.alter}`;
document.body.appendChild(personDiv);

document.getElementById("person-info").style.color = "blue";

function aktualisiereAlter(neuesAlter) {
    person.alter = neuesAlter;
    document.getElementById("person-info").innerText = `Name: ${person.name}, Alter: ${person.alter}`;
}

// Beispielaufruf der Funktion zur Aktualisierung des Alters
aktualisiereAlter(31);
