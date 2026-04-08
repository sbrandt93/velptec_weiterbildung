// Aufgabe: React Hooks 

// Erstelle eine React-Komponente namens UserProfile, die folgende Anforderungen erfüllt: 

// a) Verwende den useState Hook, um den Zustand user zu verwalten, der ein Objekt mit den Eigenschaften name (String), age (Number) und hobby (String) ist. 
//    Initialisiere den Zustand mit einem beliebigen Benutzernamen, Alter und Hobby. 
// b) Verwende den useContext Hook, um auf einen Kontext namens ThemeContext zuzugreifen, der entweder den Wert light oder dark hat. Dieser Kontext bestimmt die Klasse des übergeordneten div-Elements der Komponente. 
// c) Implementiere eine Funktion innerhalb der Komponente, die den Namen des Benutzers aktualisiert, wenn ein Button geklickt wird. Der neue Name soll durch ein Input-Feld eingegeben werden können. 
//    Verwende den useRef Hook, um auf das Input-Feld zuzugreifen. 
// d) Stelle sicher, dass das Input-Feld bei der Initialisierung der Komponente den Fokus erhält. 
// e) Rendere die Komponente so, dass der Name, das Alter und das Hobby des Benutzers angezeigt werden. Ebenso soll ein Input-Feld und ein Button zum Aktualisieren des Namens vorhanden sein. 
//    Der Inhalt des div-Elements soll sich je nach ThemeContext visuell unterscheiden.