# Aufgabe

Entwickle eine kleine React-Anwendung, die eine öffentlich zugängliche Fake-API (z.B. JSONPlaceholder oder eine ähnliche API) verwendet, um Daten zu fetchen und anzuzeigen. Die Anwendung soll folgende Funktionalitäten beinhalten:

---

### a) Hauptkomponente
Erstelle eine Hauptkomponente, die als Einstiegspunkt dient. Verwende dabei React Hooks, um den Zustand zu verwalten.

---

### b) useEffect-Hook

Nutze die useEffect-Hook, um beim ersten Render der Komponente Daten von der Fake-API zu fetchen. Die URL für den Fetch-Vorgang lautet https://jsonplaceholder.typicode.com/posts. Behandle dabei Ladezustände und mögliche Fehler.

---

### c) Post Komponente

Zeige die gefetchten Daten in einer Liste von Unterkomponenten an. Jede Unterkomponente repräsentiert einen Post. Stelle sicher, dass Titel und Body des Posts angezeigt werden.

---

### d) Routing

Implementiere dynamische Routen mit React Router, sodass ein Klick auf einen Post zu einer Detailseite führt, die mehr Informationen über den Post anzeigt. Nutze dafür die Post-ID in der URL.

---

### e) Post Formular Komponente

Füge eine Komponente hinzu, die es ermöglicht, neue Posts über ein Formular zu erstellen und an die Fake-API zu senden. Verwende dafür die HTTP-Methode POST. Die URL für das Senden von Posts lautet https://jsonplaceholder.typicode.com/posts.

---

### f) Behandlung von Fehlermeldungen

Implementiere Fehlerbehandlung für das Formular, sodass Fehlermeldungen angezeigt werden, wenn das Senden fehlschlägt.

---

### g) Testing

Schreibe Tests mit dem Jest Test-Framework, um die Funktionalität deiner Anwendung zu überprüfen. Stelle sicher, dass du Tests für das Fetchen der Daten, die Anzeige der Posts und die Erstellung neuer Posts schreibst.