document.addEventListener("DOMContentLoaded", function() {
    const selectMoneda = document.getElementById("moneda");
    const seleccionarBtn = document.getElementById("Seleccionar");
    const tablaInformes = document.querySelector(".table tbody");

    const informesData = {
        "dolar_oficial": [
            { fecha: "15/04/2024", compra: 847, venta: 887, variacion: "down" },
            { fecha: "14/04/2024", compra: 850, venta: 890, variacion: "up" },
            { fecha: ""}
        ],
        "dolar_blue": [
            { fecha: "15/04/2024", compra: 995, venta: 1015, variacion: "down" },
            { fecha: "14/04/2024", compra: 996.09, venta: 1000.06, variacion: "up" },
            { fecha: "13/04/2024", compra: 1355.2, venta: 1419.2, variacion: "down" },
            { fecha: "12/04/2024", compra: 1050, venta: 1086, variacion: "up" },
            { fecha: "11/04/2024", compra: 1000, venta: 1200, variacion: "up" },
        ],
    };

    function actualizarTabla(moneda) {
        // lo usamos para limpiar la tabla
        tablaInformes.innerHTML = "";

        // obtenemos los datos para la moneda seleccioonada
        const data = informesData[moneda] || [];

        // creamos filas para los datos
        data.forEach(entry => {
            const row = document.createElement("tr");

            const monedaCell = document.createElement("td");
            monedaCell.textContent = moneda.replace("_", " ").toUpperCase();
            row.appendChild(monedaCell);

            const fechaCell = document.createElement("td");
            fechaCell.textContent = entry.fecha;
            fechaCell.classList.add("td_border");
            row.appendChild(fechaCell);

            const compraCell = document.createElement("td");
            compraCell.textContent = `$${entry.compra}`;
            compraCell.classList.add("td_border");
            row.appendChild(compraCell);

            const ventaCell = document.createElement("td");
            ventaCell.textContent = `$${entry.venta}`;
            ventaCell.classList.add("td_border");
            row.appendChild(ventaCell);

            const variacionCell = document.createElement("td");
            const button = document.createElement("button");
            button.classList.add(entry.variacion === "up" ? "action-btn" : "action-btnn");
            const icon = document.createElement("i");
            icon.classList.add("fas", entry.variacion === "up" ? "fa-arrow-up" : "fa-arrow-down");
            button.appendChild(icon);
            variacionCell.appendChild(button);
            row.appendChild(variacionCell);

            tablaInformes.appendChild(row);
        });
    }

    // para cambiar la selección de moneda
    seleccionarBtn.addEventListener("click", function() {
        const monedaSeleccionada = selectMoneda.value.toLowerCase().replace(" ", "_");
        if (monedaSeleccionada === "todas") {
            // se muestra todas las monedas
            tablaInformes.innerHTML = "";
            Object.keys(informesData).forEach(moneda => {
                actualizarTabla(moneda);
            });
        } else {
            // Mostrar la moneda seleccionada
            actualizarTabla(monedaSeleccionada);
        }
    });
});
