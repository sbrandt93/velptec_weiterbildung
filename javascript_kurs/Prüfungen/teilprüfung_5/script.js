/// 5. Teilprüfung - Verwaltung von Veranstaltungseinladungen

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*

Aufgabe:
Entwickle eine Webanwendung zur Verwaltung von Veranstaltungseinladungen.
Die Anwendung soll es einem Benutzer ermöglichen, Veranstaltungsdetails einzugeben, Teilnehmer hinzuzufügen oder zu entfernen und die Einladungen per E-Mail zu versenden.
Die Anwendung soll auch überprüfen, ob alle erforderlichen Informationen vorhanden sind, bevor die Einladungen versendet werden.

a) Erstelle ein HTML-Formular mit Feldern für die Veranstaltungsdetails: Titel, Datum, Uhrzeit, Ort und eine Beschreibung. Füge auch eine dynamische Liste von Teilnehmern hinzu, die Vorname, Nachname und E-Mail-Adresse enthält.
b) Implementiere JavaScript-Logik, um Teilnehmer zur Liste hinzuzufügen. Jeder Teilnehmer soll in einem Array gespeichert werden. Überprüfe, ob die E-Mail-Adresse im richtigen Format vorliegt und nicht null oder undefined ist.
c) Implementiere eine Funktion, die prüft, ob alle Formularfelder (Titel, Datum, Uhrzeit, Ort, Beschreibung) ausgefüllt sind und mindestens ein Teilnehmer hinzugefügt wurde.
   Wenn ein Feld leer ist oder keine Teilnehmer vorhanden sind, soll eine entsprechende Fehlermeldung angezeigt werden.
d) Füge Event-Listener hinzu, die auf das "Submit"-Event des Formulars reagieren. Verhindere das Standardverhalten des Formularabsendens und führe stattdessen die Überprüfung der Eingaben durch.
   Wenn alle Überprüfungen erfolgreich sind, zeige eine Bestätigungsmeldung an, dass die Einladungen versendet wurden (das tatsächliche Versenden der E-Mails wird simuliert).
e) Implementiere eine Funktion, die das aktuelle Datum und die Dauer bis zum Veranstaltungsdatum berechnet und diese Informationen auf der Webseite anzeigt.

*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

window.onload = function () {
    displayEventCountdown();
};

// Event-Listener für das Formular-Submit-Event
document.getElementById('eventForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    if (validateEventForm()) {
        sendInvitations();
    }
});

// Event-Listener für den "Teilnehmer hinzufügen"-Button
document.getElementById('addParticipantForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    addParticipant();
});

// Array zur Speicherung der Teilnehmer
let participantList = [];

// Funktion zum Hinzufügen eines Teilnehmers
function addParticipant() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Überprüfe Vorname, Nachname und E-Mail und händel Fehlermeldung
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'Bitte geben Sie den Vornamen ein.';
        isValid = false;
    } else {
        document.getElementById('firstNameError').textContent = '';
    }
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Bitte geben Sie den Nachnamen ein.';
        isValid = false;
    } else {
        document.getElementById('lastNameError').textContent = '';
    }
    if (email === '') {
        document.getElementById('emailError').textContent = 'Bitte geben Sie die E-Mail-Adresse ein.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    // Wenn alle Überprüfungen erfolgreich sind, füge den Teilnehmer hinzu
    if (isValid) {
        participantList.push({ firstName: firstName, lastName: lastName, email: email });
        updateParticipantDisplay();
        // Formularfelder zurücksetzen
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('participantListError').textContent = '';
    }
}

// Funktion zur Aktualisierung der Teilnehmeranzeige
function updateParticipantDisplay() {
    const participantListContainer = document.getElementById('participantList');
    participantListContainer.innerHTML = '';
    participantList.forEach((participant, index) => {
        const participantDiv = document.createElement('div');
        participantDiv.textContent = `${participant.firstName} ${participant.lastName} (${participant.email})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Entfernen';
        removeButton.addEventListener('click', function () {
            participantList.splice(index, 1);
            updateParticipantDisplay();
        });
        participantDiv.appendChild(removeButton);
        participantListContainer.appendChild(participantDiv);
    });
}

// Funktion zur Validierung des Formulars
function validateEventForm() {
    const title = document.getElementById('eventTitle').value.trim();
    const date = document.getElementById('eventDate').value.trim();
    const time = document.getElementById('eventTime').value.trim();
    const location = document.getElementById('eventLocation').value.trim();
    const description = document.getElementById('eventDescription').value.trim();
    const participantCount = participantList.length;
    let isValid = true;

    // Überprüfe alle Formularfelder und händel Fehlermeldungen
    if (title === '') {
        document.getElementById('eventTitleError').textContent = 'Bitte geben Sie den Titel der Veranstaltung ein.';
        isValid = false;
    } else {
        document.getElementById('eventTitleError').textContent = '';
    }
    if (date === '') {
        document.getElementById('eventDateError').textContent = 'Bitte geben Sie das Datum der Veranstaltung ein.';
        isValid = false;
    } else {
        document.getElementById('eventDateError').textContent = '';
    }
    if (time === '') {
        document.getElementById('eventTimeError').textContent = 'Bitte geben Sie die Uhrzeit der Veranstaltung ein.';
        isValid = false;
    } else {
        document.getElementById('eventTimeError').textContent = '';
    }
    if (location === '') {
        document.getElementById('eventLocationError').textContent = 'Bitte geben Sie den Ort der Veranstaltung ein.';
        isValid = false;
    } else {
        document.getElementById('eventLocationError').textContent = '';
    }
    if (description === '') {
        document.getElementById('eventDescriptionError').textContent = 'Bitte geben Sie eine Beschreibung der Veranstaltung ein.';
        isValid = false;
    } else {
        document.getElementById('eventDescriptionError').textContent = '';
    }
    if (participantCount === 0) {
        document.getElementById('participantListError').textContent = 'Bitte fügen Sie mindestens einen Teilnehmer hinzu.';
        isValid = false;
    } else {
        document.getElementById('participantListError').textContent = '';
    }
    return isValid;
}

// Funktion zum Simulieren des Versendens der Einladungen
function sendInvitations() {
    alert('Einladungen wurden erfolgreich versendet!');
}

// Funktion zur Berechnung und Anzeige des aktuellen Datums und der Dauer bis zum Veranstaltungsdatum
function displayEventCountdown() {
    const todaysDate = new Date();
    const eventDate = document.getElementById('eventDate').value.trim();
    if (!eventDate) {
        document.getElementById('dateInfo').textContent = `Aktuelles Datum: ${todaysDate.toLocaleDateString()}.`;
    }
    if (eventDate) {
        const eventTime = document.getElementById('eventTime').value.trim();
        const eventDateTime = new Date(eventDate + ' ' + eventTime);
        const diffInMs = eventDateTime - todaysDate;
        if (diffInMs > 0) {
            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            const diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('dateInfo').textContent = `Aktuelles Datum: ${todaysDate.toLocaleDateString()}. Dauer bis zur Veranstaltung: ${diffInDays} Tage, ${diffInHours} Stunden, ${diffInMinutes} Minuten.`;
        } else {
            document.getElementById('dateInfo').textContent = `Aktuelles Datum: ${todaysDate.toLocaleDateString()}. Die Veranstaltung hat bereits stattgefunden.`;
        }
    }
}

// Event-Listener zur Aktualisierung der Datumsinformation bei Änderung des Veranstaltungsdatums oder der Uhrzeit
document.getElementById('eventDate').addEventListener('change', displayEventCountdown);
document.getElementById('eventTime').addEventListener('change', displayEventCountdown);


