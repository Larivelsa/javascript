/*
for...of 
- itera os valores do objeto e nao as propriedades (chaves do objeto)
- realiza a iteracao sem a necessidade de declarar variavel contadora e expressao
- da erro se nao especifica a variavel que receber a iteracao
- posterior ao for...in

sintaxe: 
for (variavel of iteravel) {
[declaracao]
} 
sendo:
variavel: a cada iteracao, um valor de uma propriedade diferente eh atribuido a variavel.
iteravel: objeto cujos atributos serao iterados

o for...of percorre o objeto iteravel, no entanto, em objetos com objetos eh necessario informar
quais propriedades serao acessadas, ou seja, diferente do for...in que "fatia" o objeto, o for...of
nao realiza este trabalho (pelo menos eh o que eu percebi)

fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
*/

/* basico */
let array_1 = ["a", "b", "c"];
for (var dado of array_1) {
    console.log("Variavel declarada com let: " + dado);
}
console.log("Tipo da variavel dado: " + typeof (dado));

for (const dado of array_1) {
    console.log("Variavel declarada com const: " + dado);
}


let array_2 = ["a", "b", "c"];
for (let valores of array_1) {
    console.log("Valores das propriedades (no caso, indice) e nao as propriedades em si do array_2: " + valores);
}

/* iterando com String */
let palavra = "heyah";
for (let letra of palavra) {
    console.log(letra);
}

/* iterando com colecoes de objetos */
let colecao = [{ propriedade1: "a1", propriedade2: "b1", propriedade3: "c1" },
{ propriedade1: "a2", propriedade2: "b2", propriedade3: "c2" }
];
for (valor of colecao) {
    console.log("Valor da propriedade1: " + valor.propriedade1);
    console.log("Valor da propriedade2: " + valor.propriedade2);
    console.log("Valor da propriedade3: " + valor.propriedade3);
}
