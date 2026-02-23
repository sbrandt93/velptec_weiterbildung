// Übungen 11.2.Ü.01
// Aufgabe: Events

// Erstelle ein JavaScript-Skript, das folgende Funktionalitäten umsetzt: 

// a) Definiere eine Funktion createGallery, die ein Array von Bild-Objekten entgegennimmt. Jedes Bild-Objekt soll zwei Eigenschaften haben: src (den Pfad zur Bilddatei) und title (den Titel des Bildes). 
//    Die Funktion soll für jedes Bild-Objekt im Array ein neues <img>-Element im DOM unter einem vorher definierten <div>-Element mit der ID gallery erstellen. 
//    Jedes <img>-Element soll die src- und title-Attribute entsprechend den Eigenschaften des Bild-Objekts setzen. 
// b) Füge jedem <img>-Element einen mouseover-Event-Handler hinzu, der das Bild beim Darüberfahren mit der Maus auf die doppelte Größe skaliert. 
//    Beim Verlassen des Bildes mit der Maus (mouseout) soll das Bild wieder auf seine ursprüngliche Größe zurückgesetzt werden. 
// c) Erstelle eine Funktion toggleTheme, die das Farbschema der Webseite zwischen einem hellen und einem dunklen Modus wechselt, indem sie die Klasse dark-theme zum <body>-Tag hinzufügt oder entfernt. 
//    Verknüpfe diese Funktion mit einem Tastatur-Event, das ausgelöst wird, wenn der Nutzer die Taste D drückt.

// Beispiel-Array von Bild-Objekten
const bilder = [
    { src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_123812444?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402', title: 'Bild 1' },
    { src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_123812444?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402', title: 'Bild 2' },
    { src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_123812444?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402', title: 'Bild 3' }
];

// a) Funktion zur Erstellung der Galerie
function createGallery(bildArray) {
    const galleryContainer = document.getElementById('gallery');
    bildArray.forEach(bild => {
        const imgElement = document.createElement('img');
        imgElement.src = bild.src;
        imgElement.title = bild.title;
        imgElement.style.transition = 'transform 0.3s'; // Für sanfte Skalierung
        // b) Event-Handler für mouseover und mouseout
        imgElement.addEventListener('mouseover', () => {
            imgElement.style.transform = 'scale(2)';
        });
        imgElement.addEventListener('mouseout', () => {
            imgElement.style.transform = 'scale(1)';
        });
        galleryContainer.appendChild(imgElement);
    });
}

createGallery(bilder);

// c) Funktion zum Umschalten des Themas von hell zu dunkel und umgekehrt
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Event-Listener für Tastendruck
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'd') {
        toggleTheme();
    }
});