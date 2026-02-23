// Übungen 13.5.Ü.01
// Aufgabe: Asynchrones JavaScript 

// Entwickle eine kleine Webanwendung, die das aktuelle Datum und die Uhrzeit anzeigt und es dem Benutzer ermöglicht, eine Erinnerung für ein zukünftiges Datum und eine Uhrzeit zu setzen. 
// Sobald die festgelegte Zeit erreicht ist, soll eine Benachrichtigung auf der Webseite erscheinen, die den Benutzer an sein Ereignis erinnert. 
// Verwende dabei die Fetch-API, um eine API für die aktuelle Uhrzeit zu nutzen und async/await für die asynchrone Programmierung. Die Erinnerung und die Benachrichtigung sollen ohne Neuladen der Seite funktionieren. 

// a) Richte eine HTML-Seite ein, die ein Formular enthält. Das Formular soll Felder für die Eingabe eines Ereignisnamens, eines Datums und einer Uhrzeit enthalten. Füge zudem einen Button hinzu, um die Erinnerung zu setzen.  
// b) Verwende JavaScript, um das aktuelle Datum und die Uhrzeit von einer API wie http://worldtimeapi.org/api/timezone/Europe/Berlin zu ziehen. Zeige diese Informationen auf der Webseite an. 
// c) Implementiere eine Funktion, die das Formular überwacht und bei der Einreichung eine Erinnerung erstellt. Speichere die Erinnerungen in einem Array. 
// d) Setze einen Timer, der jede Minute überprüft, ob die Zeit für eine der gesetzten Erinnerungen erreicht wurde. Zeige eine Benachrichtigung auf der Webseite an, wenn die Zeit für eine Erinnerung gekommen ist. 
// e) Verwende die Fetch-API und async/await, um die aktuelle Uhrzeit asynchron zu laden und die Seite bei der Anzeige der aktuellen Uhrzeit oder einer Erinnerung nicht neu zu laden.


document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://worldtimeapi.org/api/timezone/Europe/Berlin';
    const currentTimeElement = document.getElementById('current-time');
    const reminderForm = document.getElementById('set-reminder-form');
    const remindersList = document.getElementById('reminders-list');
    let reminders = [];
    let currentTime = null;

    // Funktion zum Abrufen der aktuellen Zeit von der API
    async function fetchCurrentTime() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            currentTime = new Date(data.datetime);
            currentTimeElement.textContent = `Aktuelle Zeit: ${currentTime.toLocaleString()}`;
        } catch (error) {
            console.error('Fehler beim Abrufen der aktuellen Zeit:', error);
        }
    }
    // Funktion zum Überprüfen der Erinnerungen
    function checkReminders() {
        const now = new Date();
        reminders.forEach((reminder, index) => {
            if (now >= reminder.date) {
                alert(`Erinnerung: ${reminder.name} um ${reminder.date.toLocaleString()}`);
                reminders.splice(index, 1); // Entferne die Erinnerung nach dem Anzeigen
                renderReminders();
            }
        });
    }
    // Funktion zum Rendern der Erinnerungen auf der Webseite
    function renderReminders() {
        remindersList.innerHTML = '';
        reminders.forEach(reminder => {
            const li = document.createElement('li');
            li.textContent = `${reminder.name} - ${reminder.date.toLocaleString()}`;
            remindersList.appendChild(li);
        });
    }
    // Event Listener für das Formular
    reminderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('event-name').value;
        const dateInput = document.getElementById('event-date').value;
        const timeInput = document.getElementById('event-time').value;
        const dateTimeString = `${dateInput}T${timeInput}`;
        const date = new Date(dateTimeString);
        if (date > new Date()) {
            reminders.push({ name, date });
            renderReminders();
            reminderForm.reset();
        } else {
            alert('Bitte wählen Sie ein zukünftiges Datum und eine zukünftige Uhrzeit.');
        }
    });
    // Initiales Laden der aktuellen Zeit
    fetchCurrentTime();
    // Aktualisiere die aktuelle Zeit alle 60 Sekunden
    setInterval(fetchCurrentTime, 60000);
    // Überprüfe die Erinnerungen alle Minute
    setInterval(checkReminders, 60000);
});