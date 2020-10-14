function presionarBoton(boton) {
   let valor = boton.innerHTML;
   let piso = document.getElementById("piso").value;
   let depto = document.getElementById("depto").value;
   if (piso.length < 2) {
       document.getElementById("piso").value = piso + valor;
   } else if (depto.length < 1) {
    document.getElementById("depto").value = depto + valor;
   }
}  

function llamarDepto() {
   let piso = document.getElementById("piso").value;
   let depto = document.getElementById("depto").value;

   if (piso < 48 && depto < 6) {
       document.getElementById("llamando").innerHTML = "Llamando al: " + "piso " + piso + " y departamento " + depto;
   } else {
    document.getElementById("llamando").innerHTML = "Departamento o piso inválido";
   }
}

function limpiarVisores() {
    document.getElementById("piso").value = "";
    document.getElementById("depto").value = "";
    document.getElementById("llamando").innerHTML = "";
}