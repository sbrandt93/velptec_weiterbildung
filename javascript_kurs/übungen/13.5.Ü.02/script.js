// Übungen 13.5.Ü.02
// Aufgabe: Asynchrones JavaScript

// Erstelle eine Webseite, die ein Formular mit einem Texteingabefeld und einem Button enthält. Das Texteingabefeld soll vom Benutzer genutzt werden, um eine Stadt einzugeben.
// Beim Klicken auf den Button soll eine asynchrone Anfrage an die OpenWeatherMap API gesendet werden, um die aktuelle Temperatur in der eingegebenen Stadt zu erhalten.
// Die Temperatur soll anschließend auf der Webseite angezeigt werden. Verwende async/await für die asynchrone Anfrage.
// Sorge auch dafür, dass die Anwendung auf mögliche Fehler, wie eine falsche Stadteingabe oder Probleme mit der Netzwerkverbindung, angemessen reagiert und dem Benutzer eine entsprechende Meldung anzeigt.

// <!DOCTYPE html>
// <html lang="de">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="script.js" defer></script>
//     <link rel="stylesheet" href="styles.css">
//     <title>Übung 13.5.Ü.02</title>
// </head>
// <body>
//     <h1>Wetter-App</h1>
//     <div id="weather-form">
//         <h2>Stadt eingeben</h2>
//         <form id="get-weather-form">
//             <label for="city-name">Stadtname:</label>
//             <input type="text" id="city-name" name="city-name" required>
//             <br>
//             <button type="submit">Wetter abrufen</button>
//         </form>
//     </div>
//     <div id="weather-result">
//         <h2>Aktuelle Temperatur:</h2>
//         <p id="temperature-display">Bitte Stadt eingeben und auf "Wetter abrufen" klicken.</p>
//     </div>
// </body>
// </html>


document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '41043325c8e843616eb2c59f716775bb'; // Ersetze dies durch deinen OpenWeatherMap API-Schlüssel
    const weatherForm = document.getElementById('get-weather-form');
    const temperatureDisplay = document.getElementById('temperature-display');
    // Funktion zum Abrufen der aktuellen Temperatur
    async function fetchTemperature(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Stadt nicht gefunden oder Netzwerkfehler');
            }
            const data = await response.json();
            return data.main.temp;
        }
        catch (error) {
            throw error;
        }
    }
    // Event Listener für das Formular
    weatherForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = document.getElementById('city-name').value;
        temperatureDisplay.textContent = 'Lade...';
        try {
            const temperature = await fetchTemperature(city);
            temperatureDisplay.textContent = `Die aktuelle Temperatur in ${city} beträgt ${temperature} °C.`;
        }
        catch (error) {
            temperatureDisplay.textContent = `Fehler: ${error.message}`;
        }

    });
});