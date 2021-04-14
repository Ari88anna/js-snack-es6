// 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack

const arrayBici = [ 
    {
        'nome': 'saetta',
        'peso': 7
    },
    {
        'nome': 'fulmine',
        'peso': 5
    },
    {
        'nome': 'piuma',
        'peso': 1
    }
]


let biciPiuLeggera = arrayBici[0];

for (let i = 0; i < arrayBici.length; i++) {

    let thisBici = arrayBici[i];
    // console.log(thisBici);
    
    // const {nome, peso} = thisBici;
    // console.log(nome)

    // Stampare a schermo la bici con peso minore.

    if( thisBici.peso < biciPiuLeggera.peso) {
        
        biciPiuLeggera = thisBici;         
    }      
}

let ProprietaBiciPiuLeggera = `

    <p> La bici più leggera è ${biciPiuLeggera.nome} e pesa ${biciPiuLeggera.peso} kg </p>
`;

document.getElementById('bici').innerHTML = ProprietaBiciPiuLeggera