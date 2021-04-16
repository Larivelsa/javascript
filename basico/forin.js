/*
for...in 


fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
*/

/* basico */
let array_1 = ["a","b","c"];
for(var dado in array_1){
}
console.log("Em um array sem objetos, a variavel iteravel 'dado' possui o ultimo indice de elementos no objeto 'array_1': "+ dado);

let vestidos = [{cor:"preto",comprimento:"medio",estilo:"esport chic",ocasiao:"noite"},
               {cor:"offwhite",comprimento:"longo",estilo:"boho",ocasiao:"dia"},
               {cor:"verde",comprimento:"longo",estilo:"sereia",ocasiao:"noite"}];

for(var propriedade in vestidos){
    //console.log(propriedade.cor);
}   

console.log(typeof(propriedade));
