function Dado(a) {
    var Number = Math.floor(Math.random() * a) + 1;
    alert("Tu resultado es " + Number);
    //var numeroDados = prompt("Cuantos D6 quieres lanzar?");
    //var numeroDados = parseInt(numeroDados);
    //alert("Quieres lanzar " + numeroDados);
    //alert(Number * numeroDados);
}
Dado(6);