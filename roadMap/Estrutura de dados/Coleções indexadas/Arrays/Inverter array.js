/*
Inverter um array
Escreva uma função que receba um array e retorne um novo array com os elementos na ordem inversa.
*/

function inverteArray(arr) {
    let arrInvertido = []; // Inicializa um array vazio para armazenar os elementos invertidos

    // Enquanto o array original não estiver vazio
    while (arr.length > 0) {
        arrInvertido.push(arr.pop()); // Remove o último elemento de 'arr' e adiciona a 'arrInvertido'
    }

    return arrInvertido; // Retorna o array invertido
}

// Teste da função
console.log(inverteArray([10, 20, 30])); // Resultado: [30, 20, 10]


