// const footballTeams = [
//     {
//         squadra: "juventus",
//         punteggio: 0,
//         falliSubiti: 0,
//     },
//     {
//         squadra: "milan",
//         punteggio: 0,
//         falliSubiti: 0,
//     },
//     {
//         squadra: "parma",
//         punteggio: 0,
//         falliSubiti: 0,
//     },
//     {
//         squadra: "sassuolo",
//         punteggio: 0,
//         falliSubiti: 0,
//     },
//     {
//         squadra: "napoli",
//         punteggio: 0,
//         falliSubiti: 0,
//     },
// ];


// footballTeams.forEach(element => {
//     const punteggioRandom = Math.floor(Math.random() * 101);
//     element.punteggio = punteggioRandom;

//     const falliSubitiRandom = Math.floor(Math.random() * 11);
//     element.falliSubiti = falliSubitiRandom;

//     console.log("element", element);
// });
// console.table(footballTeams);

/* METODO CLASS */

// nuova classe per generare i Team
class Team {
    constructor( nome, puntiFatti, falliSubiti ) {
        this.nome = nome;
        this.puntiFatti = puntiFatti;
        this.falliSubiti = falliSubiti;
    }
    // funzione per punti e falli random
    punti() {
        this.puntiFatti = Math.floor(Math.random() * 100);
        this.falliSubiti = Math.floor(Math.random() * 100);
    }
}

// array vuoto
const footballTeams = [];
// construzione Team
const Juventus = new Team("Juventus", 0, 0);
const Milan = new Team("Milan", 0, 0);
const Inter = new Team("Inter", 0, 0);
const Bologna = new Team("Bologna", 0, 0);
const Parma = new Team("Parma",0 ,0);
// push dei team nell'array
footballTeams.push(Juventus, Milan, Inter, Inter, Bologna, Parma);
// aggiunta punti fatti e falli subiti
footballTeams.forEach( element => {
    element.punti();
});

console.log(footballTeams);