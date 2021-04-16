/*
for...of 
- realiza a iteracao sem a necessidade de declarar variavel contadora e expressao
- especifica para colecoes (com a propriedade [Symbol.iterator]), ao inves de todos os objetos
- da erro se nao especifica a variavel que recebera a iteracao

sintaxe: 
for (variavel of iteravel) {
[declaracao]
} 
variavel: a cada iteracao, um valor de uma propriedade diferente eh atribuido a variavel.
iteravel: objeto cujos atributos serao iterados

o for...of percorre o objeto iteravel, no entanto, em objetos com objetos eh necessario informar
quais propriedades serao acessadas, ou seja, diferente do for...in que "fatia" o objeto, o for...of
nao realiza este trabalho (pelo menos eh o que eu percebi)

fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
*/

/* basico */
let array = ["a","b","c"];
for(var dado of array){
    console.log("Variavel declarada com let: "+dado);
}

console.log("Tipo da variavel dado: "+typeof(dado));



for (const dado of array) {
  console.log("Variavel declarada com const: "+dado);
}

/* iterando com String */
let palavra = "heyah";
for(let letra of palavra){
    console.log(letra);
}

/* iterando com colecoes de objetos */
let vestidos = [{cor:"preto",comprimento:"medio",estilo:"esport chic",ocasiao:"noite"},
               {cor:"offwhite",comprimento:"longo",estilo:"boho",ocasiao:"dia"},
               {cor:"verde",comprimento:"longo",estilo:"sereia",ocasiao:"noite"}];
               
for(var look_do_dia of vestidos){
    console.log(" Vestido - cor: "+look_do_dia.cor+", estilo: "+look_do_dia.estilo+", ocasiao: "+look_do_dia.ocasiao);

}

console.log("Tipo da variavel 'look_do_dia': "+typeof(look_do_dia));
console.log("Tipo de 'vestido': "+typeof(vestidos));