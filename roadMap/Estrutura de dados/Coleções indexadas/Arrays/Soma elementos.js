/* 
Soma dos elementos do array com for of
Escreva uma função que receba um array de números e retorne a soma de todos os elementos. 
*/

function somaElementos(arrSoma) {
    let soma = 0; // Inicializa a variável 'soma' com 0, que será usada para acumular o total

    /* 
    Inicia um loop que percorre cada elemento do array 'arrSoma'.
    A cada iteração, a variável 'elemento' assume o valor de um elemento do array.
    */
    for (let elemento of arrSoma) {
        soma += elemento; // Adiciona o valor atual de 'elemento' à variável 'soma'
    }

    return soma; // Retorna o valor total da soma
}

// Chama a função e exibe o resultado final da soma no console
console.log(somaElementos([10, 20, 30])); // Resultado: 60





