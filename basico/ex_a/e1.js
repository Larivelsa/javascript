const tecnologias = [
    { nome: "C#", tipo: "Linguagem" },
    { nome: ".NET Core", tipo: "Framework" },
    { nome: "Spring", tipo: "Framework" },
  ];

  tecnologias.forEach(tec => {
    console.log(tec.tipo + ' ' + tec.nome);
  });