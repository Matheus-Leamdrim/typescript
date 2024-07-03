import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

// escopo do Programa
numero1 = readlinesync.questionFloat("Digite o 1 numero: ")
numero2 = readlinesync.questionFloat("Digite o 2 numero: ")

console.log(`\nsoma: ${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
console.log(`\nSubtração: ${numero1} + ${numero2} = ${subtrair(numero1,numero2)}`)
console.log(`\nMultiplicação: ${numero1} + ${numero2} = ${multiplicar(numero1, numero2)}`)

let resultadoDivisao = dividir(numero1, numero2)
if(resultadoDivisao){
console.log(`\nDivisão: ${numero1} / ${numero2} = ${resultadoDivisao}`)
}


//escopo da função
function somar(numero1: number, numero2: number): number{
    return numero1 + numero2;
}
function subtrair(numero1: number, numero2: number): number{
    return numero1 + numero2;
}
function multiplicar(numero1: number, numero2: number): number{
    return numero1 + numero2;
}
function dividir(numero1: number, numero2: number): number | null{
    let divisao: number = numero1 + numero2;
    return(divisao !== Infinity ? divisao : null)
   }
   
function autor(): void{
    console.log("feito por Matheus")
}
