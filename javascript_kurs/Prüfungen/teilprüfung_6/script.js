/// 6. Teilprüfung - Webanwendung zur Aufgabenplanung

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*

Aufgabe:
Entwickle eine Webanwendung, die es Benutzern ermöglicht, eine einfache Aufgabe zu planen und zu speichern.
Die Anwendung soll ein Formular enthalten, in dem Benutzer eine Aufgabenbeschreibung, ein Fälligkeitsdatum und eine Priorität (hoch, mittel, niedrig) angeben können.
Nach dem Absenden des Formulars soll die Anwendung die Aufgabe in einer Liste anzeigen.
Verwende die Fetch-API, um die Aufgabendaten asynchron an einen Server zu senden (du kannst https://jsonplaceholder.typicode.com/posts als Test-API verwenden, um POST-Anfragen zu simulieren).
Implementiere zusätzlich eine Validierung, die sicherstellt, dass alle Formularfelder ausgefüllt wurden, bevor die Daten gesendet werden. Wenn ein Feld leer ist, soll eine entsprechende Fehlermeldung angezeigt werden.
Nutze async/await für die asynchrone Logik.

*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.getElementById('taskForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.textContent = '';
    if (!description || !dueDate || !priority) {
        errorMessageDiv.textContent = 'Bitte füllen Sie alle Felder aus.';
        return;
    }
    const task = {
        description: description,
        dueDate: dueDate,
        priority: priority
    };
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        const responseData = await response.json();
        console.log('Serverantwort:', responseData);
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Fälligkeitsdatum:</strong> ${new Date(dueDate).toLocaleDateString('de-DE')} | <strong>Priorität:</strong> ${priority}<br><strong>Beschreibung:</strong><br><em>${description}</em>`;
        taskList.appendChild(listItem);
        document.getElementById('taskForm').reset();
    } catch (error) {
        errorMessageDiv.textContent = 'Fehler beim Senden der Daten an den Server.';
        console.error('Fehler:', error);
    }
});