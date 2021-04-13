/*
for...of 
- realiza a iteracao sem a necessidade de declarar variavel contadora e expressao
- específica para colecoes (com a propriedade [Symbol.iterator]), ao inves de todos os objetos

sintaxe: 
for (variavel of iteravel) {
[declaracao]
} 
variavel: a cada iteracao, um valor de uma propriedade diferente eh atribuido a variavel.
iteravel: objeto cujos atributos serao iterados


fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
*/

/* basico */
let array = ["a","b","c"];
for(let dado of array){
    console.log("Variavel declarada com let: "+dado);
    let ah;
}

for (const dado of array) {
  console.log("Variavel declarada com const: "+dado);
}

/* iterando com String */
let palavra = "heyah";
for(let letra of palavra){
    console.log(letra);
}

/* iterando com colecoes de objetos */
let vestido = [{cor:"preto",comprimento:"medio",estilo:"esport chic",ocasiao:"noite"},
               {cor:"offwhite",comprimento:"longo",estilo:"boho",ocasiao:"dia"},
               {cor:"verde",comprimento:"longo",estilo:"sereia",ocasiao:"noite"}];

for(lookDoDia of vestido){
    
}