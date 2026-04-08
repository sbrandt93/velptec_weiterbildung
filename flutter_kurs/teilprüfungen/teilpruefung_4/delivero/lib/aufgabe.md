# Aufgabe

### Entwickle eine Flutter-App für ein lokales Lieferdienst-Unternehmen, das seinen Kunden ermöglicht, die Lieferung ihrer Bestellungen in Echtzeit zu verfolgen. Die App sollte folgende Funktionen beinhalten:

a) Eine Startseite, die eine Übersicht über die verschiedenen Lieferoptionen bietet (z.B. Essen, Dokumente, Pakete). Nutze für jede Option ein Card-Widget mit einer kurzen Beschreibung.

b) Eine Detailseite für jede Lieferoption, die nach dem Tippen auf eine der Optionen auf der Startseite erscheint. Diese Seite sollte Informationen wie geschätzte Lieferzeit und Kosten anzeigen. Verwende hierfür geeignete Layout-Widgets.

c) Eine Kartenansicht, die die aktuelle Position des Lieferfahrzeugs in Echtzeit anzeigt, sobald der Nutzer seine Bestellung aufgibt. Integriere das google_maps_flutter-Plugin (basierend auf OpenStreetMap)und optional das geolocator-Plugin, um die aktuelle Position des Fahrzeugs zu ermitteln und auf der Karte anzuzeigen. OpenStreetMap ist eine Open-Source-Alternative, die keine API-Schlüssel oder Zahlungsinformationen erfordert.

d) Eine Navigationsleiste am unteren Bildschirmrand, die es dem Nutzer ermöglicht, zwischen der Startseite, der Kartenansicht und einem Profilbereich zu wechseln. Der Profilbereich soll einfache Nutzerinformationen anzeigen.


#### Hinweise:

- Das flutter_map-Plugin nutzt OpenStreetMap-Daten und ist vollständig kostenlos
- Es werden keine API-Schlüssel oder Kreditkarteninformationen benötigt
- Die Lernziele (Kartenintegration, Live-Positionsanzeige, Navigation, State Management) bleiben identisch