import readlinesync from 'readline-sync';

const numeros: Set<number> = new Set<number>

for (let i = 0; i < 10; i++) {
    let numero: number = readlinesync.questionInt("Digite um numero inteiro: ");
    
    numeros.add(numero);
      }

const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

console.log("Os números inseridos listados são: ");
numerosOrdenados.forEach((numero) => console.log(numero));