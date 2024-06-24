document.addEventListener("DOMContentLoaded", function() {
    const ultimaActualizacion = document.getElementById("ultima-actualizacion");

      // sirve para actualizar la fecha cada vez que se carga la pagina
    function actualizarFecha() {
        const ahora = new Date();
        ultimaActualizacion.textContent = ahora.toLocaleString();
    }
  
    actualizarFecha();
});
