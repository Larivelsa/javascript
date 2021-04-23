/**Usando a forma tradicional de escrever funções, preencha o código abaixo atendendo aos itens a seguir:

- A função "verifica_tamanho_senha" deve verificar se a senha possui no mínimo 10 caracteres;
- O parâmetro da função deve ter o nome "senha";
- Caso essa condição seja atendida, a função deve retornar o valor booleano true. */

function verifica_tamanho_senha(senha) {

    if(senha>=10) {
        return senha = true;
      
   }

}

let senha_cadastro = "minha_senha";

if(senha){
   console.log("A senha possui o mínimo de 10 caracteres");
} else {
   console.log("A senha não possui o mínimo de 10 caracteres");
}