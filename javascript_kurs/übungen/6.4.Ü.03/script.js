function berechneUrlaubstage(name, jahre) {
    const basisUrlaubstage = 26;
    const maxUrlaubstage = 30;
    if (basisUrlaubstage + jahre > maxUrlaubstage) {
        return `Mitarbeiter ${name} hat Anspruch auf ${maxUrlaubstage} Urlaubstage in diesem Jahr.`;
    } else {
        return `Mitarbeiter ${name} hat Anspruch auf ${basisUrlaubstage + jahre} Urlaubstage in diesem Jahr.`;
    }
}