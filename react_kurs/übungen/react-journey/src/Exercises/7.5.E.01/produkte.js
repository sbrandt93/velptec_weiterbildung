// Produktdaten für die Anwendung
export const produkte = [
  {
    id: '1',
    name: 'Laptop Pro',
    preis: 1299.99,
    beschreibung: 'Leistungsstarker Laptop für Profis mit 16GB RAM und 512GB SSD.',
    kategorie: 'Elektronik'
  },
  {
    id: '2',
    name: 'Wireless Kopfhörer',
    preis: 199.99,
    beschreibung: 'Kabellose Kopfhörer mit aktiver Geräuschunterdrückung.',
    kategorie: 'Audio'
  },
  {
    id: '3',
    name: 'Smartwatch',
    preis: 349.99,
    beschreibung: 'Moderne Smartwatch mit Fitness-Tracking und GPS.',
    kategorie: 'Wearables'
  },
  {
    id: '4',
    name: 'USB-C Hub',
    preis: 59.99,
    beschreibung: '7-in-1 USB-C Hub mit HDMI, USB-A und SD-Kartenleser.',
    kategorie: 'Zubehör'
  },
  {
    id: '5',
    name: 'Mechanische Tastatur',
    preis: 149.99,
    beschreibung: 'RGB-beleuchtete mechanische Tastatur mit Cherry MX Switches.',
    kategorie: 'Peripherie'
  }
];

// Hilfsfunktion zum Finden eines Produkts nach ID
export function getProduktById(id) {
  return produkte.find(p => p.id === id);
}
