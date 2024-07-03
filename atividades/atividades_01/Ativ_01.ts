import readlineSync from 'readline-sync';

const cores: Array<string> = new Array<string>

for (let i =0; i < 5; i++) {
    let cor = readlineSync.question(`Digite a primeira Cor: `);
    
    cores.push(cor);

}
cores.sort((a, b) => a.localeCompare(b))
console.log(`Cores ordenadas: ${cores}`)
