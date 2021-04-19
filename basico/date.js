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
console.log(hoje.valueOf());//timestamp - valor primitivo do Date()

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
console.log(hoje.getTime());//representa quantos milissegundos se passaram desde 1970-01-0 00:00:00 ate a data definida
console.log(hoje.getTimezoneOffset());//retorna a diferenca de fuso horario local em relacao ao UTF

/* getters de conversao de Date() */
console.log(hoje.toString());//string com data e hora
console.log(hoje.toDateString());//string com apena a data
console.log(hoje.toTimeString());//string apenas com a hora






