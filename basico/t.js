const verifica_paridade = (numeros) => {

    for (numero of numeros)    {
    
            if( numero%2     == 0 ){
                console.log("O número " + numero + " é par");
            } else {
                console.log("O número " + numero + " é ímpar");
            }
    
        }
    
    }
    




const numeros = [1, 3, 5, 6, 8, 10, 17];

verifica_paridade(numeros);









