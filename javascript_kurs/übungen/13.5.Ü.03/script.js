// Übungen 13.5.Ü.03
// Aufgabe: Asynchrones JavaScript

// Entwickle eine kleine Webanwendung, die Nutzereingaben aus einem Formular verwendet, um eine Liste von Aufgaben zu verwalten. Die Anwendung soll folgende Funktionen umfassen: 

// a) Ein Formular, in dem der Nutzer eine neue Aufgabe beschreiben und eine Priorität (hoch, mittel, niedrig) auswählen kann. Nach dem Abschicken des Formulars soll die Aufgabe in einem Array gespeichert werden. 
//    Jede Aufgabe ist ein Objekt mit den Eigenschaften beschreibung und priorität. 
// b) Eine Funktion, die das Array von Aufgaben durchläuft und diese sortiert nach Priorität (hoch > mittel > niedrig) in der Konsole ausgibt. Verwende dabei eine if-else-Struktur, um die Priorität zu überprüfen. 
// c) Eine Schaltfläche "Aufgaben anzeigen", die bei Klick die oben genannte Funktion ausführt. 
// d) Implementiere eine einfache Validierung für das Formular, die überprüft, ob die Eingabe der Aufgabenbeschreibung nicht leer ist. Falls das Eingabefeld leer ist, soll eine entsprechende Nachricht angezeigt werden und das Abschicken verhindert werden. 
// e) Verwende die Fetch-API, um eine GET-Anfrage an https://jsonplaceholder.typicode.com/posts/1 zu senden, sobald das Formular erfolgreich abgeschickt wurde. Logge die Antwort in der Konsole.


// <!DOCTYPE html>
// <html lang="de">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="script.js" defer></script>
//     <link rel="stylesheet" href="styles.css">
//     <title>Übung 13.5.Ü.03</title>
// </head>
// <body>
//     <h1>Aufgabenverwaltung</h1>
//     <form id="taskForm">
//         <label for="description">Aufgabenbeschreibung:</label>
//         <input type="text" id="description" name="description" required>

//         <label for="priority">Priorität:</label>
//         <select id="priority" name="priority">
//             <option value="hoch">Hoch</option>
//             <option value="mittel">Mittel</option>
//             <option value="niedrig">Niedrig</option>
//         </select>

//         <button type="submit">Aufgabe hinzufügen</button>
//     </form>

//     <button id="showTasksBtn">Aufgaben anzeigen</button>

//     <ul id="tasksList"></ul>
// </body>
// </html>


document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const showTasksBtn = document.getElementById('showTasksBtn');
    const tasksList = document.getElementById('tasksList');
    let tasks = [];
    // a) Formular-Event-Listener
    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const descriptionInput = document.getElementById('description');
        const prioritySelect = document.getElementById('priority');
        const description = descriptionInput.value.trim();
        const priority = prioritySelect.value;
        // d) Validierung
        if (description === '') {
            alert('Die Aufgabenbeschreibung darf nicht leer sein.');
            return;
        }
        // Aufgabe zum Array hinzufügen
        tasks.push({ beschreibung: description, priorität: priority });
        descriptionInput.value = '';
        prioritySelect.value = 'mittel';

        // e) Fetch-API-Aufruf
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            const data = await response.json();
            console.log('Fetch-Antwort:', data);
        } catch (error) {
            console.error('Fetch-Fehler:', error);
        }
    });

    // b) Funktion zum Sortieren und Anzeigen der Aufgaben
    function displaySortedTasks() {
        const priorityOrder = { hoch: 1, mittel: 2, niedrig: 3 };
        const sortedTasks = tasks.slice().sort((a, b) => {
            if (priorityOrder[a.priorität] < priorityOrder[b.priorität]) {
                return -1;
            } else if (priorityOrder[a.priorität] > priorityOrder[b.priorität]) {
                return 1;
            } else {
                return 0;
            }
        });
        console.clear();
        console.log('Sortierte Aufgaben:');
        sortedTasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.beschreibung} (Priorität: ${task.priorität})`);
        }
        );
    }
    // c) Event-Listener für "Aufgaben anzeigen"-Schaltfläche
    showTasksBtn.addEventListener('click', displaySortedTasks);
});

