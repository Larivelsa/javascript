/**
 * tipo undefined
 * - variaveis nao definidas obtem este valor
 * - nao eh possivel obter seu length
 * - undefined, ao realizar calculos, gerar o erro NaN (Not a Number)
 */

var indefinida;
console.log(indefinida);

typeof null        // object (bug no ECMAScript, deveria ser null - http://2ality.com/2013/10/typeof-null.html)
typeof undefined   // undefined
null === undefined // falso
null == undefined // verdadeiro
// fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null

