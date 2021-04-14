// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreCalcio = [
    {
        'nome': 'Torino',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Lazio',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Fiorentina',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Roma',
        'punti_fatti': 0,
        'falli_subiti': 0
    }
]


for (let i = 0; i < squadreCalcio.length; i++){

    let thisSquadra = squadreCalcio[i];
    
    thisSquadra.punti_fatti = getRandomNumber(1, 20);
    
    
    thisSquadra.falli_subiti = getRandomNumber(1, 10)
}
console.log(squadreCalcio)




let squadre = [] ;

for (let i = 0; i < squadreCalcio.length; i++) {

    let thisSquadra = squadreCalcio[i];

    const {nome, falli_subiti} = thisSquadra;

    let nuoveSquadre = {

        nome,
        falli_subiti
    }     
    
    squadre.push(nuoveSquadre)
}


console.log('squadre nuove ', squadre )














// Funzione per generare un numero random
//
// min -> numero intero minimo
// max -> numero intero massimo

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;;
  }