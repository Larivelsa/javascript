/**Armazene na variável 'receitasRapidas' apenas as receitas que demoram menos de 10 minutos de preparo. 
 * Em seguida imprima os nomes das receitas ('receitasRapidas') no terminal.*/

 const receitas = [
    { nome: 'Misto quente', tempoPreparo: 5 },
    { nome: 'Omelete', tempoPreparo: 10  },
    { nome: 'Pão de queijo', tempoPreparo: 20  },
    { nome: 'Pizza', tempoPreparo: 60 },
    { nome: 'Hamburguer', tempoPreparo: 60 },
  ];
  
  const receitasRapidas = receitas.filter( receita => receita.tempoPreparo <= 10);  
  for (const receita of receitasRapidas) {
    console.log(receita.nome);
  }