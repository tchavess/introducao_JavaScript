
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

    var pesoValido = validaPeso(peso);;
    var alturaValida = validaAltura(altura);;

    if(!pesoValido){
        console.log("Peso Invalido!!");
        pesoValido = false;
        //alert("Peso Invalido");
        var pesoInvalido = paciente.querySelector(".info-imc");
        pesoInvalido.textContent = "Peso Inválido";
        pesoInvalido.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        console.log("Altura Invalida!!");
        pesoValido = false;
      //  alert("Altura Invalida");
        var pesoInvalido = paciente.querySelector(".info-imc");
        pesoInvalido.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");

    }
    if(pesoValido && alturaValida){
    var imc = calculaImc(peso,altura);
    var tdimc = paciente.querySelector(".info-imc");
    tdimc.textContent = imc;
    }

    function calculaImc(peso, altura){
      var imc = 0;
      imc = peso/(altura*altura);
      return imc.toFixed(2);
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
