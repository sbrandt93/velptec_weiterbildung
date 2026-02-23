// Übungen 12.2.Ü.01
// Aufgabe: Formulare

// Entwickle ein JavaScript-Programm, das ein einfaches Anmeldeformular für ein Event handhabt.
// Das Formular soll folgende Felder enthalten: Vorname, Nachname, E-Mail-Adresse und eine Auswahl für die Teilnahme an Workshops.
// Jeder Workshop soll durch eine Checkbox repräsentiert werden. Es gibt drei Workshops zur Auswahl: "Webentwicklung Grundlagen", "Fortgeschrittene JavaScript-Techniken" und "Einführung in CSS".
// Zusätzlich soll es einen "Anmelden"-Button geben. Deine Aufgabe besteht darin, folgende Funktionalitäten zu implementieren:

// a) Überprüfe beim Klick auf den "Anmelden"-Button, ob alle Felder (Vorname, Nachname, E-Mail-Adresse) ausgefüllt wurden. Wenn eines der Felder leer ist, zeige eine entsprechende Fehlermeldung an.
// b) Stelle sicher, dass die E-Mail-Adresse ein gültiges Format hat (z.B. enthält "@" und einen Punkt nach dem "@"). Wenn das Format ungültig ist, zeige eine Fehlermeldung an.
// c) Überprüfe, ob mindestens ein Workshop ausgewählt wurde. Wenn kein Workshop ausgewählt wurde, zeige eine Fehlermeldung an.
// d) Wenn alle Überprüfungen erfolgreich sind, zeige eine Bestätigungsnachricht an, dass die Anmeldung erfolgreich war.

// Verwende für die Implementierung DOM-Manipulation, um auf die Formularelemente zuzugreifen und Event-Listener hinzuzufügen.

// Event-Listener für den "Anmelden"-Button
document.getElementById('anmeldenButton').addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    validateForm();
});

// Überprüfung der Pflichtfelder, Auswahl und E-Mail-Format. Fehlermeldung unter den jeweiligen Feldern anzeigen.
function validateForm() {
    const vorname = document.getElementById('vorname').value.trim();
    const nachname = document.getElementById('nachname').value.trim();
    const email = document.getElementById('email').value.trim();
    const workshops = document.querySelectorAll('input[name="workshops"]:checked');
    let isValid = true;

    // Überprüfe Vorname und händel Fehlermeldung
    if (vorname === '') {
        document.getElementById('vornameError').textContent = 'Bitte geben Sie Ihren Vornamen ein.';
        isValid = false;
    } else {
        document.getElementById('vornameError').textContent = '';
    }
    // Überprüfe Nachname und händel Fehlermeldung
    if (nachname === '') {
        document.getElementById('nachnameError').textContent = 'Bitte geben Sie Ihren Nachnamen ein.';
        isValid = false;
    } else {
        document.getElementById('nachnameError').textContent = '';
    }
    // Überprüfe E-Mail und händel Fehlermeldung
    if (email === '') {
        document.getElementById('emailError').textContent = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    // Überprüfe Workshop-Auswahl und händel Fehlermeldung
    if (workshops.length === 0) {
        document.getElementById('workshopError').textContent = 'Bitte wählen Sie mindestens einen Workshop aus.';
        isValid = false;
    } else {
        document.getElementById('workshopError').textContent = '';
    }
    if (isValid) {
        alert('Die Anmeldung war erfolgreich!');
    }
}

// E-Mail-Format überprüfen
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}