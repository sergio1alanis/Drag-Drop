function comenzar() {
    var elementoId = prompt("Ingeesa el id del elemento donde deseas agregar los archivos: 'zonaDestino o OzonaDesatino?");

    var soltar = document.getElementById(elementoId);
    soltar.addEventListener("dragenter", function(e) { e.preventDefault(); }, false);
    soltar.addEventListener("dragover", function(e) { e.preventDefault(); }, false);
    soltar.addEventListener("drop", soltado, false);
}

function resaltarFecha(fecha) {
    // Verificar un mes espeifico y aplicar estilo 
    return fecha.getMonth() === 7 ? 'color: red;' : '';
}


function soltado(e) {
    e.preventDefault();
    var archivos = e.dataTransfer.files;
    var listado = "";

    for (var i = 0; i < archivos.length; i++) {
        var fechaModificacion = archivos[i].lastModifiedDate;
        var estiloColor = resaltarFecha(fechaModificacion);


        listado += `<div style="${estiloColor}">"Archivo: " + archivos[i].name + "<br> " + "Peso: " + (archivos[i].size / 1024).toFixed(2) + "MB" + "<br>  " +
            "Tipo: " + archivos[i].type + "<br>" + "Fecha ultima Modificacion: " + archivos[i].lastModifiedDate.toLocaleDateString() + "<br><br>"</div>`;
    }

    this.innerHTML = listado;
    var numero = archivos.length;
    alert("NUmero de archivos:" + numero);

}
window.addEventListener("load", comenzar, false);