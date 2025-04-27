function criarParagrafo() {
    let para = document.createElement("p");
    para.textContent = "Você clicou no botão!";
    document.body.appendChild(para);
}

const botoes = document.querySelectorAll("button");

for (botao of botoes) {
    botao.addEventListener("click", criarParagrafo);
}