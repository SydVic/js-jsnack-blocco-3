const footballTeams = [
    {
        squadra: "juventus",
        punteggio: 0,
        fallisubiti: 0,
    },
    {
        squadra: "milan",
        punteggio: 0,
        fallisubiti: 0,
    },
    {
        squadra: "parma",
        punteggio: 0,
        fallisubiti: 0,
    },
    {
        squadra: "sassuolo",
        punteggio: 0,
        fallisubiti: 0,
    },
    {
        squadra: "napoli",
        punteggio: 0,
        fallisubiti: 0,
    },
];


footballTeams.forEach(element => {
    const punteggioRandom = Math.floor(Math.random() * 101);
    element.punteggio = punteggioRandom;

    const fallisubitiRandom = Math.floor(Math.random() * 11);
    element.fallisubiti = fallisubitiRandom;

    console.log(element);
});


