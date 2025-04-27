// Tratamento de exceções


function divisao(a, b) {
    try {
        if (b === 0) {
            throw new Error ("Divisão por zero!");
        }

        return a / b;
    } catch (error) {
        return "Erro: ", error.message;
    }
    finally{
        console.log("Operação concluída!");
    }
}

console.log(divisao(10, 0));
//console.log(divisao(10, 5))