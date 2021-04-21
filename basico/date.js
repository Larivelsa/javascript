/**objeto date()
 * retorna a hora do sistema ou entao eh possivel passar 
 * alguma data por parametro
 * a ordem eh:  date(ano,mes,dia,hora,minuto,segundo,milissegundo)
 * obs: o mes inicia em zero, portanto janeiro eh 0 e assim sequencialmente
 * isto ocorre devido a heranca da funcao java.util.Date que tb eh assim
 */
const hoje = new Date();
console.log(hoje);

const data = new Date(2021, 3, 18, 14, 45, 0, 0);
console.log(data);

/** UTC (Tempo Universal Coordenado) - referencia para calcular fusos horarios
 * timestamp eh a representacao numerica do UTC - o valor passado eh a quantidade
 * de milissegundo passados desde Unix Epoch (1 de Janeiro de 1970, as 00:00)
*/
console.log(hoje.toString());
console.log(hoje.toUTCString());
console.log(".valueOf: " + hoje.valueOf());
//timestamp em milissegundos desde 01/01/1970 00:00, eh um valor primitivo do Date() - mesma funcao do .getTime()

/* obtendo a diferenca de tempo */
const time_hoje = hoje.getTime();
const time_data = data.getTime();
const diferenca = time_hoje - time_data;
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;
const dias = horas / 24;
console.log(dias);

/* getters de Date() */
console.log(hoje.getFullYear());
console.log(hoje.getMonth());
console.log(hoje.getDate());//dia do mes
console.log(hoje.getDay());//dia da semana (dom 0, seg 1, ter 2, qua 3, qui 4, sex 5, sab 6)
console.log(hoje.getMinutes());
console.log(hoje.getMilliseconds());
console.log(hoje.getTime());//representa quantos milissegundos se passaram desde 1970-01-0 00:00:00 ate a data definida - tem a mesma funcao do .valueOf()
console.log(hoje.getTimezoneOffset());//retorna a diferenca em minutos de fuso horario local em relacao ao UTF

/* getters de conversao de Date() */
console.log(".toString(): " + hoje.toString());//string com data e tempo
console.log(".toDateString(): " + hoje.toDateString());//string com apenas a data
console.log(".toTimeString(): " + hoje.toTimeString());//string apenas com a tempo
console.log(".toISOString(): " + hoje.toISOString());//string com data e tempo no formato ISO 8601, com fuso horario UTC 0
console.log(".toLocaleString(): " + hoje.toLocaleString());//string com data e tempo local
console.log(".toLocaleDateString(): " + hoje.toLocaleDateString());//string com data local
console.log(".toLocaleTimeString(): " + hoje.toLocaleTimeString());//string com tempo local

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

console.log(hoje.toLocaleString('fr', options));//string com idioma, data e tempo personalizados

let padrao_br_ex = "11 de novembro de 2020 15:23:58 BRT";
let padrao_eua_ex = "November 11, 2020 at 3:23:58 PM GMT-3";

const personalizandoData = {
    weekday: 'long', // segunda-feira
    weekday: 'short', // seg.
    weekday: 'narrow', // S

    month: "numeric", // 2
    month: "2-digit", // 02
    month: "long", // Março
    month: "short", // Mar
    month: "narrow", // M

    year: 'numeric', // 2020
    year: '2-digit', // 20

    day: 'numeric', // 1
    day: '2-digit', // 01
};
console.log(hoje.toLocaleDateString('pt-BR', personalizandoData));

const personalizandoTempo = {
    hour: 'numeric', // 1
    hour: '2-digit', // 01,

    minute: 'numeric', // 1
    minute: '2-digit', // 01,

    second: 'numeric', // 1
    second: '2-digit', // 01,
}
console.log(hoje.toLocaleTimeString('pt-BR', personalizandoTempo));

const personalizandoDataTempo = {
    dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    timeStyle: "long", // 01:05:09 BRT
    timeStyle: "medium", // 01:05:09
    timeStyle: "short", // 01:05
}
console.log(hoje.toLocaleString('pt-BR', personalizandoDataTempo));

/* setters */

hoje.setFullYear(1991);
hoje.setMonth(0);
hoje.setDate(31);
hoje.setHours(15);
hoje.setSeconds(8);
hoje.setMinutes(45);
hoje.setMilliseconds(9);
console.log("Sem UTC: " + hoje);


const hoje_UTC = new Date();
hoje_UTC.setUTCFullYear(1991);
hoje_UTC.setUTCMonth(0);
hoje_UTC.setUTCDate(31);
hoje_UTC.setUTCHours(15);
hoje_UTC.setUTCSeconds(8);
hoje_UTC.setUTCMinutes(45);
hoje_UTC.setUTCMilliseconds(9);
console.log("Com UTC: " + hoje_UTC);

hoje.setTime(757589047558);//define uma data alterando o timestamp
console.log(hoje);

/* codigo secao Praticando da Devmedia */
const dataUltimoAcesso = new Date('2021/04/10 17:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";

if (hora < 6 || hora >= 18) {
    msg = 'Boa noite\n';
} else if (hora >= 6 && hora < 12) {
    msg = 'Bom dia\n';
} else {
    msg = 'Boa tarde\n';
}

if (diferencaTime > milissegundosDia * 7) {
    msg += "Você está ausente há mais de uma semana!";
} else if (diferencaTime > milissegundosDia) {
    msg += "Você está ausente há dias!";
} else if (diferencaTime > milissegundosHora) {
    msg += "Você está ausente há horas!";
} else {
    msg += "Que bom que ainda está aqui!";
}

console.log(msg);


/**Crie um código para verificar se a data atual do sistema é uma sexta-feira 13 
 * (utilize as variáveis diaSemana e diaMes para isso).
Caso não seja sexta-feira 13 verifique se é sexta-feira 
e imprima 'Sextou!!!'.
Utilize o operador de igualdade estrita que verifica 
se um valor é igual tanto em tipo quanto em valor. */

const diaMes = dataAtual.getDate();
const diaSemana = dataAtual.getDay();

if ((diaSemana+3) == 5 && diaMes == 13) {
  console.log('Cuidado! Hoje é sexta-feira 13');

} else if ((diaSemana+3) == 5) {
  console.log('Sextou!');
}

const sohoje = new Date();
console.log(sohoje.getDate()+1);

