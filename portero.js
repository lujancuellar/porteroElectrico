function presionarBoton(button) {
    let primerVisor = button.value; 
    let segundoVisor = button.value; 
    if (primerVisor <= 9 ) {
        document.getElementById("visor1").innerHTML += primerVisor; 
    }
    if (segundoVisor <= 9) {
        document.getElementById("visor2").innerHTML += segundoVisor;
    }
}  

function llamarDepto() {
    
}

function limpiarVisores() {
    document.getElementById("visor1").innerHTML = "";
    document.getElementById("visor2").innerHTML = "";
}