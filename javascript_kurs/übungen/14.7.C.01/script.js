// Übungen 14.7.C.01
// Aufgabe: Window-Objekt, Observer, Cookies, Animation, Local Storage

// Du arbeitest als Webentwickler und hast die Aufgabe, eine interaktive Webseite zu erstellen, die verschiedene Webtechnologien nutzt. Die Webseite soll folgende Funktionen haben: 

// a) Verwende das Window-Objekt, um die Breite und Höhe des Browserfensters zu ermitteln und zeige diese Informationen in einem Absatz () auf der Webseite an. 
// b) Implementiere eine Funktion, die prüft, ob Cookies im Browser aktiviert sind. Zeige das Ergebnis ("Cookies aktiviert" oder "Cookies deaktiviert") in einem weiteren Absatz auf der Webseite an. 
// c) Nutze Local Storage, um die Anzahl der Besuche auf der Webseite zu speichern und bei jedem Laden der Seite zu aktualisieren. Zeige die Anzahl der Besuche in einem Absatz an. 
// d) Implementiere eine einfache Animation mithilfe der Web Animations API, die ein Element auf der Seite beim Laden der Seite einfliegen lässt. 
// e) Verwende den Intersection Observer, um zu erkennen, wann ein bestimmtes Element (z.B. ein Bild) in das Sichtfeld des Nutzers scrollt und ändere daraufhin die Farbe des Elements. 
// f) Erstelle eine Funktion, die mithilfe der Fetch-API Daten von einer Test-API (z.B. https://jsonplaceholder.typicode.com/posts) abruft und die Titel der ersten fünf Beiträge in einer Liste () auf der Webseite anzeigt.


// <!DOCTYPE html>
// <html lang="de">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="script.js" defer></script>
//     <link rel="stylesheet" href="styles.css">
//     <title>Übung 14.7.C.01</title>
// </head>
// <body>
//     <h1>Interaktive Webseite mit verschiedenen Webtechnologien</h1>
//     <p id="windowSize">Fenstergröße: </p>
//     <p id="cookieStatus">Cookie-Status: </p>
//     <p id="visitCount">Anzahl der Besuche: </p>

//     <div id="animatedElement" style="width:100px; height:100px; background-color:lightblue; margin:20px;">
//         Animiertes Element
//     </div>

//     <div id="observedElement" style="width:100%; height:300px; background-color:lightgreen; margin-top:800px;">
//         Beobachtetes Element (Scroll hierher)
//     </div>

//     <h2>Beiträge von der Test-API:</h2>
//     <ul id="postTitles"></ul>
// </body>
// </html>


// a)
function displayWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const windowSizeParagraph = document.getElementById('windowSize');
    windowSizeParagraph.textContent = `Fenstergröße: ${width}px x ${height}px`;
}
displayWindowSize();

// b)
function checkCookiesEnabled() {
    const cookieStatusParagraph = document.getElementById('cookieStatus');
    if (navigator.cookieEnabled) {
        cookieStatusParagraph.textContent = 'Cookie-Status: Cookies aktiviert';
    } else {
        cookieStatusParagraph.textContent = 'Cookie-Status: Cookies deaktiviert';
    }
}
checkCookiesEnabled();

// c)
function updateVisitCount() {
    const visitCountParagraph = document.getElementById('visitCount');
    let visitCount = localStorage.getItem('visitCount');
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    localStorage.setItem('visitCount', visitCount);
    visitCountParagraph.textContent = `Anzahl der Besuche: ${visitCount}`;
}
updateVisitCount();

// d)
function animateElement() {
    const animatedElement = document.getElementById('animatedElement');
    animatedElement.animate([
        { transform: 'translateX(-100%)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
    ], {
        duration: 1000,
        fill: 'forwards'
    });
}
animateElement();

// e)
const observedElement = document.getElementById('observedElement');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.backgroundColor = 'orange';
        } else {
            entry.target.style.backgroundColor = 'lightgreen';
        }
    });
}, observerOptions);

observer.observe(observedElement);

// f)
async function fetchPostTitles() {
    const postTitlesList = document.getElementById('postTitles');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        posts.slice(0, 5).forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postTitlesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Fehler beim Abrufen der Beiträge:', error);
    }
}
fetchPostTitles();