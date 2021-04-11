
/* 
const
- escopo de bloco que significa que a const existe somente naquele escopo
- nao eh possivel ter seu valor alterado
- nao possivel ser redeclarada
- sempre precisa ter seu valor declarado (nao eh possivel haver undefined, gera erro)
- ao declarar a constante e nao atribuir valor, havera erro na execucao do codigo
- tem o conceito de hoisting, quando a constante eh elevada para o topo da execucao do seu contexto de execucao 
*/

const nome="larissa";

if(true){
    const nome="assiral";
    console.log("Valor da constante 'nome' do bloco if: "+nome);
}

console.log("Valor da constante 'nome' fora do bloco if: "+nome);/* const 'nome' existe somente fora do bloco if */