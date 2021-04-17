/*
for...in 
- itera as propriedades do objeto (chaves do objeto) e nao os valores do objeto
- acessa as propriedades e nao seu valores diretamente
- realiza a iteracao sem a necessidade de declarar variavel contadora e expressao
- da erro se nao especifica a variavel que receber a iteracao
- para acessar os valores das propriedades, eh necessario o uso de um indice, por exemplo
array[propriedade], sendo propriedade a variavel iterada
- anterior ao for...of

sintaxe:
for (variavel in objeto) {...
}
sendo:
variavel: uma propriedade diferente do objeto eh atribuida em cada iteracao
objeto: objeto com as propriedades enumeradas 

fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
*/

/* basico */
let array_1 = ["a", "b", "c"];
for (let propriedade in array_1) {
    console.log("Propriedade (indice, no caso) e nao o valor em si do array_1: " + propriedade + " - Valor:" + array_1[propriedade]);
}

let objeto_literal = { propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3" };
for (let propriedade in objeto_literal) {
    console.log("Propriedade (customizada, no caso) de 'objeto_literal': " + propriedade + " - Valor: " + objeto_literal[propriedade]);
}


for (let propriedade in objeto_literal) {
    if (propriedade == "propriedade1") {
        console.log("Acesso a propriedade == a 'propriedade1' do 'objeto_literal': " + objeto_literal[propriedade]);
    }
    else {
        console.log("Acesso as propriedades <> de 'propriedade1' do 'objeto_literal': " + objeto_literal[propriedade]);
    }
}


let colecao = { propriedade1: "a", propriedade2: "b", propriedade3: "c" };
for (let propriedade in colecao) {
    console.log("Iterando com objeto literal - propriedade: " + propriedade+" - valor: "+colecao[propriedade]);
}


let colecao_a = [{ propriedade1: "a1", propriedade2: "b1", propriedade3: "c1" },//indice 0
{ propriedade1: "a2", propriedade2: "b2", propriedade3: "c2" },//indice 1
{ propriedade1: "a3", propriedade2: "b3", propriedade3: "c3" }];//indice 2

/* iterando a colecao com dois for...in: 
o for...in mais externo itera a colecao de objetos 'colecao_a'
e cada objeto eh guardado na variavel 'colecao_a_1' 
no for...in interno, cada propriedade da 'colecao_a_1' passa a ser iterada
sendo assim, o if procura pela propriedade customizada chamada 'propriedade1'
e se encontra-la, exibe determinada mensagem, senao as outras propriedades
serao exibas com outra mensagem
*/

for (let propriedade in colecao_a) {

    var colecao_a_1 = colecao_a[propriedade];

    for (let propriedade in colecao_a_1) {

        if (propriedade == "propriedade1") {
            console.log("Entrou na condicional: " + colecao_a_1[propriedade]);
        } else {
            console.log("Nao entrou na condicional: " + colecao_a_1[propriedade]);
        }
    }
}


