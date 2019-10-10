

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i=0;i<pacientes.length;i++)
{
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso") ;
    var tdaltura = paciente.querySelector(".info-altura") ;

    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if(peso<0 || peso>200){
        console.log("Peso Invalido!!");
        pesoValido = false;
        alert("Peso Invalido");
        var pesoInvalido = paciente.querySelector(".info-imc");
        pesoInvalido.textContent = "Peso Inválido";
        pesoInvalido.classList.add("paciente-invalido");
    }

    if(altura<0 || altura>3.00){
        console.log("Altura Invalida!!");
        pesoValido = false;
        alert("Altura Invalida");
        var pesoInvalido = paciente.querySelector(".info-imc");
        pesoInvalido.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");

    }
    if(pesoValido && alturaValida){
    var imc = peso/(altura*altura);

    var tdimc = paciente.querySelector(".info-imc");
    tdimc.textContent = imc.toFixed(2);
    }
}
