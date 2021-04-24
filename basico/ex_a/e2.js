const alunos = [
  { nome: "José", av1: 10, av2: 5, av3: 7 },
  { nome: "Ana", av1: 1, av2: 10, av3: 10 },
  { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
  { nome: "Diego", av1: 10, av2: 2, av3: 8 },
];

alunos.forEach(aluno => {
  const media = (aluno.av1 + aluno.av2 + aluno.av2) / 3;

  if (media >= 7) {
    console.log(aluno.nome + ' Aprovado!');
  }
  else if
    (media >= 6) {
    console.log(aluno.nome + ' Fazer av4');
  }
  else {
    console.log(aluno.nome + ' Reprovado"');
  }
});

