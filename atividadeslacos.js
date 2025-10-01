

let rua =10;

for(let i = 1;i<=rua;i++){

    console.log(`Entreguei na Rua no N: ${i}`)

}


let flexos = 0 ;
let cansaco = false;

while(!cansaco){

    flexos++
    console.log(`Fiz ${flexos} flexoes`)
    
    if(flexos === 10){
        cansaco = true;

        console.log("Estou Cansado")
    }


}

let tempoAndar = 0 ;
let caiu = false;


do{

    tempoAndar++
    console.log(`Andei de Bicicleta por ${tempoAndar} até cansar`)

    if(tempoAndar === 10){
        caiu = true

    }

   

}while(!caiu === true)






//Rotulo
    danca:
    for(let i = 0;i<3;i++){

        console.log(`Rotulo Dança ${i}`)
        jogo:
        for(let j = 0;j<2;j++){
            console.log(`Rodulo jogo ${j}`)

        }
    }