# Aufgabe

#### Entwickle eine Flutter-Anwendung für eine fiktive Bibliothek, die es Benutzern ermöglicht, Bücher zu durchsuchen, auszuleihen und Bewertungen abzugeben. Die Anwendung soll folgende Funktionalitäten umfassen:

a) Erstelle eine Startseite (HomePage) mit einem AppBar, der den Titel "Bibliotheks-App" trägt, und einem Body, der zwei Buttons enthält: "Bücher durchsuchen" und "Meine Ausleihen". Verwende für die Buttons ElevatedButton.

b) Implementiere eine Seite BrowseBooksPage, auf der Benutzer eine Liste von Büchern sehen können. Jedes Buch soll als Karte (Card) dargestellt werden, die den Titel des Buches, den Autor und einen Button "Ausleihen" enthält. Beim Klicken auf "Ausleihen" soll ein Dialog erscheinen, der den Benutzer fragt, ob er das Buch ausleihen möchte. Bei Bestätigung soll eine Snackbar mit der Nachricht "Buch ausgeliehen" erscheinen.

c) Erstelle eine Seite MyLoansPage, die alle vom Benutzer ausgeliehenen Bücher anzeigt. Ähnlich wie auf der BrowseBooksPage sollen die Bücher als Karten dargestellt werden, jedoch mit einem zusätzlichen Button "Zurückgeben". Beim Klicken auf "Zurückgeben" soll eine Snackbar mit der Nachricht "Buch zurückgegeben" erscheinen.

d) Füge eine Funktionalität hinzu, um Bewertungen zu Büchern abzugeben. Nach dem Ausleihen eines Buches soll ein Dialog erscheinen, der den Benutzer auffordert, das Buch zu bewerten (1 bis 5 Sterne). Speichere die Bewertung und zeige sie auf der BrowseBooksPage unter dem entsprechenden Buch an.

e) Implementiere Navigation und Routing zwischen den Seiten. Verwende Named Routes für die Navigation. Stelle sicher, dass Parameter (wie z.B. das ausgeliehene Buch) zwischen den Routen übergeben werden können.

