var counter = 0;
var results = [];
var counterNumberDices = [];
var currentCounter = 0;
var currentResult = 0;

var diceFace = prompt("De cuantas Caras quieres tus Dados (6, 20, etc..)?");
var diceFace = parseInt(diceFace);
var diceNumber = prompt("Cuantos Dados quieres lanzar?");
var diceNumber = parseInt(diceNumber);

while (counter < diceNumber) {
    counter = counter +1;
    counterNumberDices.push(counter);
    var number = Math.floor(Math.random() * diceFace) + 1;
    results.push(number);
    //document.write("Resultado: " + Number + "<br>");
};
document.write("Estos son tus numeros " + results + "<br>");

counterNumberDices.forEach(function(counterNumberDice) {
    results.forEach(function(result) {
        if (result == counterNumberDice) {
            currentCounter = currentCounter + 1;
            currentResult = result;
        }
    });
    if (currentCounter != 0){
        document.write("Tienes " + currentCounter + " resultados de " + currentResult + "<br>");
        currentCounter = 0;
    }
});