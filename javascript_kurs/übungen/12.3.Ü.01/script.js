// Übungen 12.3.Ü.01
// Aufgabe: Formulare

// Erstelle ein JavaScript-Programm, das ein Formular zur Eingabe eines Veranstaltungstermins inklusive der Dauer in Stunden nutzt. 
// Das Formular soll Felder für den Titel der Veranstaltung, das Datum, die Startzeit und die Dauer in Stunden enthalten. 
// Nach dem Absenden des Formulars soll das Programm überprüfen, ob das eingegebene Datum in der Zukunft liegt und ob die Dauer realistisch ist (zwischen 1 und 8 Stunden). 
// Falls das Datum nicht in der Zukunft liegt oder die Dauer nicht im angegebenen Bereich liegt, soll eine entsprechende Fehlermeldung angezeigt werden. 
// Andernfalls soll eine Bestätigung mit den eingegebenen Daten und dem berechneten Endzeitpunkt der Veranstaltung ausgegeben werden.  


// Event-Listener für den "Absenden"-Button
document.getElementById('submitEventButton').addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    validateEventForm();
});

// Überprüfung der Eingabedaten und Anzeige von Fehlermeldungen oder Bestätigung
function validateEventForm() {
    const eventTitle = document.getElementById('eventTitle').value.trim();
    const eventDate = new Date(document.getElementById('eventDate').value);
    console.log(eventDate);
    const eventTime = document.getElementById('eventTime').value;
    console.log(eventTime);
    const duration = parseInt(document.getElementById('eventDuration').value);
    console.log(duration);
    let isValid = true;
    const currentDate = new Date();

    // Überprüfe Titel und händel Fehlermeldung
    if (eventTitle === '') {
        document.getElementById('eventTitleError').textContent = 'Bitte geben Sie den Titel der Veranstaltung ein.';
        isValid = false;
    } else {
        document.getElementById('eventTitleError').textContent = '';
    }
    // Überprüfe Datum und händel Fehlermeldung
    const eventDateTime = new Date(eventDate.toDateString() + ' ' + eventTime);
    console.log(eventDateTime);
    if (isNaN(eventDateTime.getTime()) || eventDateTime <= currentDate) {
        document.getElementById('eventDateError').textContent = 'Bitte geben Sie ein gültiges Datum in der Zukunft ein.';
        isValid = false;
    } else {
        document.getElementById('eventDateError').textContent = '';
    }
    // Überprüfe Dauer und händel Fehlermeldung
    if (isNaN(duration) || duration < 1 || duration > 8) {
        document.getElementById('eventDurationError').textContent = 'Bitte geben Sie eine realistische Dauer zwischen 1 und 8 Stunden ein.';
        isValid = false;
    } else {
        document.getElementById('eventDurationError').textContent = '';
    }
    // Wenn alle Überprüfungen erfolgreich sind
    if (isValid) {
        const endDateTime = new Date(eventDateTime.getTime() + duration * 60 * 60 * 1000);
        // alert mit Bestätigung des Events, Datum, Start- und Endzeit
        alert(`Veranstaltung "${eventTitle}" wurde erfolgreich geplant!\nDatum: ${eventDateTime.toLocaleDateString()}\nStartzeit: ${eventDateTime.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr\nEndzeit: ${endDateTime.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr`);
    } else {
        alert('Bitte korrigieren Sie die Fehler im Formular.');
    }
}

