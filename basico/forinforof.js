/* 
compreendendo a diferenca entre as 
estruturas for ... in e for ... of 

for...in: percorre a propriedade do objeto (colecao de dados), iterando-a, funciona tb
com array (colecao de dados)
for...of: percorre objetos iterativos - pelo que entendi, usa-se arrays
e se for uma colecao de dados, nao da certo acessar pelo proprio for of 
os valores em si, mas pode sim usar para objetos para realizar a iteracao
no entanto deve-se acessar os objetos por meio da propriedade:
colecao_objeto.propriedade1
alem disso, o for...of tb ja implementa a variavel contadora, controle do  tamanho do array
e sua incrementaco para que possa ser iterado (comando de repeticao exibindo 
cada um seus elementos)
*/

let objeto = {
    propriedade1: 1,
    propriedade2: 2,
    propriedade3: 3
};

//teste de um for...in com colecao de objetos (um objeto que possui uma colecao de objetos)
for (let propriedade in objeto){
    console.log("Propriedade: "+propriedade+" - Valor da propriedade: "+objeto[propriedade]);
}

//teste com um array (um objeto que possui uma colecao de dados)
let array=[1,2,3,4,5];

//teste de um for...in em uma colecao de dados obtem-se o valor da propriedade
for(let valor in array){
    console.log("Valor da propriedade (no caso, o indice do vetor): "+valor+" - Elemento do vetor: "+array[valor]);
}

//teste de um for...of em uma colecao de dados obtem-se o valor da chave
for(let valor of array){ 
    console.log("Elemento do vetor: "+valor); //obtem o elemento do vetor
}

/*
obs importante: [] sao usados em arrays e colecao de array
e as chaves sao usadas para colecoes de objetos
exs:
let array = [];
let colecao_array = [{array1},{array2},...,{arrayn}];
let colecao_dados = {propriedade1:a, propriedade2:b,...,propriedaden:z}
*/
