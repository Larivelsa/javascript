/* a estrutura for ... in permite percorrer 
toda a colecao de objetos 
estrutura:
for (let dados in colecao_objetos){
 console.log(dados[colecao_objetos]);
}
em que dados representa a propriedade 
do objetos que esta sendo iterada
*/

let aluno = [{ nome: "Larissa", email: "larissa@email.com", idade: 30 },
{ nome: "Mateus", email: "mateus@email.com", idade: 24 }];
let teste = aluno.email;
console.log(teste);

for ( let dados in aluno ) {
    console.log(aluno[dados]);
}

/* exemplo de codigo trabalhando com a propriedade preco do objeto carro
se propriedade for igual a preco, realizara a manipulacao
naquela propriedade */
let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {
        
        
        let preco = propriedade;
        let desconto = ( carro[preco] * percentual_desconto ) / 100;
        let novo_preco = carro[preco] - desconto;
        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        console.log(propriedade + ": " + carro[propriedade]);

    }

}

