# Aufgabe

### Entwickle ein Dart-Programm, das eine einfache Aufgabenverwaltungsanwendung simuliert. Dein Programm soll folgende Funktionen umfassen:

a) Definiere eine Klasse Task mit den Eigenschaften name (String), deadline (DateTime), und completed (bool). Implementiere einen Konstruktor, der alle Eigenschaften initialisiert, und eine Methode markAsCompleted(), die completed auf true setzt.

b) Verwende Generics, um eine Liste von Task-Objekten zu erstellen.

c) Implementiere eine Funktion addTask, die eine neue Task zur Liste hinzufügt. Die Funktion soll name und deadline als Parameter haben und die completed-Eigenschaft standardmäßig auf false setzen.

d) Erstelle eine asynchrone Funktion fetchTasks, die simuliert, dass sie die Aufgabenliste aus einer externen Quelle lädt. Verwende Future.delayed mit einer Verzögerung von 2 Sekunden, um eine vordefinierte Liste von Task-Objekten zurückzugeben.

e) Benutze async und await, um fetchTasks aufzurufen, und drucke anschließend alle Aufgaben und deren Status in der Konsole aus.

f) Implementiere eine Funktion completeTask, die den Namen einer Aufgabe als Parameter nimmt und diese Aufgabe in der Liste als abgeschlossen markiert. Verwende eine Lambda-Funktion, um die entsprechende Aufgabe in der Liste zu finden und zu aktualisieren.