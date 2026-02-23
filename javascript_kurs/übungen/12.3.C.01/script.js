// Übungen 12.3.C.01
// Aufgabe: Formulare

// Entwickle ein JavaScript-Programm für eine Konferenz-Website, um die Anmeldung von Teilnehmern zu verwalten.
// Das Formular soll folgende Felder enthalten: Vorname, Nachname, E-Mail-Adresse, Teilnahmetyp (Vortragender, Zuhörer), Auswahl der Workshops (maximal 3 aus 5 möglichen), sowie ein Feld für spezielle Ernährungsbedürfnisse.
// Zusätzlich soll ein Feld für die Zustimmung zur Verarbeitung persönlicher Daten vorhanden sein. Das Programm soll folgende Funktionalitäten umsetzen:

// a) Prüfe, ob alle erforderlichen Felder ausgefüllt sind. Falls nicht, zeige eine entsprechende Fehlermeldung an und verhindere das Absenden des Formulars.
// b) Stelle sicher, dass mindestens ein Workshop ausgewählt wurde, aber nicht mehr als drei. Zeige eine Fehlermeldung an, wenn die Auswahl nicht den Anforderungen entspricht.
// c) Überprüfe, ob die E-Mail-Adresse im richtigen Format eingegeben wurde. Falls nicht, zeige eine Fehlermeldung an.
// d) Implementiere eine Funktion, die das aktuelle Datum und die Uhrzeit anzeigt und überprüft, ob die Anmeldung noch innerhalb der Anmeldefrist (z.B. eine Woche vor der Konferenz) erfolgt.
//    Ist die Anmeldung zu spät, soll eine entsprechende Nachricht angezeigt werden.
// e) Sorge dafür, dass die Zustimmung zur Verarbeitung persönlicher Daten gegeben sein muss, um das Formular absenden zu können. Falls diese Zustimmung fehlt, zeige eine Fehlermeldung an.


// Event-Listener für den "Absenden"-Button
document.getElementById('submitRegistrationButton').addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    validateRegistrationForm();
});

// Überprüfung der Pflichtfelder, Workshop-Auswahl, E-Mail-Format, Anmeldefrist und Zustimmung zur Datenverarbeitung. Fehlermeldung unter den jeweiligen Feldern anzeigen.
function validateRegistrationForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const participationType = document.querySelector('input[name="participationType"]:checked');
    const workshops = document.querySelectorAll('input[name="workshops"]:checked');
    const specialDiet = document.getElementById('dietaryNeeds').value.trim();
    const dataConsent = document.getElementById('dataConsent').checked;
    let isValid = true;

    // Überprüfe Vorname und händel Fehlermeldung
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'Bitte geben Sie Ihren Vornamen ein.';
        isValid = false;
    } else {
        document.getElementById('firstNameError').textContent = '';
    }
    // Überprüfe Nachname und händel Fehlermeldung
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Bitte geben Sie Ihren Nachnamen ein.';
        isValid = false;
    } else {
        document.getElementById('lastNameError').textContent = '';
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
    // Überprüfe Teilnahmetyp und händel Fehlermeldung
    if (!participationType) {
        document.getElementById('participationTypeError').textContent = 'Bitte wählen Sie Ihren Teilnahmetyp aus.';
        isValid = false;
    } else {
        document.getElementById('participationTypeError').textContent = '';
    }
    // Überprüfe Workshop-Auswahl und händel Fehlermeldung
    if (workshops.length === 0) {
        document.getElementById('workshopsError').textContent = 'Bitte wählen Sie mindestens einen Workshop aus.';
        isValid = false;
    } else if (workshops.length > 3) {
        document.getElementById('workshopsError').textContent = 'Sie können maximal drei Workshops auswählen.';
        isValid = false;
    } else {
        document.getElementById('workshopsError').textContent = '';
    }
    // Überprüfe Zustimmung zur Datenverarbeitung und händel Fehlermeldung
    if (!dataConsent) {
        document.getElementById('dataConsentError').textContent = 'Sie müssen der Verarbeitung Ihrer Daten zustimmen.';
        isValid = false;
    } else {
        document.getElementById('dataConsentError').textContent = '';
    }
    // Überprüfe Anmeldefrist (eine Woche vor der Konferenz)
    const conferenceDate = new Date('2026-02-01');
    const registrationDeadline = new Date(conferenceDate);
    registrationDeadline.setDate(conferenceDate.getDate() - 7);
    const currentDate = new Date();
    if (currentDate > registrationDeadline) {
        alert('Die Anmeldefrist ist abgelaufen. Eine Anmeldung ist nicht mehr möglich.');
        isValid = false;
    }
    // Wenn alle Überprüfungen erfolgreich sind
    if (isValid) {
        // Erstelle ein Registrierungs-Objekt
        const registration = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            participationType: participationType.value,
            workshops: Array.from(workshops).map(ws => ws.value),
            specialDiet: specialDiet,
            dataConsent: dataConsent
        };
        console.log('Registrierungs-Objekt:', registration);
        alert('Vielen Dank für Ihre Anmeldung zur Konferenz!');
    }
}

// E-Mail-Format überprüfen
function validateEmail(email) {
    return email.includes('@');
}