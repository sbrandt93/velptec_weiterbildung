// Übungen 14.7.Ü.01
// Aufgabe: Animation und Local Storage


// Entwickle ein kleines JavaScript-Programm, das die folgenden Anforderungen erfüllt: 
// Du erstellst eine Webseite, die beim Laden überprüft, ob im Local Storage unter dem Schlüssel "besucherZaehler" bereits ein Wert gespeichert ist. 
// Falls ja, soll dieser Wert um 1 erhöht und zurück in den Local Storage geschrieben werden. Falls nein, soll der Wert auf 1 gesetzt und im Local Storage gespeichert werden. 
// Anschließend soll der aktualisierte Besucherzähler auf der Webseite angezeigt werden. 
// Zusätzlich soll die Webseite eine Nachricht anzeigen, die sich ändert, je nachdem, ob es der erste Besuch des Nutzers ist oder nicht. 
// Verwende für die Umsetzung if-else-Anweisungen, Schleifen, und arbeite mit dem Window-Objekt, um auf den Local Storage zuzugreifen. 
// Implementiere außerdem eine einfache Animation für die Anzeige des Besucherzählers unter Verwendung der Web Animations API.

// <!DOCTYPE html>
// <html lang="de">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="script.js" defer></script>
//     <link rel="stylesheet" href="styles.css">
//     <title>Übung 14.7.Ü.01</title>
// </head>
// <body>
//     <h1>Besucherzähler mit Local Storage und Animation</h1>
//     <p id="visitMessage"></p>
//     <p id="visitCount" style="font-size: 2em; font-weight: bold;"></p>
// </body>
// </html>

window.addEventListener('DOMContentLoaded', () => {
    const visitCountElement = document.getElementById('visitCount');
    const visitMessageElement = document.getElementById('visitMessage');
    let visitCount = localStorage.getItem('besucherZaehler');
    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem('besucherZaehler', visitCount);
        visitMessageElement.textContent = `Willkommen zurück! Dies ist Ihr Besuch Nummer ${visitCount}.`;
    } else {
        visitCount = 1;
        localStorage.setItem('besucherZaehler', visitCount);
        visitMessageElement.textContent = 'Willkommen zu Ihrem ersten Besuch!';
    }
    visitCountElement.textContent = `Besuche: ${visitCount}`;

    // Animation mit Web Animations API
    visitCountElement.animate([
        { transform: 'translateY(-50px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
});

