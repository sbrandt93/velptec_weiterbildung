// Übungen 13.5.C.01
// Aufgabe: Asynchrones JavaScript

// Entwickle eine Webanwendung, die Nutzereingaben über ein Formular entgegennimmt, um eine personalisierte Begrüßung basierend auf der aktuellen Uhrzeit und dem Namen des Nutzers zu generieren.
// Die Anwendung soll außerdem die Fähigkeit haben, Daten von einer externen API zu beziehen und diese Daten abhängig von der Nutzereingabe zu filtern.
// Verwende die Fetch-API und async/await für asynchrone Anfragen an eine Test-API, um eine Liste von Aufgaben zu erhalten. Die Anwendung soll folgende Funktionalitäten aufweisen:

// a) Erstelle ein HTML-Formular mit einem Textfeld für den Namen des Nutzers und einem Submit-Button. Binden ein Event an den Submit-Button, das die Eingaben verarbeitet, ohne die Seite neu zu laden.
// b) Implementiere eine Funktion, die eine personalisierte Begrüßung in einem <div>-Element auf der Seite anzeigt.
// Die Begrüßung soll "Guten Morgen, [Name]!" von 5:00 bis 11:59, "Guten Tag, [Name]!" von 12:00 bis 17:59 und "Guten Abend, [Name]!" von 18:00 bis 4:59 ausgeben.
// c) Verwende die Fetch-API und async/await, um eine Liste von Aufgaben von der Test-API https://jsonplaceholder.typicode.com/todos zu beziehen. Zeige die ersten fünf Aufgaben in einer Liste auf der Seite an.
// d) Erweitere die Anwendung, sodass der Nutzer eine Zahl zwischen 1 und 200 eingeben kann, um eine spezifische Aufgabe aus der Liste der abgerufenen Aufgaben anzuzeigen. Verarbeite diese Eingabe im selben Formular wie den Namen.


// a) Bereits im HTML-Teil implementiert

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('greeting-form');
    const greetingDiv = document.getElementById('greeting-display');
    const tasksList = document.getElementById('tasks-list');
    const taskDisplay = document.getElementById('tasks-display');
    let tasks = [];

    // b) Funktion zur Anzeige der personalisierten Begrüßung
    function displayGreeting(name) {
        const now = new Date();
        const hours = now.getHours();
        let greeting = '';
        if (hours >= 5 && hours < 12) {
            greeting = `Guten Morgen, ${name}!`;
        } else if (hours >= 12 && hours < 18) {
            greeting = `Guten Tag, ${name}!`;
        } else {
            greeting = `Guten Abend, ${name}!`;
        }
        greetingDiv.textContent = greeting;
    }

    // c) Funktion zum Abrufen der Aufgaben
    async function fetchTasks() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!response.ok) {
                throw new Error('Fehler beim Abrufen der Aufgaben');
            }
            tasks = await response.json();
        } catch (error) {
            tasksList.innerHTML = `<li>${error.message}</li>`;
        }
    }

    // d) Event Listener für das Formular
    form.addEventListener('submit', (event) => {
        console.log('Form submitted');
        event.preventDefault();
        const name = document.getElementById('user-name').value;
        const taskNumber = parseInt(document.getElementById('task-number').value, 10);
        console.log('Name:', name);
        console.log('Task Number:', taskNumber);
        displayGreeting(name);
        if (taskNumber >= 1 && taskNumber <= tasks.length) {
            console.log('Displaying task number:', taskNumber);
            const task = tasks[taskNumber - 1];
            taskDisplay.textContent = `Aufgabe ${taskNumber}: ${task.title} (Erledigt: ${task.completed})`;
        } else {
            taskDisplay.textContent = 'Bitte eine gültige Aufgabennummer zwischen 1 und 200 eingeben.';
        }
    });

    // Initiales Abrufen der Aufgaben
    fetchTasks();
});
