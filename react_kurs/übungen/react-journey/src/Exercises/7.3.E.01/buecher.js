// Beispiel-Bücher mit Kategorien
export const buecher = [
  { id: 1, titel: 'Der Herr der Ringe', autor: 'J.R.R. Tolkien', kategorie: 'Fantasy', beschreibung: 'Ein episches Fantasy-Abenteuer über Hobbits, Elben und den Kampf gegen das Böse.' },
  { id: 2, titel: 'Harry Potter', autor: 'J.K. Rowling', kategorie: 'Fantasy', beschreibung: 'Die Geschichte eines jungen Zauberers und seiner Abenteuer in Hogwarts.' },
  { id: 3, titel: '1984', autor: 'George Orwell', kategorie: 'Dystopie', beschreibung: 'Eine düstere Vision einer totalitären Zukunft.' },
  { id: 4, titel: 'Schöne neue Welt', autor: 'Aldous Huxley', kategorie: 'Dystopie', beschreibung: 'Eine Gesellschaft, die durch Technologie und Konditionierung kontrolliert wird.' },
  { id: 5, titel: 'Stolz und Vorurteil', autor: 'Jane Austen', kategorie: 'Klassiker', beschreibung: 'Eine romantische Geschichte über Liebe und gesellschaftliche Erwartungen.' },
  { id: 6, titel: 'Der große Gatsby', autor: 'F. Scott Fitzgerald', kategorie: 'Klassiker', beschreibung: 'Das Leben der Reichen und Schönen in den 1920er Jahren.' },
  { id: 7, titel: 'Das Schweigen der Lämmer', autor: 'Thomas Harris', kategorie: 'Thriller', beschreibung: 'Ein packender Thriller über eine FBI-Agentin und einen Serienmörder.' },
  { id: 8, titel: 'Gone Girl', autor: 'Gillian Flynn', kategorie: 'Thriller', beschreibung: 'Eine Frau verschwindet - aber was ist wirklich passiert?' },
];

// Alle verfügbaren Kategorien
export const kategorien = [...new Set(buecher.map(b => b.kategorie))];
