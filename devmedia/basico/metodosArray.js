const imprimeLinha = () => {
    linha = "";
    console.log(`\n${linha.padEnd(60, '-*')}\n`);
}

let linha = "";

const diasDaSemana = [
    "domingo",
    "segunda-feira",
    "terca-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
];

console.log(diasDaSemana.push("sabado")); //insere no final do array elemento e retorna o tamanho novo do array
diasDaSemana.pop();//remove o ultimo elemento do array
diasDaSemana.map((dia) => console.log(dia)); // percorre um array - o mesmo que o for (i=0;i<array.length;i++) faria
console.log(diasDaSemana.splice(1, 1));/*remove elemento do array, primeiro parametro eh a posicao inicial a a ser removida
e o segundo paramentro e a quatidade de elementos a partir daquele indice informado e retorna um array com 
os elementos que foram removidos*/
console.log(diasDaSemana);

imprimeLinha();

/* exemplo basico de insercao e remocao de elementos do array - devmedia */
const produto = {
    nome: 'New Super Mario Bros.', qnt: 1, valor: 250
};

const carrinho = [
    { nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    { nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];

// Insere o produto no carrinho
carrinho.push(produto);

// Remove o item "Super Mario Kart 8"
carrinho.splice(1, 1);

// Remove todos os elementos do carrinho
const totalElementos = carrinho.length;
//carrinho.splice(0, totalElementos); //remove todos os elementos do 'carrinho'


function imprimirItem(produto, index) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;

    console.log(texto);
}

carrinho.forEach(imprimirItem);


imprimeLinha();

/* forEach() - executa os comandos que ha na funcao para cada elemento do array */
const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
];
/* no forEach(), o primeiro parametro (elemento atual a ser percorrido - obrigatorio) eh o objeto a ser iterado,
o segundo parametro (opcional) eh o indice  e o terceiro parametro eh o array a ser iterado e eh retornado um valor
para cada posicao do array conforme a logica da funcao*/

function imprimirProduto(produto, index) {
    console.log(index + " " + produto.nome);
}

produtos.forEach(imprimirProduto); // nomeArray.forEach(nomeFuncaoASerExecutada)

imprimeLinha();

/* funcao map() tem a funcao basica de receber um array e retorna-lo 
conforme definido em alguma funcao a qual trabalha com seus elementos 
sintaxe nomeArray.map(nomeFuncaoASerExecutada)*/

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

function abreviar(mes) {
    return mes.substr(0, 3);
}

const mesesAbreviados = meses.map(abreviar);

console.log(mesesAbreviados);


imprimeLinha();

/* filter() filtra elementos de um array e retorna um novo array com os elementos filtrados*/
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
}

const carrosFiat = carros.filter(retornarCarroFiat);

console.log(carrosFiat);

imprimeLinha();

/* reduce() reduz um array a um unico valor podendo ser um numero, uma string, um array ou um objeto,
sendo o primeiro parametro a funcao a ser utilizada e o segundo o valor inicial da reducao (no caso, a soma),
pois o array original sera reduzido a um unico valor*/
const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 3, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];

function somarValor(total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

    return total + valorTotal;
}

const valorAPagar = itensCarrinho.reduce(somarValor, 0);

console.log(valorAPagar);

imprimeLinha();



