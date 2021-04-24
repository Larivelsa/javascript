const noticias = [
    'Cyberpunk 2077: Ray Tracing será exclusivo Nvidia no lançamento ',
    'Elon Musk planeja criar uma colônia de humanos em Marte até 2050 ',
  ];
  const novaNoticia = 'Among Us ganhará tradução em português do Brasil ';


//Remova a primeira notícia do array 'noticias' e depois insira a nova notícia nele.
noticias.splice(0,1);
noticias.push(novaNoticia);



  for (const noticia of noticias) {
    console.log(noticia);
  }