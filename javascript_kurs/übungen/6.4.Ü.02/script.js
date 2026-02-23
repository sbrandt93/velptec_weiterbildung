// a)
function berechneSteuern(einkommen, status) {
    switch (status) {
        case 'einzeln':
            return einkommen <= 12000 ? einkommen * 0.12 : einkommen * 0.22;
        case 'verheiratet':
            return einkommen <= 24000 ? einkommen * 0.10 : einkommen * 0.20;
        default: console.log('Ungültiger Status');
            return null;
    }
}

// b)
result = berechneSteuern(30000, 'einzeln');
result2 = berechneSteuern(30000, 'verheiratet');

// c)
console.log(`Steuern für Einzelperson mit 30000 Einkommen: ${result}`);
console.log(`Steuern für verheiratete Person mit 30000 Einkommen: ${result2}`);