function alterBerechnen(geburtsjahr) {
    const aktuellesJahr = new Date().getFullYear();
    if (geburtsjahr > aktuellesJahr) {
        return "Geburtsjahr liegt in der Zukunft";
    } else {
        return aktuellesJahr - geburtsjahr;
    }
}