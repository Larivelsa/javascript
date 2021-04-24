/**
 * Percorra o array e some os valores dos itens opcionais utilizando para isso uma função nativa. 
 * Imprima o valor total no terminal.
 */

const itensOpcionais = [
    { nome: 'Pré som', valor: 800 },
    { nome: 'Conta-giros', valor: 500 },
    { nome: 'Desembaçador traseiro', valor: 1000 },
    { nome: 'Ar quente', valor: 1800 },
];

const val =(total, item) => {total+=item.}

const valorTotal = itensOpcionais.reduce(val,0);

console.log('R$ ' + valorTotal.toFixed(2));
