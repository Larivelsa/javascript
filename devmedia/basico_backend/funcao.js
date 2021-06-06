/* funcao sem parametro - para quando precisa executar o mesmo codigo em lugares diferentes */
function versao() {
    return `retorna versao da app: ${(3).toFixed(1)}`;
}

let v = versao();
console.log(v);

/* funcao com parametro - recebe um valor para ser usado no bloco do codigo */
function media_1(n1, n2) {

    let m = (n1 + n2) / 2;
    let status;

    if (m >= 5) {
        status = `Grifinoria! Sua media_1 eh ${m}`;
    } else {
        status = `Sonserina! Sua media_1 eh ${m}`;
    }
    return status;
}

let aluno_1 = media_1(10, 8);
console.log(aluno_1);

/* arrow function - nao usa a palavra-cheve function */
const media_2 = (n1, n2) => {
    let m = (n1 + n2) / 2;
    let status;

    if (m >= 5) {
        status = `Grifinoria! Sua media_2 eh ${m}`;
    } else {
        status = `Sonserina! Sua media_2 eh ${m}`;
    }
    return status;

}

let aluno_2 = media_2(10, 9);
console.log(typeof(aluno_2));




