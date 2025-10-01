

function saudacao(){

    let mensagem = "Olá Mundo!"

    console.log(mensagem)
}

// Function Arrow
saudacao()

let novaSaudacao = (nome) => {

    
   let mensagem =`Bem Vindo! ${nome}`

   console.log(mensagem)

}

novaSaudacao("Carlos")


function somar(a,b){

    return a + b;
}

function somaTotal(funcao,a,b){


    return funcao(a,b)

}

let resultado = somaTotal(somar,10,10)

console.log(resultado)

