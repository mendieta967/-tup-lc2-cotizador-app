document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", function(event) {
        // Validamos simple para el formulario
        if (nombre.value.trim() === "") {
            alert("Por favor, ingrese su nombre.");
            nombre.focus();
            event.preventDefault();
            return false;
        }
        
        if (email.value.trim() === "") {
            alert("Por favor, ingrese su email.");
            email.focus();
            event.preventDefault();
            return false;
        }

        if (mensaje.value.trim() === "") {
            alert("Por favor, ingrese su mensaje.");
            mensaje.focus();
            event.preventDefault();
            return false;
        }

        alert("Formulario enviado con éxito.");
    });
});
