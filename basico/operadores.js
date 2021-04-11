/* testando operador com condicional */
var idade=90;
var condicional = idade==18;
console.log(condicional);

/* operador modulo retorna o resto (do lado esquerdo da chave) da divisao, até o último numero inteiro
ele calcula, mas o resto pode ser decimal, ja que o ultimo numero calculado foi um inteiro
ou seja, pode dar decimal o resto, mas ele estende o calculo ate o ultimo numero inteiro */
var modulo = 0.23984%1.89053480;
console.log(modulo);

/* concatena-se com o sinal de +*/
var texto = "parte a" + "parte b";

/* exemplos dados no curso de programacao JavaScript da Devmedia */
console.log("12" + 20); // "1220"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”
console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

/* ordem das operacoes em JS:
* 
/
%
+ e -  
*/

/* incrementos e decrementos */
var depois = 10;
console.log("Incrementei: "+depois++);
console.log("Incrementado depois vale: " + depois);

var antes = 10;
console.log("Sem incremeto inicial: "+antes);
console.log("Incrementei e ja chega incrementado valendo: "+ ++antes);

/* operadores de igualdade/desigualdade estrita */
console.log("21"==21); //operador de igualdade, converte em valor numerico parseInt("21")
console.log(1==true);
console.log(null==undefined);
console.log("21"===21); //operado de igualdade estrita nao faz a conversao de tipo e compara o tipo e o conteudo
console.log(1===true);
console.log(null===undefined);
console.log(String==="String");

/* operadores de igualdade/desigualdade, maior, menor, maior igual, menor igual retornam sempre true/false */

/* operadores logico */
console.log(true&&false);
console.log(false&&false);
console.log(true||false);
console.log(!false);
console.log("1"===1&&1==1);
console.log(!("a"==1));
console.log(20>50||50===50||!true); /* js interpreta da esquerda para a direita, 
ou seja, primeiro, falso ou verdadeiro: verdadeiro, depois verdadeiro ou falso: verdadeiro
logo, o resultado sera verdadeiro*
no caso do "ou" || se o primeiro valor ja for verdadeiro, o js ignora todo o resto,
pois de qqr forma dara verdadeiro*/
console.log(false||false&&true);
console.log(!(20>50));
var materia = undefined;
console.log(materia==null);
console.log("1"+1);
console.log(true+true);
var dezoitho = "18";
console.log(typeof dezoitho);
var nome = "Larissa";
//nome = nome + " Linda";
nome +=" Linda";
console.log(nome);

console.log("null"+null);

const n1 = 20 % 2 == 0;
const n2 = n1 + "0";
const n3 = 0 / 0;

console.log(n2, n3);
var numeroso = "1"+1; //so na comparacao de igual/desigualdade faz o parseInt, aqui tudo vora String mesmo na concatenacao
console.log(numeroso);

var newton=null;
var newton = newton + 3;
console.log(newton);