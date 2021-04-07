/* o array sem inicia na posicao 0, 
comporta multiplos tipos de dados,
*/

var larissa = [
    "programadora",
    30,
    "Vargem Grande do Sul",
    true
];


var meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
];


var notas = [
    10,9,8
];
var quantidade = 3;
var soma = notas[0] + notas[1] + notas[2];
var media = soma / quantidade;

console.log("Média: " + media);
console.log("A coleção do array notas: " + notas);
notas[2]=9;
console.log("A coleção do array notas: " + notas);


var signos = [
    "Áries",
    "Touro",
    "Gêmeos",
    "Câncer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário",
    "Capricórnio",
    "Aquário",
    "Peixes"
];

console.log(signos.length);

var frases = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação",
    "Imagine uma nova história para sua vida e acredite nela",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
    "Se existe uma forma de fazer melhor, descubra-a",
    "Seja a mudança que você deseja ver no mundo.",
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força vem de dentro.",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
];

var data = new Date(); // obtem a data neste formato 2021-04-07T19:27:29.411Z
var dia = data.getDate(); //obtem o dia da data no objeto, no caso imprime 7
//var dia = 31;
console.log("Numero sorteado: "+dia--);

/* a decrementacao eh necessaria devido a necessidade de o dia ser sempre -1

caso o indice dia seja o dia 31 (obtido no objeto Date)
havera um erro de undefined, pois o array, embora tenha 31 elementos
o indice natural do array inicia-se em 0 e termina em 30
portanto existe a necessidade da decrementacao (dia--)

por exemplo: 
indice dia 1 (obtido no objeto Date) deve ter o valor 0 (para acessar corretamente o array)
indice dia 2 (obtido no objeto Date) deve ter o valor 1 (para acessar corretamente o array)
indice dia 3 (obtido no objeto Date) deve ter o valor 2 (para acessar corretamente o array)
.
.
.
indice dia 31 deve ter o valor 30 (para acessar corretamente o array)
*/
console.log("Variavel dia vale: "+dia);

console.log(frases[dia]);