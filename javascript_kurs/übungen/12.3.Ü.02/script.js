// Übungen 12.3.Ü.02
// Aufgabe: Formulare

// Entwickle ein JavaScript-Programm, das ein Formular zur Erfassung von Teilnehmerdaten für einen Online-Kochkurs verwaltet.
// Das Formular soll Felder für den Namen, die E-Mail-Adresse, das bevorzugte Küchenthema (z.B. italienisch, asiatisch, vegetarisch) und ob der Teilnehmer ein Anfänger ist oder nicht, enthalten. Verwende dabei folgende Anforderungen:

// a) Erstelle ein HTML-Formular mit den entsprechenden Eingabefeldern, inklusive eines Dropdown-Menüs für das Küchenthema und einer Checkbox für die Anfängeroption.
//    Stelle sicher, dass das Formular einen "Absenden"-Button hat.
// b) Schreibe eine JavaScript-Funktion, die beim Absenden des Formulars aufgerufen wird. Diese Funktion soll überprüfen, ob alle Felder ausgefüllt wurden.
//    Falls das Feld für den Namen oder die E-Mail-Adresse leer ist, soll eine entsprechende Fehlermeldung angezeigt werden, ohne das Formular abzusenden.
// c) Falls das Formular korrekt ausgefüllt wurde, soll eine Bestätigungsnachricht angezeigt werden, die den Namen des Teilnehmers und das gewählte Küchenthema enthält.
//    Verwende dazu das Event "submit" und verhindere das standardmäßige Absenden des Formulars mit event.preventDefault().
// d) Implementiere eine Funktion, die prüft, ob der Teilnehmer ein Anfänger ist. Wenn ja, füge der Bestätigungsnachricht hinzu, dass der Teilnehmer zusätzliche Ressourcen per E-Mail erhalten wird.


// Event-Listener für den "Absenden"-Button
document.getElementById('submitCookingCourseButton').addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    validateCookingCourseForm();
});

// Überprüfung der Eingabedaten und Anzeige von Fehlermeldungen oder Bestätigung
function validateCookingCourseForm() {
    const name = document.getElementById('participantName').value.trim();
    const email = document.getElementById('participantEmail').value.trim();
    const cuisineType = document.getElementById('cuisineTheme').value;
    const isBeginner = document.getElementById('isBeginner').checked;
    let isValid = true;

    // Überprüfe Name und händel Fehlermeldung
    if (name === '') {
        document.getElementById('participantNameError').textContent = 'Bitte geben Sie Ihren Namen ein.';
        isValid = false;
    } else {
        document.getElementById('participantNameError').textContent = '';
    }
    // Überprüfe E-Mail und händel Fehlermeldung
    if (email === '') {
        document.getElementById('participantEmailError').textContent = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        isValid = false;
    } else {
        document.getElementById('participantEmailError').textContent = '';
    }
    // Wenn alle Überprüfungen erfolgreich sind
    if (isValid) {
        let confirmationMessage = `Vielen Dank, ${name}, für Ihre Anmeldung zum ${cuisineType}-Kochkurs!`;
        if (isBeginner) {
            confirmationMessage += ' Da Sie ein Anfänger sind, werden Sie zusätzliche Ressourcen per E-Mail erhalten.';
        }
        alert(confirmationMessage);
    } else {
        alert('Bitte korrigieren Sie die Fehler im Formular.');
    }
}

