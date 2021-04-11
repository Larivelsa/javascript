/* a estrutura for ... of itera colecoes de dados  
e assim como o for...in nao precisa de contador */

let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {

    console.log("Email: " + email);

}


let disciplinas = [
    { id: 1, nome: "português", carga_horaria: 250 },
    { id: 2, nome: "matemática", carga_horaria: 220 },
    { id: 3, nome: "história", carga_horaria: 150 },
    { id: 4, nome: "geografia", carga_horaria: 150 },
    { id: 5, nome: "inglês", carga_horaria: 70 }
];

//exercitar este conceito
for ( disciplina of disciplinas ) {

    let id_discipina = disciplina.id;
    let nome_discipina = disciplina.nome;
    let carga_horaria_discipina = disciplina.carga_horaria;

    console.log("Id da disciplina: " + id_discipina);
    console.log("Nome da disciplina: " + nome_discipina);
    console.log("Carga horária da disciplina: " + carga_horaria_discipina);

    console.log("\n");

}


let noticias = [
    { id: 1, titulo: "Nubank levanta US$ 400 milhões em nova rodada de investimento", status: 1 },
    { id: 2, titulo: "Procon-SP notifica Serasa pedindo explicações sobre vazamento de dados", status: 1 },
    { id: 3, titulo: "Login no WhatsApp Web terá autenticação por biometria", status: 0 },
    { id: 4, titulo: "Lucro da Microsoft cresce 32% no 4º trimestre de 2020", status: 1 },
];

for ( noticia of noticias ) {

    let id_noticia = noticia.id;
    let nome_noticia = noticia.titulo;
    let status_noticia = noticia.status;

    if ( status_noticia == 0 ) {
        continue; /* se usasse o break aqui, o loop acabaria e nao exibiria
        as outras noticias que nao sao status_noticia 0*/

    }

    console.log("Id da notícia: " + id_noticia);
    console.log("Nome da notícia: " + nome_noticia);
    console.log("Status da notícia: " + status_noticia);
    console.log("\n");

}



let chuvas_de_meteoros = [
    { nome: 'Alfa Centaurídeos',            declinacao: -59,  intensidade: 'Média'},
    { nome: 'Gama Normídeos',               declinacao: -50,  intensidade: 'Média'},
    { nome: 'Pi Pupídeos',                  declinacao: -45,  intensidade: 'Irregular'},
    { nome: 'Líridas',                      declinacao:  34,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',                declinacao:  -1,  intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',                  declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',           declinacao:  48,  intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          declinacao: -10,  intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       declinacao: -16,  intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',          declinacao: -30,  intensidade: 'Média'},
    { nome: 'Perseidas',                    declinacao:  58,  intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               declinacao:  59,  intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',              declinacao:  39,  intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        declinacao:  40,  intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              declinacao:   9,  intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    declinacao:  16,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   declinacao:  54,  intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           declinacao:  27,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               declinacao:  37,  intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            declinacao:  22,  intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     declinacao:  22,  intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          declinacao:   1,  intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               declinacao:   8,  intensidade: 'Fraca'},
    { nome: 'Fenícidas',                    declinacao: -53,  intensidade: 'Irregular'},
    { nome: 'Quadrântidas',                 declinacao:  49,  intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',              declinacao: -45,  intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              declinacao:   2,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   declinacao:  30,  intensidade: 'Média'},
    { nome: 'Gemínidas',                    declinacao:  33,  intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            declinacao:  18,  intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      declinacao:  76,  intensidade: 'Média'},
];

for(let chuva in chuvas_de_meteoros){
 console.log(chuva);
}