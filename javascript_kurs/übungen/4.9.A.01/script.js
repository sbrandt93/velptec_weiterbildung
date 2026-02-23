let text = "Berlin ist die Hauptstadt von Deutschland.";

let stadtnamenRegex = /\b[A-Z][a-z]+/g;

let gefundeneStaedte = text.match(stadtnamenRegex);

let stadtnamenString = gefundeneStaedte.join(", ");

console.log(`Gefundene Städtenamen: ${stadtnamenString}`);