const dados = require('./dados/dados.js');
const funcoes = require('./funcoes/funcoes.js');


let data_app = new Date();

const nome_signo = funcoes.retorna_signo(dados.colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);

