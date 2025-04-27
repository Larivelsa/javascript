/*
Número máximo em um array
Escreva uma função que receba um array de números e retorne o maior número.
*/

function maiorElemento(arr){
    if (arr.length <= 0){
        return 'Array vazio!';
    } else {
        let maior = arr[0];
        for (let elemento of arr){
            if (elemento > maior){
                maior = elemento;
            }
        }
        return maior;
    }
}


console.log(maiorElemento([5, 10, 2, 8,-9]));
console.log(maiorElemento([]));