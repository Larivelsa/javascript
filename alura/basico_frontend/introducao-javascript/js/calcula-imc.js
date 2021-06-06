var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// cria uma lista com todos os elementos que possuem a classe paciente
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    
    var paciente = pacientes[i];
    //cada paciente é uma tr (linha)

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    var peso = tdPeso.textContent;
    var altura  = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >=1000){
        console.log("Peso inválido.");
        pesoValido = false;
        tdPeso.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    } 


    if(altura <= 0 || altura >= 3){
        console.log("Peso inválido.");
        alturaValida = false;
        tdAltura.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    
    }


    if (pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Peso e/ou altura inválido(s)"
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}