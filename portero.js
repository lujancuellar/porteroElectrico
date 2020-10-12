function presionarBoton(button) {
    let numero = button.value;
    document.getElementById("visor1").innerHTML += numero;
    document.getElementById("visor2").innerHTML += numero;
}

function llamarDepto() {
    
}

function limpiarVisores() {
    document.getElementById("visor1").innerHTML = "";
    document.getElementById("visor2").innerHTML = "";
}