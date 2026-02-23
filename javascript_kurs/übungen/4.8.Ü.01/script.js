let text = "Heute ist ein wunderschöner Tag, um programmieren zu lernen.";

console.log(`Länge des Textes: ${text.length} Zeichen`);

console.log(`Index des Wortes "programmmieren": ${text.indexOf("programmieren")}`);

console.log(`${text.replace("programmieren", "coden")}`);

let arr = text.split(" ");

console.log("Array der einzelnen Wörter:", arr);

console.log(`Text in Großbuchstaben: ${text.toUpperCase()}`);