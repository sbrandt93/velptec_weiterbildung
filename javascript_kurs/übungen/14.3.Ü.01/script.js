// Übungen 14.3.Ü.01
// Aufgabe: Window-Objekt

// Erstelle ein JavaScript-Programm, das die folgenden Anforderungen erfüllt:

// a) Definiere ein Array mit verschiedenen Werten, einschließlich mindestens eines null und eines undefined Wertes.
//    Dieses Array soll Daten von verschiedenen Sensoren repräsentieren, wobei einige Sensoren möglicherweise ausgefallen sind und daher null oder undefined als Wert liefern.
// b) Verwende eine Schleife, um durch das Array zu iterieren. Für jeden Wert im Array überprüfe mit einer if-else-Struktur, ob der Wert null oder undefined ist.
//    Wenn ja, zeige eine Warnmeldung in der Konsole an, die besagt, dass der Sensor defekt ist. Andernfalls gib den Wert des Sensors aus.
// c) Implementiere eine Funktion, die das Window-Objekt verwendet, um die aktuelle Bildschirmbreite und -höhe in der Konsole auszugeben.
// d) Verwende den Intersection Observer API, um zu beobachten, wann ein bestimmtes Element (z.B. ein <div> mit der ID sensorView) vollständig sichtbar im Viewport ist.
//    Sobald das Element sichtbar ist, soll eine Nachricht in der Konsole ausgegeben werden, die besagt, dass das Element jetzt sichtbar ist.


// a)
const sensorData = [23, null, 45, undefined, 67, 89, null, 12];

// b)
for (let i = 0; i < sensorData.length; i++) {
    const value = sensorData[i];
    if (value === null || value === undefined) {
        console.warn(`Sensor ${i} ist defekt.`);
    } else {
        console.log(`Sensor ${i} Wert: ${value}`);
    }
}

// c)
function logWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Aktuelle Bildschirmbreite: ${width}px, Höhe: ${height}px`);
}

// d)
const sensorView = document.getElementById('sensorView');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Das Element sensorView ist jetzt vollständig sichtbar im Viewport.');
            observer.unobserve(entry.target); // Stop observing after first visibility
        }
    });
}, observerOptions);

if (sensorView) {
    observer.observe(sensorView);
} else {
    console.warn('Element mit der ID sensorView wurde nicht gefunden.');
}

