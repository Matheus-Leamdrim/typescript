import readlinesync from 'readline-sync'

import { Queue } from "../../Queue"

const fila = new Queue<string>();

console.log("***************************************");
console.log("*                                     *");
console.log("*   1 - Adicionar Cliente a Fila      *");
console.log("*   2 - Listar Todos os Clientes      *");
console.log("*   3 - Retirar Cliente da Fila       *");
console.log("*   0 - Sair                          *");
console.log("*                                     *");
console.log("***************************************");

let numero: number;

do {
    numero = readlinesync.questionInt("Entre com a opção desejada: ");
    
    if (numero == 1) {
        const nome = readlinesync.question("Digite o nome: ");
        fila.enqueue(nome);
        console.log("Nome Adicionado na Fila!");
    } else if (numero == 2) {
        console.log("Os Elementos na Fila São: ");
        fila.printQueue();
    } else if (numero == 3) {
        console.log("O Nome Retirado da Fila é:");
        console.log(fila.dequeue());
    }
} while (numero > 0);

console.log("Programa Finalizado");