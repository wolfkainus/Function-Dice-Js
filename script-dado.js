var contador = 0;
var Resultados = [];
var contadorNumeroDados = [];
var conteo = 0;
var conteoActual = 0;
var resultadoActual = 0;

var carasDado = prompt("De cuantas Caras quieres tus Dados (6, 20, etc..)?");
var carasDado = parseInt(carasDado);
var numeroDados = prompt("Cuantos Dados quieres lanzar?");
var numeroDados = parseInt(numeroDados);

while (contador < numeroDados) {
    contador = contador +1;
    contadorNumeroDados.push(contador);
    var Number = Math.floor(Math.random() * carasDado) + 1;
    Resultados.push(Number);
    document.write("Resultado: " + Number + "<br>");
};
document.write("Estos son tus numeros " + Resultados + "<br>");

contadorNumeroDados.forEach(function(contadorNumeroDado) {
    Resultados.forEach(function(Resultado) {
        if (Resultado == contadorNumeroDado) {
            conteoActual = conteoActual + 1;
            resultadoActual = Resultado;
        }
    });
    if (conteoActual != 0){
        document.write("Tienes " + conteoActual + " resultados de " + resultadoActual + "<br>");
        conteoActual = 0;
    }
});