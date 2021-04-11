for (let contador = 0; contador < 10; contador++) // escopo do for
{
console.log("O contador vale "+contador);
}

let valor_produto = 500;
let total_parcelas = 15;

for ( let contador = 1; contador <= total_parcelas; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

