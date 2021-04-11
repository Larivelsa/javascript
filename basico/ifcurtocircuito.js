/* objetivo do if do curto circuito eh usar menos linha de codigo tb
estrutura:
true && comando */

var status = true;
/* se a condicao for verdadeira, executa o if do curto circuito
nao possui else, ou seja, se a condicao for false, nao executa coisa alguma */
status&&console.log("Aprovada!");

var nome = "Larissa";
/* vertifica se a var nome possuir pelo menos um caractere
se possuir, armazena true (ja teria feito isso devido a condicional maior que,
mas enfim, eh para fins didaticos) na var nomeLindo
senao armazena false
e entao se nomeLindo for true exibe a var nome */
var nomeLindo = nome.length > 0 && true;
nomeLindo && console.log(nome);