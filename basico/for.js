/**comando de repeticao for
 * sintaxr:
 * for ([inicializacao]; [condicao]; [expressao final])
 * [inicializacao] -> eh opcional, pode ser um expressao ou um variavel, ela tem escopo no for e nao somente no loop
 * [condicao] -> eh opcional, se omitida eh dada como true; enquanto true executa o loop
 * [expressao final] -> eh opcional, acontece so no final da iteracao (repeticao) do loop, geralmente incrementada ou decrementada
 * fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
 */

/* basico */
for (let contador = 0; contador < 10; contador++)
{
    console.log("A variavel contador vale: "+contador);
}

/* uso do contador alem de incremento */
let valor_produto = 500;
let total_parcelas = 15;

for (let contador = 1; contador <= total_parcelas; contador++)
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

/* uso do for sem [inicializacao] */
let i=0;
for(;i<5;i++){
    console.log(i);
}

/* uso do for sem [condicao] */
for(let i=0;;i++){
    console.log(i);
    if(i>3){
        break;
    }
}

/* uso do for sem [expressao final] */
for(let i=0;i<5;){
    console.log(i);
    ++i;
}