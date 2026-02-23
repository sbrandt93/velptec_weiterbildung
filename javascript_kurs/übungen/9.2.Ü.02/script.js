// Übung 9.2.Ü.02
// Aufgabe: JSON

// Erstelle ein JavaScript-Programm, das folgende Aufgaben erfüllt: 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Definiere ein Array von Objekten, wobei jedes Objekt einen Studenten repräsentiert. Jedes Objekt soll die Eigenschaften name, fachrichtung und semester enthalten. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const studentenArray = [
    { name: "Lena Fischer", fachrichtung: "Informatik", semester: 3 },
    { name: "Max Weber", fachrichtung: "Maschinenbau", semester: 5 },
    { name: "Sophie Wagner", fachrichtung: "Betriebswirtschaft", semester: 2 }
];
console.log("Studenten Array:", studentenArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Füge dem Array zwei neue Studenten hinzu. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

studentenArray.push(
    { name: "Jonas Hoffmann", fachrichtung: "Elektrotechnik", semester: 4 },
    { name: "Mia Schulz", fachrichtung: "Psychologie", semester: 1 }
);
console.log("Aktualisiertes Studenten Array:", studentenArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c) Erstelle eine Funktion, die das Array entgegennimmt und die Namen der Studenten der Informatik-Fachrichtung, die im ersten Semester sind, in die Konsole ausgibt.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function filterInformatikErstsemester(studenten) {
    const gefilterteStudenten = studenten.filter(student => student.fachrichtung === "Informatik" && student.semester === 1);
    gefilterteStudenten.forEach(student => console.log("Informatik Erstsemester:", student.name));
}
filterInformatikErstsemester(studentenArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d) Verwende die map-Methode, um ein neues Array zu erstellen, das nur die Namen der Studenten enthält.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const studentennamenArray = studentenArray.map(student => student.name);
console.log("Studentennamen Array:", studentennamenArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e) Konvertiere das Array von Studentenobjekten in einen JSON-String und speichere diesen in einer Variablen.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const studentenJsonString = JSON.stringify(studentenArray);
console.log("Studenten JSON String:", studentenJsonString);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// f) Parse den JSON-String zurück in ein Array von Objekten. 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const geparstesStudentenArray = JSON.parse(studentenJsonString);
console.log("Geparstes Studenten Array:", geparstesStudentenArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// g) Gib das resultierende Array in der Konsole aus, um zu überprüfen, ob die Konvertierung korrekt funktioniert hat.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("Überprüfung der Konvertierung:", JSON.stringify(studentenArray) === JSON.stringify(geparstesStudentenArray));