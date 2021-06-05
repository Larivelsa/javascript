/*
Math.random()
- retorna um valor aleatorio de 0(incluso) a 1 (excluso)
- sem passagem de parametros, somente retorno
- criado para ser redimensionado, ex: 0.324 * 10

Math.floor()
- retorna o menor numero inteiro entre o numero passado por parametro 
*/

let randomico = Math.random();
console.log("Numero gerado pelo Math.random: " + randomico);
let numero_trabalhado = randomico * 10; /* aqui trabalhei o numero
para que possa ser exibido um valor diferente de zero, pois o Math.randoom
puramente sempre gerara numeros decimais de 0 e o numero mais proximo sera sempre 0
portanto multipliquei por 10 para ver como o Math.floor trabalha */
console.log("Numero randomico multiplicado por 10: " + numero_trabalhado);
console.log("Numero randomico multiplicado por 10 e trabalhado por Math.floor: " + Math.floor(numero_trabalhado));



