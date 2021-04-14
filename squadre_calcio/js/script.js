// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreCalcio = [
    {
        'nome': 'Torino',
        'punti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Lazio',
        'punti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Fiorentina',
        'punti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Roma',
        'punti': 0,
        'falli_subiti': 0
    }
]


for (let i = 0; i < squadreCalcio.length; i++){

    let thisSquadra = squadreCalcio[i];
    
    thisSquadra.punti = getRandomNumber(1, 20);
    
    
    thisSquadra.falli_subiti = getRandomNumber(1, 10)
}
console.log(squadreCalcio)







// Funzione per generare un numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;;
  }