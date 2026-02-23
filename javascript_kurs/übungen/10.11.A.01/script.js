// Übung 10.11.A.01
// Aufgabe: DOM

// Erstelle eine JavaScript-Funktion createGallery, die ein Array von Bild-URLs entgegennimmt und eine Bildergalerie im DOM erzeugt. Jedes Bild soll in einem div-Element mit der Klasse gallery-item eingebettet sein. 
// Verwende dazu die Methode document.createElement für jedes Bild und document.querySelector um das Element auszuwählen, in das die Galerie eingefügt werden soll. Die Funktion soll auch überprüfen, ob das übergebene Array leer ist. 
// In diesem Fall soll ein p-Element mit dem Text "Keine Bilder verfügbar" in das Ziel-Element eingefügt werden. Nutze Arrow-Funktionen, wo immer es möglich ist, und achte darauf, dass du let oder const für Variablendeklarationen verwendest. 
// Verwende keine externen Bibliotheken oder Frameworks.  

const createGallery = (imageUrls) => {
    const galleryContainer = document.querySelector("#galleryContainer");
    galleryContainer.innerHTML = ""; // Clear previous content
    if (imageUrls.length === 0) {
        const noImagesMessage = document.createElement("p");
        noImagesMessage.innerText = "Keine Bilder verfügbar";
        galleryContainer.appendChild(noImagesMessage);
        return;
    }
    imageUrls.forEach(url => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        const img = document.createElement("img");
        img.src = url;
        img.height = 300;
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
};

// Beispielaufruf der Funktion
const bilderArray = [
    "https://images8.alphacoders.com/105/thumb-1920-1050709.jpg",
    "https://images8.alphacoders.com/105/thumb-1920-1050709.jpg",
    "https://images8.alphacoders.com/105/thumb-1920-1050709.jpg"
];

createGallery(bilderArray);