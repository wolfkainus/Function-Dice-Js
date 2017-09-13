var counter = 0;
var results = [];
var currentCounter = 0;
var currentResult = 0;
var counterRollPass = 0;
var counterFace = 0;
var counterNumberFaces = [];

var diceFace = prompt("De cuantas Caras quieres tus Dados (6, 20, etc..)?");
var diceFace = parseInt(diceFace);
var diceNumbers = prompt("Cuantos Dados quieres lanzar?");
var diceNumbers = parseInt(diceNumbers);
var rollPass = prompt("Que número debe superar tu tirada?");
var rollPass = parseInt(rollPass);

while (counter < diceNumbers) {
    counter = counter +1;
    var number = Math.floor(Math.random() * diceFace) + 1;
    results.push(number);
};
while (counterFace < diceFace) {
    counterFace = counterFace +1;
    counterNumberFaces.push(counterFace);
};

document.write("Dados de " + diceFace + " caras <br>");
document.write("Haz tirado " + diceNumbers + " dados <br>");
document.write("La tirada debe superar el número " + rollPass + "<br>");

document.write("<h3> Estos son tus Dados " + results + "</h3>");

counterNumberFaces.forEach(function(counterNumberFace) {
    results.forEach(function(result) {
        if (result == counterNumberFace) {
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