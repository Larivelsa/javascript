let nome = "Larissa";
let tamanho_nome = nome.length;
let frase_1 = nome + " eh programadora!";
console.log(frase_1);

let frase_2 = "Eu estou aprendendo a programar em JavaScript";
console.log(frase_2);
let frase_2_parte = frase_2.substring(9, 19);
/* metodo substring retorna parte da string, 
sendo passados por parametros a posicao inicial (iniciada em 0)
e a posicao final */
console.log("Parte da 'frase_2': " + frase_2_parte);

console.log(nome[0]);//acessando a posicao da string

let texto_1 = 'O universo eh uma \n harmonia de contrarios.';
/*string em aspas simples ou duplas precisam sempre estar na
mesma linha e para quebra-las na exibicao, usa-se o \n
*/
console.log(texto_1);

let texto_2 = 'Despreza as estradas largas, segue os carreiros.'
texto_2 += ' Pitagoras';
console.log(texto_2);

let texto_3 = `Todas as coisas sao numeros.`; //o acento grave (da crase) eh usada para template string

let texto_4 = `"Pensem o que quiserem de ti, 
faz aquilo que te parece justo."
Pitagoras`;
/* ao usar o acento grave, pode-se quebrar o texto em mais linhas
sem a necessidade de uma marcacao diferente na string */
console.log(texto_4);

let autor = "Pitagoras";
let texto_5 = `Quem fala semeia. Quem escuta, colhe. Esta frase foi dita por ${autor}`;
/* usando template string eh possivel inserir variaveis sem a necessidade
de uma concatenacao com sinal de + e para isto, basta usar ${variavel} */
console.log(texto_5);


/* exemplo pratico retirado do curso de JS do Devmedia */
let linguagem = "JavaScript";
let stack = "back-end";
let msg = "";

switch (stack) {
    case "back-end":
        console.log(`Estude Node.js para programação ${stack} em ${linguagem}`);
        break;

    case "front-end":
        console.log(`Estude React para programação ${stack} em ${linguagem}`);
        break;

    case "mobile":
        console.log(`Estude React Native para programação ${stack} em ${linguagem}`);
        break;

    default:
        console.log(`Tecnologia indisponível para ${stack}`);
        break;
}

/* toLowerCase e toUpperCase
obs: JS eh case sensitive
entao, por exemplo, no momento de validar um email
eh importante passa-lo pela metodo toLoweCase
para que nao haja divergencia de caracteres*/
console.log(nome.toLowerCase);
console.log(nome.toUpperCase);

/* removendo espaco em branco antes e depois na string
usando o metodo trim() que eh geralmente usado
no tratamento de dados de validacao de cadastros*/
let texto_6 = "               Aaaaaaaah               ";
console.log(texto_6.trim());

/* padStart() e padEnd()
sao metodos para preenchimento de string com determinado
caractere (serve para alinhamento visual de string, por exemplo) 
no priimeiro parametro, informa a quantidade total de caracteres
que a string devera ter e no segundo parametro qual caractere
devera ser usado para preencher a string
padStart() insere no comeco da string
padEnd insere no final da string*/
let texto_7 = "Usando os metodos pad...() para alinhamento de string";
let label_1 = "padStart()";
let label_2 = "padEnd()";
let texto_8 = "Insere a partir do inicio string";
let texto_9 = "Insere a partir do final da string"
console.log(texto_7);
console.log(label_1.padEnd(texto_7.length, '.') + texto_8);//lembrando que .lenght retorna valor numerico
console.log(label_2.padEnd(texto_7.length, '.') + texto_9);//os textos ficam alinhados conforme o comprimento da string 'texto_7'

/* metodo replace()
substitui partes da string
sendo o primeiro parametro o texto a ser substituido (o primeiro que encontrar so)
e o segundo parametro o texto a ser inserido no lugar do antigo */
let texto_10 = "Uma vida sem desafios nao vale a pena ser vivida. Platao";
console.log(texto_10.replace("Platao", "Socrates"));

/* metodos substring() e substr()
no substring(), o primeiro parametro eh a posicao inicial na
variavel a partir de onde a string sera extraida e no
segundo parametro eh o indice final
ja no substr(), o primeiro parametro eh a posicao inicial na
variavel a partir de onde a string sera extraida e no
segundo parametro eh a quantidade de caracteres a ser extraida
 */

let texto_11 = "Programando em JavaScript com VSCode";
console.log(texto_11.substring(30, 36));
console.log(texto_11.substr(15, 10));

/* metodo indexOf()
procura uma substring dentro de uma string e 
retorna a posicao inicial da primeira ocorrencia
na string e caso nao encontre retorna -1 */
let texto_12 = "A vida eh bela.";
console.log(texto_12.indexOf("bela"));

/* exemplo pratico usando o indexOf() */
let palavra_proibida = "CLOROQUINA";
let comentario = "cloroquina eh eficiente para o tratamento.";
comentario = comentario.trim();
comentario = comentario.toLowerCase();

if (comentario.indexOf(palavra_proibida.toLowerCase()) > -1) {
    console.log("O comentario possui palavra proibida.")
} else {
    console.log("O comentario nao possui palavra proibida");
}

/* metodo split() divide a string em substrings menores
eh passado por parametro o caractere que define a divisao
(remove o caractere passado por parametro da string e a partir
dele realiza a divisao)*/
let paises_string = "Brasil EUA Chile Espanha";
let paises_array = paises_string.split(" ");
console.log(paises_array);

/* exemplo pratico */

let nome_completo = "Ana Julia Francoise";
let nome_completo_array = nome_completo.split(" ");
console.log("Olá, " + nome_completo_array[0]);

/* mini projeto chuva de meteoros */

const chuvas_meteoros = [
    { nome: "Alfa Centaurideos", pico: "Fev 8", velocidade: "56 km/s"},
    { nome: "Gama Normideos", pico: "Mar 14", velocidade: "56 km/s"},
    { nome: "Pi Pupideos", pico: "Abr 23", velocidade: "18 km/s"},
    { nome: "Eta Aquaridas", pico: "Mai 5", velocidade: "66 km/s"},
    { nome: "Alfa Capricornideos", pico: "Jul 30", velocidade: "23 km/s"},
    { nome: "Delta Aquaridas do Sul", pico: "Jul 28", velocidade: "41 km/s"},
    { nome: "Piscis Austrinideos", pico: "Jul 28", velocidade: "35 km/s"},
    { nome: "Fenicidas", pico: "Dez 6", velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas", pico: "Dez 12", velocidade: "40 km/s"}
];

let titulo = "\n=== chuvas de meteoros - hemisferio sul ===\n";
let label_nome="Nome: ".padEnd(40,'.');
let label_pico="Pico: ".padEnd(40,'.');
let label_velocidade="Velocidade: ".padEnd(40,'.');

console.log(titulo.toUpperCase());
for(const chuvas of chuvas_meteoros){
    console.log(label_nome+chuvas.nome);
    console.log(label_pico+chuvas.pico);
    console.log(label_velocidade+chuvas.velocidade+"\n");
}


