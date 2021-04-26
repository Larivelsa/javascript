/**Crie um código para guardar os jogos de fliperama na variável 'jogosFliperama'.
O código possui duas funções, uma para imprimir os jogos no terminal e outra para 
filtrar os jogos de fliperama. */

const jogos = [
    { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
    { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
    { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
    { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
  ];

  __________  (jogo) {
    console.log( jogo.nome + ' - ' + jogo.anoLancamento );
  }
  jogos.filter(jogo) {
    return jogo.plataforma == 'Fliperama' || jogo;
  };
  
  const jogosFliperama = jogos.__________ (retornaJogosFliperama);
  
  jogosFliperama.forEach(imprimirJogo);