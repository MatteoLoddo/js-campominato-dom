// Generare una griglia quadrata
const containerGriglia = document.querySelector(".cont-griglia");
const difficolta = document.querySelector('[name="difficolta"]')
const buttonGenera = document.getElementById("myButton")
console.log(containerGriglia);



// funzione che crea tante celle quanto il valore richiamato  al posto degli argomenti
function calcolaCelle (colonne,  righe){
// calcolo degli argomenti per calcolare il  numero di  celle 
    const calcolo = colonne * righe;

    return calcolo
}
const containerNumberCell = []
const containerBomb = [];
// il simbolo "+" permette di ottenere come risultato un numero
let risultato = + 

buttonGenera.addEventListener("click" , function(){
    // controllo valore selettore difficolta
    const valoreDiff = difficolta.value
    
    // // creare  condizioni in base alla difficolta
    // if(valoreDiff === "diff1"){
    //     let risultato1 = calcolaCelle(10,10)
    //     // console.log(risultato1);
    //     risultato = risultato1
        

    // }else if (valoreDiff === "diff2"){
    //     let risultato2 = calcolaCelle(9,9)

    //     risultato = risultato2

    // }else if(valoreDiff ===  "diff3"){

    //     let risultato3 = calcolaCelle(7,7)

    //     risultato = risultato3
    // }

    // console.log(risultato);
    
    // creaGriglia(risultato)
    

///// condizione con switch ////

    switch (valoreDiff){
        case "diff1":
            let risultato1 = calcolaCelle(10,10)
            risultato = risultato1
            break;

        case "diff2":
            let risultato2 = calcolaCelle(9,9)
            risultato = risultato2
            break;

        case "diff3":
            let risultato3 = calcolaCelle(7,7)
            risultato = risultato3
            break;


}

console.log(risultato);

    creaGriglia(risultato)
    bombGenerator(risultato)



// for(let i=0; containerNumberCell.length <= risultato; i++){
    
//     let randomNumberCell = Math.floor(Math.random()*110)
//     if(!containerNumberCell.includes(randomNumberCell)){
//         containerNumberCell.push(randomNumberCell)
//     }
    

//     console.log(containerNumberCell);


            
//     }

    
})
















// creo una funzione per creare tanti div quante le celle calcolate in precedenza
function creaGriglia (risultato){
        containerGriglia.innerHTML="";
        for(let i=1; i <=risultato; i++){
        // creo la mia variabile per creare l elemento div
        let cella = document.createElement("div");
        
        // appendo il testo nel mio div cella
        // cella.append(`${randomNumberCell}`);
        
        // aggiungo gli stili del css al mio div cella tramite js
        cella.classList.add("cella");
        // aggiungere il dataset permette di "assegnare" un numero a cui possiamo riferirci ma l utente non lo vede
        cella.dataset.index = i

    
        cella.addEventListener ("click" , function (){
            const  indiceCella = +cella.dataset.index
            // aggiunta una condizione in cui se l elemento cliccato e gia la classe che voglia aggiungere la va a togliere
            if(containerBomb.includes(indiceCella)){
                cella.classList.add("bg-bomb")
            }else{
                cella.classList.add("bg-onclick-true")
            // console.log(`hai cliccato ${text}`);
            }
            console.log(indiceCella );
            
            

        })


        // do una dimensione con stili inline al mio container per avere sempre la griglia delle dimensioni desiderate  calcolando la larghezza di ogni cella(richiamando la variabile css a cui ho  dato  la mia dimensione statica) per il numero delle colonne da ottenere
        if(risultato === 100){
            containerGriglia.style.width = `calc(var(--cella-size) * 10`
        }else if(risultato === 81){
            containerGriglia.style.width = `calc(var(--cella-size) * 9`
        }else if( risultato === 49){
            containerGriglia.style.width = `calc(var(--cella-size) * 7`

        }


        // a fine di ogni ciclo appendo la mia cella nel mio container
        containerGriglia.append(cella)
        
    }
}
// for(let i=0; i = 16; i++){
//     const numBombGenerator = Math.floor(Math.random()*16)

// if(numBombGenerator === containerText.value){

//     containerBomb.push(numBombGenerator)

//         }

//         console.log(numBombGenerator);
//     }
function bombGenerator (numeroMax){
    for(let i=0; containerBomb.length <= 16; i++){

        const bombNumber  = Math.floor(Math.random()*risultato) +1
        if(!(containerBomb.includes(bombNumber) && (containerNumberCell.includes(bombNumber)))){
            containerBomb.push(bombNumber)
            console.log(containerBomb);
        }
        


    }

    console.log(containerBomb);
}








// CREO IL NUMERO RANDOM PER LE CASELLE























// buttonGenera.addEventListener("click" , function(){

//     // controllo valore selettore difficolta
//     const valoreDiff = difficolta.value
    
//     // creare  condizioni in base alla difficolta
//     if(valoreDiff === "diff1"){
//         let risultato1 = calcolaCelle(10,10)
//         // console.log(risultato1);
//         risultato = risultato1
        

//     }else if (valoreDiff === "diff2"){
//         let risultato2 = calcolaCelle(9,9)

//         risultato = risultato2

//     }else if(valoreDiff ===  "diff3"){

//         let risultato3 = calcolaCelle(7,7)

//         risultato = risultato3
//   }