/**Complete o código abaixo de modo que se tenha uma função 
 * que imprime a quantidade de números ímpares e pares: */

 lista_numeros = [1, 2, 3, 7, 9, 12, 15, 18];

 const total_impares_pares = (numeros) => {
 
     let impares = 0;
     let pares = 0;
 
    for (numero of  numeros){
 
         if(numero%2==0  ){
             pares++;
         } else {
             impares++;
         }
 
     }
 
     console.log("O total de números ímpares é: " + impares);
     console.log("O total de números pares é: " + pares);
 }
 
 total_impares_pares(lista_numeros);