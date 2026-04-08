# Aufgabe

Du arbeitest für ein Startup, das eine Webanwendung zur Verwaltung von Kundenaufträgen entwickelt. 
Deine Aufgabe ist es, eine neue Funktionalität in Form einer React-Komponente zu implementieren, die es ermöglicht, Kundenaufträge anzuzeigen, zu filtern und einen neuen Auftrag hinzuzufügen. 
Die Anwendung soll folgende Features umfassen:

---

## a) AuftragsListe Komponente

Erstelle eine funktionale Komponente AuftragsListe, die den State für eine Liste von Aufträgen verwendet. 
Jeder Auftrag soll ein Objekt mit den Eigenschaften id, kunde, datum und status sein. 
Initialisiere die Komponente mit mindestens drei Beispielaufträgen.

---

## b) useEffect Hook

Nutze den useEffect-Hook, um bei der Initialisierung der Komponente eine simulierte API-Anfrage durchzuführen, die nach 2 Sekunden die Auftragsliste aktualisiert. 
Simuliere die API-Anfrage mit einer Timeout-Funktion und einer statischen Liste von Aufträgen. 

---

## c) Neuer Auftrag hinzufügen

Implementiere eine Eingabemöglichkeit, um einen neuen Auftrag hinzuzufügen. 
Der neue Auftrag soll über ein Formular mit den Feldern kunde und datum aufgenommen werden können. 
Bei der Einreichung des Formulars soll der Auftrag der Liste hinzugefügt werden, wobei eine eindeutige id generiert und der status standardmäßig auf "offen" gesetzt wird. 

---

## d) Filterfunktion

Füge eine Filterfunktion hinzu, die es ermöglicht, Aufträge nach ihrem Status zu filtern. 
Implementiere Dropdown-Auswahlmöglichkeiten für die Statuswerte "alle", "offen" und "abgeschlossen". 
Die Auswahl soll den angezeigten Auftragslisten-Status dynamisch aktualisieren. 