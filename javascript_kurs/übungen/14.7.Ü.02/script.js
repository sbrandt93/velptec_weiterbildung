// Übungen 14.7.C.01
// Aufgabe: Window-Objekt, Observer, Web Animations API, Local Storage

// Entwickle ein einfaches JavaScript-Programm, das folgende Funktionalitäten umfasst:  

// a) Überprüfe, ob im Local Storage ein Eintrag unter dem Schlüssel "userTheme" existiert. Falls nicht, lege diesen mit dem Wert "dark" an.  
// b) Füge ein Array mit drei verschiedenen Farbnamen (z.B. "rot", "grün", "blau") hinzu.  
// c) Erstelle eine Schleife, die für jede Farbe im Array prüft, ob die aktuelle Farbe "grün" ist. Falls ja, gib eine Meldung in der Konsole aus, dass "Grün ist eine tolle Farbe!" ist.  
// d) Verwende das Window-Objekt, um die aktuelle Breite und Höhe des Browserfensters in der Konsole auszugeben.  
// e) Führe eine Fetch-Anfrage an die Test-API https://jsonplaceholder.typicode.com/posts/1 aus und gib die Antwort in der Konsole aus.  
// f) Implementiere einen einfachen Intersection Observer, der beobachtet, ob ein Element mit der ID "observerTarget" im Viewport sichtbar ist und gib eine Meldung in der Konsole aus, sobald dies der Fall ist.


// a)
if (!localStorage.getItem('userTheme')) {
    localStorage.setItem('userTheme', 'dark');
}

// b)
const colors = ['rot', 'grün', 'blau'];

// c)
for (let color of colors) {
    if (color === 'grün') {
        console.log('Grün ist eine tolle Farbe!');
    }
}

// d)
console.log(`Breite des Browserfensters: ${window.innerWidth}px`);
console.log(`Höhe des Browserfensters: ${window.innerHeight}px`);

// e)
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fehler beim Abrufen der Daten:', error));

// f)
const observerTarget = document.getElementById('observedElement');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Das Element ist im Viewport sichtbar.');
        }
    });
});

if (observerTarget) {
    observer.observe(observerTarget);
} else {
    console.log('Element mit der ID "observedElement" wurde nicht gefunden.');
}

