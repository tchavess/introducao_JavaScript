
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
        //alert("Peso Invalido");
        var pesoInvalido = paciente.querySelector(".info-imc");
        pesoInvalido.textContent = "Peso Inválido";
        pesoInvalido.classList.add("paciente-invalido");
    }

    if(altura<0 || altura>3.00){
        console.log("Altura Invalida!!");
        pesoValido = false;
      //  alert("Altura Invalida");
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

  var botaoAdicionar = document.querySelector("#adicionar-paciente");

  botaoAdicionar.addEventListener("click",function(){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

 pacienteTr.appendChild(nomeTd);
 pacienteTr.appendChild(pesoTd);
 pacienteTr.appendChild(alturaTd);
 pacienteTr.appendChild(gorduraTd);

 var tabela = document.querySelector("#tabela-pacientes");

 tabela.appendChild(pacienteTr);


});
console.log(botaoAdicionar);
