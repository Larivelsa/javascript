/* 
Array (vetor)
- O array eh um objeto de alto nivel parecido com listas
- O array sem objetos inicia na posicao 0
- Comporta multiplos tipos de dados no mesmo array
- Nao possui tamanho e tipo fixos
fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/* array signos */
var signos = [
    "Áries",
    "Touro",
    "Gêmeos",
    "Câncer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário",
    "Capricórnio",
    "Aquário",
    "Peixes"
];

console.log("Array 'signos' completo: "+signos); // exibe o array completo
console.log("Quantidade de itens do array 'signos': "+signos.length);/* retorna o tamanho (ultimo indice +1) ou altera o array */
console.log("Posicao 11 do array 'signos' contem: "+signos[11]);

/* array notas */
var notas=[10,9.5,8,9,8.5];
console.log("Quantidade de itens no array 'notas': "+notas.length); 
var ultimo = notas[notas.length -1]; /* notas.length retorna o valor 
que eh a quantidade de elementos presentes no vetor (no caso, 12) 
e, ao substrair menos um, eh possivel acessar o ultimo elemento 
deste array (no caso 11), portanto seria possivel tambem acessar 
o penultimo, antepenultimo, etc..*/
var penultimo = notas[notas.length -2]; 
console.log("Obtem o penultimo elementos do array 'notas': "+penultimo);
console.log("Obtem o ultimo elementos do array 'notas': "+ultimo);

notas.push(6); /* adiciona elemento no final do array e retorna o novo tamanho do array */
console.log("Adiciona elemento no final do array 'notas': "+notas);

notas.pop(6); /* remove elemento no final do array e retorna esse elemento, 
se o array estiver vazio, retorna udefined e o array nao eh modificado */
console.log("Remove elemento no final do array 'notas': "+notas);

notas.shift(); /* remove elemento do inicio do array - sem parametros e retorna esse elemento, 
se o array estiver vazio, retorna undefined e o array nao eh modificado */
console.log("Remove elemento do inicio do array 'notas': "+notas);

notas.unshift(7.5); /* adiciona elemento no inicio do array - com parametros 
e retorna o novo tamanho do array*/
console.log("Adiciona elemento no inicio do array 'notas': "+notas);

console.log("Posicao do elemento 8.5 no array 'notas': "+notas.indexOf(8.5)); /* procura o indice 
de um elemento no array, se nao encontra, retorna -1 */
/* .splice(parametros) - apos determinado indice, remove determinado numero de elementos do array e retorna eles
no caso abaixo, removeu 3 elementos apos o indice 0 */
console.log("Elementos removidos do array 'notas': "+notas.splice(0,3));

/* .splice() - retorna a copia do array */
console.log("Copia do array 'notas': "+notas.slice());






