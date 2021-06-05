/*
let
- possui escopo de bloco
- nao necessariamente precisa ser iniciada com algum valor (ficam undefined)
- tem o conceito de hoisting, quando a variavel eh elevada para o topo da execucao do seu contexto de execucao 
*/

/* uma possibilidade interessante de declaracao */
let a, b = a = "L";
console.log("Resultado da declaracao let a, b = a = 'L': "+a);

let nome="larissa";
if(true){
    let nome="assiral";
    console.log("Variavel let 'nome' dentro do bloco if: "+nome);
}
console.log("Variavel let 'nome' fora do bloco if: "+nome);