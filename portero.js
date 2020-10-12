function presionarBoton(button) {
    let numero = button.value;
    document.getElementById("visor1").innerHTML += numero;
    document.getElementById("visor2").innerHTML += numero;
}

function llamarAlDepto() {
    let visor1 = document.getElementById('visor1');
    let visor2 = document.getElementById('visor2');

}

function limpiarVisores() {
    document.getElementById("visor1").innerHTML = "";
    document.getElementById("visor2").innerHTML = "";
}