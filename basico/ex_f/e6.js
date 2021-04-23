/**Abaixo temos uma função que retorna a soma dos números de uma lista. Complete as lacunas abaixo considerando os itens a seguir:

- Todas as variáveis devem ser criadas com "let";
- O nome da função deve ser "retorna_soma" e deve ter a sintaxe de uma arrow function;
- A função deve ser criada com a palavra-chave "const";
- A função deve percorrer todos os números da lista e retornar o somatório deles;
- No final do código deve ser impressa uma mensagem com o somatório dos itens da lista. */

let lista_numeros = [1, 3, 5, 10];

const retorna_soma = (numeros) => {

    let soma = 0;

    for (const numero of numeros) {
        soma = numero + soma;
    }

    return soma;

}

let resultado = retorna_soma(lista_numeros);

console.log("A soma dos resultados é igual a : " + resultado);