import readlinesync from 'readline-sync'

import { Stack } from "../../Stack";

const pilha = new Stack<string>();

console.log("***************************************");
console.log("*                                     *");
console.log("*   1 - Adicionar Livro na Pilha      *");
console.log("*   2 - Listar Todos os Livros        *");
console.log("*   3 - Retirar Livro da Pilha        *");
console.log("*   0 - Sair                          *");
console.log("*                                     *");
console.log("***************************************");

let livro: number;

do {
    livro = readlinesync.questionInt("Entre com a opção desejada: ");
    
    if (livro == 1) {
        const nome = readlinesync.question("Digite o nome do Livro: ");
        pilha.push(nome);
        console.log("Livro Adicionado na Pilha!");
    } else if (livro == 2) {
        console.log("Os Elementos na Pilha São: ");
        pilha.printStack();
    } else if (livro == 3) {
        console.log("O Livro retirado da Pilha é:");
        console.log(pilha.pop());
    } 
} while (livro > 0);

    console.log("Programa Finalizado");
