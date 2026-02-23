function berechneUrlaubstage(alter, jahreImBetrieb) {
    const basisUrlaubstage = 24;
    const zusatzUrlaubstageFuerHohesAlter = 5;
    const maxZusatzUrlaubstageFuerBetrieb = 10;
    const zusatzUrlaubstageFuerBetrieb = (jahreImBetrieb) => jahreImBetrieb > maxZusatzUrlaubstageFuerBetrieb ? maxZusatzUrlaubstageFuerBetrieb : jahreImBetrieb;
    if (alter > 50) {
        return basisUrlaubstage + zusatzUrlaubstageFuerHohesAlter + zusatzUrlaubstageFuerBetrieb(jahreImBetrieb);
    } else {
        return basisUrlaubstage + zusatzUrlaubstageFuerBetrieb(jahreImBetrieb);
    }
}

console.log(berechneUrlaubstage(45, 12)); // Erwartet: 34
console.log(berechneUrlaubstage(55, 8)); // Erwartet: 37