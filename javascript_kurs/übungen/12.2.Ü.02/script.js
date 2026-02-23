// Übungen 12.2.Ü.02
// Aufgabe: Formulare

// Erstelle ein JavaScript-Programm, das ein einfaches Formular zur Erfassung von Benutzerfeedback nutzt.
// Das Formular soll Felder für den Namen des Benutzers, eine E-Mail-Adresse, eine Auswahl für die Zufriedenheit (zufrieden, neutral, unzufrieden) über Radiobuttons und ein Textfeld für Kommentare enthalten.
// Dein Programm soll folgende Funktionalitäten umfassen:

// a) Überprüfe beim Absenden des Formulars, ob alle Felder ausgefüllt wurden. Falls ein Feld leer ist, zeige eine entsprechende Fehlermeldung an und verhindere das Absenden des Formulars.
// b) Überprüfe die Gültigkeit der E-Mail-Adresse (einfache Überprüfung, ob ein "@" enthalten ist).
// c) Gib eine Bestätigungsnachricht aus, wenn das Formular erfolgreich abgeschickt wurde, ohne die Seite neu zu laden.
// d) Speichere die Eingaben in einem Objekt und gib dieses Objekt in der Konsole aus.

// Event-Listener für den "Absenden"-Button
document.getElementById('submitFeedbackButton').addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    validateFeedbackForm();
});

// Überprüfung der Pflichtfelder und E-Mail-Format. Fehlermeldung unter den jeweiligen Feldern anzeigen.
function validateFeedbackForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const comments = document.getElementById('comments').value.trim();
    let isValid = true;

    // Überprüfe Name und händel Fehlermeldung
    if (name === '') {
        document.getElementById('nameError').textContent = 'Bitte geben Sie Ihren Namen ein.';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
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
    // Überprüfe Zufriedenheit und händel Fehlermeldung
    if (!satisfaction) {
        document.getElementById('satisfactionError').textContent = 'Bitte wählen Sie Ihre Zufriedenheit aus.';
        isValid = false;
    } else {
        document.getElementById('satisfactionError').textContent = '';
    }
    // Überprüfe Kommentare und händel Fehlermeldung
    if (comments === '') {
        document.getElementById('commentsError').textContent = 'Bitte geben Sie Ihre Kommentare ein.';
        isValid = false;
    } else {
        document.getElementById('commentsError').textContent = '';
    }
    // Wenn alle Überprüfungen erfolgreich sind
    if (isValid) {
        // Erstelle ein Feedback-Objekt
        const feedback = {
            name: name,
            email: email,
            satisfaction: satisfaction.value,
            comments: comments
        };
        console.log('Feedback-Objekt:', feedback);
        alert('Vielen Dank für Ihr Feedback!');
    }
}

// E-Mail-Format überprüfen
function validateEmail(email) {
    return email.includes('@');
}

