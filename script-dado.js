//DICE RANDOM
var contador = 0;

var carasDado = prompt("Tipo de Dados (D6, D20, etc..)?");
var carasDado = parseInt(carasDado);
var numeroDados = prompt("Cuantos D6 quieres lanzar?");
var numeroDados = parseInt(numeroDados);

while (contador < numeroDados) {
    contador = contador +1;
    var Number = Math.floor(Math.random() * carasDado) + 1;
    document.write("Resultado: " + Number + "<br>");
}