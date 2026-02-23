// Übungen 11.4.Ü.01
// Aufgabe: Events

// Entwickle ein JavaScript-Programm, das auf Tastatureingaben reagiert, um die Anzahl der Buchstaben, die Anzahl der Wörter und die Häufigkeit jedes Buchstabens in einem Text zu analysieren. 
// Der Text soll durch Eingabe des Benutzers über die Tastatur in ein Textfeld auf einer Webseite eingegeben werden. 
// Sobald der Benutzer die Eingabetaste (Enter) drückt, soll die Analyse durchgeführt und das Ergebnis auf der Webseite angezeigt werden.  

// Folge diesen Schritten: 
// a) Erstelle eine HTML-Seite mit einem Textfeld für die Eingabe und einem Bereich, in dem die Ergebnisse angezeigt werden. 
// b) Schreibe eine JavaScript-Funktion, die bei Betätigung der Eingabetaste (Enter) die Analyse startet. 
//    Diese Funktion soll die Anzahl der Buchstaben, die Anzahl der Wörter und die Häufigkeit jedes Buchstabens (ignoriere Groß- und Kleinschreibung) in dem eingegebenen Text berechnen. 
// c) Zeige die Ergebnisse unterhalb des Eingabefeldes an. Stelle sicher, dass die Ergebnisse übersichtlich präsentiert werden.

// HTML-Elemente referenzieren
const textEingabe = document.getElementById('textEingabe');
const ergebnisBereich = document.getElementById('ergebnisBereich');

// Funktion zur Analyse des Textes
function analysiereText(text) {
    const buchstabenAnzahl = text.replace(/[^a-zA-Z]/g, '').length;
    const woerterAnzahl = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const buchstabenHaeufigkeit = {};

    for (let char of text.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            buchstabenHaeufigkeit[char] = (buchstabenHaeufigkeit[char] || 0) + 1;
        }
    }

    return {
        buchstabenAnzahl,
        woerterAnzahl,
        buchstabenHaeufigkeit
    };
}

// Event Listener für die Eingabetaste
textEingabe.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Verhindert das Standardverhalten (z.B. Formularabsendung)
        const text = textEingabe.value;
        const analyseErgebnis = analysiereText(text);
        zeigeErgebnisse(analyseErgebnis);
    }
});

// Funktion zur Anzeige der Ergebnisse
function zeigeErgebnisse(ergebnis) {
    ergebnisBereich.innerHTML = `
        <h3>Analyse Ergebnisse:</h3>
        <p>Anzahl der Buchstaben: ${ergebnis.buchstabenAnzahl}</p>
        <p>Anzahl der Wörter: ${ergebnis.woerterAnzahl}</p>
        <h4>Buchstabenhäufigkeit:</h4>
        <ul>
            ${Object.entries(ergebnis.buchstabenHaeufigkeit).map(([buchstabe, anzahl]) => `<li>${buchstabe}: ${anzahl}</li>`).join('')}
        </ul>
    `;
}

