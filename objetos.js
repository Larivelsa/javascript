/* 
objeto literal: em JS serve para agrupar dados de mesmo dominio (contexto)
propriedade do objeto: relacao entre chave (que identifica o valor) e valor
*/

var produto  = {
    id: 10,
    nome: "TV",
    valor: 1000.00
};

console.log(produto.id);
console.log(produto.nome);
console.log(produto.valor);
//console.log(produto.desconto); // testando propriedade inexistente - fica "undefined"

var tabarato = produto.valor>=1000;
console.log(tabarato);

/* 
colecao de objetos:  quando ha multiplos objetos agrupados 
representando um mesmo contexto
*/

var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];

console.log( colecao_disciplinas[0].id ); // 1
console.log( colecao_disciplinas[4].nome ); // Química
console.log( colecao_disciplinas[6].carga_horaria ); // 120

/* acessando as a propriedades de colecoes de objetos: 
necessita saber qual o indice (tipo do vetor mesmo) e
a chave (identificador) */

var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();
var dia_semana = data_atual.getDay();
var serie_do_dia = colecao_series_programacao[dia_semana];
var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);

/* chuck norris */

var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanho_colecao = curiosidades_chuck_norris.length;
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao); 
/*Math.floor arredonda um numero para baixo para o numero inteiro mais proximo
Math.random sorteia podendo ser 0 ou <1 (o 1 nunca eh sorteado)*/
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);

/* pokemon */
var curiosidades_pokemon = [
    { pokemon: "Kabuto",        curiosidade: "Pokémon regenerado a partir de um fóssil" },
    { pokemon: "Electabuzz",    curiosidade: "Possui seis dedos em cada mão" },
    { pokemon: "Ekans",         curiosidade: "Seu nome ao contrário significa cobra em inglês" },
    { pokemon: "Dragonite",     curiosidade: "Pode voar duas vezes a velocidade do som" },
    { pokemon: "Magikarp",      curiosidade: "Pula montanhas facilmente" },
    { pokemon: "Taillow",       curiosidade: "Voa mais de 180 milhas por dia" },
    { pokemon: "Muk",           curiosidade: "Uma gota desse pokémon pode poluir um lago inteiro" },
    { pokemon: "Slowbro",       curiosidade: "Único pokémon que pode voltar a evolução anterior" },
    { pokemon: "Zapdos",        curiosidade: "Tem maior vantagem de tipo entre os pássaros lendários" },
    { pokemon: "Spoink",        curiosidade: "Esse pokémon nunca para de pular" }
];

var tamanho_colecao = curiosidades_pokemon.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var pokemon_escolhido = curiosidades_pokemon[numero_sorteado];

var nome_pokemon = pokemon_escolhido.pokemon;
var curiosidade_pokemon = pokemon_escolhido.curiosidade;

console.log("CURIOSIDADE SOBRE O UNIVERSO POKÉMON");
console.log("Pokémon: " + nome_pokemon);
console.log("Curiosidade: " + curiosidade_pokemon);

/* series */
var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
]

var tamanho_colecao = colecao_series_programacao.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

