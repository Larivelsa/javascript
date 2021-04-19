/**objeto date()
 * retorna a hora do sistema ou entao eh possivel passar 
 * alguma data por parametro
 * a ordem eh:  date(ano,mes,dia,hora,minuto,segundo,milissegundo)
 * obs: o mes inicia em zero, portanto janeiro eh 0 e assim sequencialmente
 * isto ocorre devido a heranca da funcao java.util.Date que tb eh assim
 */
const hoje = new Date();
console.log(hoje);

const data = new Date(1991,0,12,14,45,0,0);
console.log(data);

/** UTC (Tempo Universal Coordenado) - referencia para calcular fusos horarios
 * timestamp eh a representacao numerica do UTC - o valor passado eh a quantidade
 * de milissegundo passados desde Unix Epoch (1 de Janeiro de 1970, as 00:00)
*/
console.log(hoje.toString());
console.log(hoje.toUTCString());
console.log(hoje.valueOf());//timestamp

/* obtendo a diferenca de tempo */
const time_hoje = hoje.getTime();
const time_data = data.getTime(); 

const diferenca = time_hoje - time_data;
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;
console.log(horas);