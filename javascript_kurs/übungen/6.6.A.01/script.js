// a)
/// Funktion zur Umrechnung von Celsius in Fahrenheit
function temperaturKonverter(temperaturInCelsius) {
    return (temperaturInCelsius * 9 / 5) + 32;
}

console.log(temperaturKonverter(0));    // 32

// b)
/// Funktion zur Umrechnung von Celsius in Fahrenheit und zurück
function temperaturKonverter2(temperatur, einheit) {
    if (einheit.toLowerCase() === 'c') {
        return (temperatur * 9 / 5) + 32; // Celsius zu Fahrenheit
    } else if (einheit.toLowerCase() === 'f') {
        return (temperatur - 32) * 5 / 9; // Fahrenheit zu Celsius
    } else {
        return null; // Ungültige Einheit
    }
}

console.log(temperaturKonverter2(0, 'c'));    // 32
console.log(temperaturKonverter2(32, 'f'));   // 0

// c) + d)
/// Ausgabe der Umrechnungstabelle von 0°C bis 100°C in 10er-Schritten
for (let i = 0; i <= 100; i += 10) {
    let fahrenheit = temperaturKonverter(i);
    console.log(`${i}°C entspricht ${fahrenheit.toFixed(2)}°F`);
}

// e)
/// Erweiterte Funktion mit Debug-Ausgabe
function temperaturKonverter3(temperatur, einheit) {
    const debugNachricht = (temperatur, einheit) => {
        console.log(`Debug: Umrechnung von ${temperatur}°${einheit}`);
    }
    debugNachricht(temperatur, einheit);
    if (einheit.toLowerCase() === 'c') {
        let result = (temperatur * 9 / 5) + 32; // Celsius zu Fahrenheit
        console.log(`${temperatur}°${einheit.toUpperCase()} entspricht ${result.toFixed(2)}°F`);
        return result;
    } else if (einheit.toLowerCase() === 'f') {
        let result = (temperatur - 32) * 5 / 9; // Fahrenheit zu Celsius
        console.log(`${temperatur}°${einheit.toUpperCase()} entspricht ${result.toFixed(2)}°C`);
        return result;

    } else {
        return null; // Ungültige Einheit
    }
}

console.log(temperaturKonverter3(0, 'c'));    // 32
console.log(temperaturKonverter3(32, 'f'));   // 0