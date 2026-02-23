// Rate die Zahl 
let gesuchteZahl = Math.floor(Math.random() * 100) + 1;
let benutzerEingabe;
let versuche = 0;

alert("Willkommen zu 'Rate die Zahl'! Ich habe mir eine Zahl zwischen 1 und 100 ausgedacht. Kannst du sie erraten? (Zum Beenden 'exit' eingeben)");

while (benutzerEingabe !== gesuchteZahl) {
    benutzerEingabe = prompt("Bitte gib deine Schätzung ein:");

    // Überprüfen, ob der Benutzer das Spiel beenden möchte
    if (benutzerEingabe.toLowerCase() === 'exit') {
        alert("Spiel beendet. Bis zum nächsten Mal!");
        break;
    }

    benutzerEingabe = Number(benutzerEingabe);

    // Überprüfen, ob die Eingabe eine gültige Zahl ist
    if (isNaN(benutzerEingabe)) {
        alert("Bitte gib eine gültige Zahl ein.");
        continue;
    } else if (benutzerEingabe < 1 || benutzerEingabe > 100) {
        alert("Bitte gib eine Zahl zwischen 1 und 100 ein.");
        continue;
    }

    versuche++;

    // Überprüfen, ob die Schätzung zu hoch, zu niedrig oder korrekt ist
    if (benutzerEingabe < gesuchteZahl) {
        alert(`Meine Zahl ist höher als ${benutzerEingabe}.`);
    } else if (benutzerEingabe > gesuchteZahl) {
        alert(`Meine Zahl ist niedriger als ${benutzerEingabe}.`);
    } else if (benutzerEingabe === gesuchteZahl) {
        alert(`Herzlichen Glückwunsch! Du hast die Zahl ${gesuchteZahl} in ${versuche + 1} Versuch/en erraten!`);
    }
}
