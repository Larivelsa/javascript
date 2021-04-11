var randomico = Math.random();
console.log(randomico);
var vetor = [
    "Amora", // 0
    "Ameixa", // 1
    "Anis", // 2
    "Ave", // 3
    "Água", // 4
    "Alô" // 5
];


var quan_vetor = vetor.length;
console.log("quantidade de coisas no vetor: "+quan_vetor);
console.log("Randomico * quantidade de coisas no vetor: "+randomico*quan_vetor);
console.log(Math.floor(randomico*quan_vetor));


