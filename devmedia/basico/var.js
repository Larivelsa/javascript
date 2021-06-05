/*
var
- nao possui escopo de bloco
*/

/* uma possibilidade interessante de declaracao */
var a, b = a = "L";
console.log("Resultado da declaracao var a, b = a = 'L': "+a);

var nome="larissa";
if(true){
    var nome="assiral";
    console.log("Variavel var 'nome' dentro do bloco if: "+nome);
}
console.log("Variavel var 'nome' fora do bloco if: "+nome);
