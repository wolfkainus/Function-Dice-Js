var counter = 0;
var results = [];
var counterNumberDices = [];
var currentCounter = 0;
var currentResult = 0;
var counterRollPass = 0;

var diceFace = prompt("De cuantas Caras quieres tus Dados (6, 20, etc..)?");
var diceFace = parseInt(diceFace);
var diceNumber = prompt("Cuantos Dados quieres lanzar?");
var diceNumber = parseInt(diceNumber);
var rollPass = prompt("Que número debe superar tu tirada?");
var rollPass = parseInt(rollPass);

while (counter < diceNumber) {
    counter = counter +1;
    counterNumberDices.push(counter);
    var number = Math.floor(Math.random() * diceFace) + 1;
    results.push(number);
    //document.write("Resultado: " + Number + "<br>");
};
document.write("<h3> Estos son tus numeros " + results + "</h3>");

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

results.forEach(function(result) {
   if (result >= rollPass) {
       counterRollPass = counterRollPass +1;
   }
});
document.write("<h2>" + counterRollPass + " tiradas exitosas!!" + "</h2>");