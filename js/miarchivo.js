document.addEventListener('DOMContentLoaded', function() {
    const btnImprimir = document.getElementById('btnImprimir');
    const eliminarBotones = document.querySelectorAll('.eliminar-btn');

    // Evento para imprimir la tabla
    btnImprimir.addEventListener('click', function() {
        imprimirTabla();
    });

    // Eventos para eliminar filas
    eliminarBotones.forEach(btn => {
        btn.addEventListener('click', function() {
            eliminarcolumna(btn);
        });
    });

    // Función para imprimir la tabla
    function imprimirTabla() {
        // Clona la tabla actual para no modificar la original
        const tablaImprimir = document.querySelector('.table').cloneNode(true);


        // Abre una ventana de impresión y escribe la tabla modificada
        const ventanaImpresion = window.open('', '_blank');
        ventanaImpresion.document.open();
        ventanaImpresion.document.write(`
            <html>
            <head>
                <title>Tabla para Imprimir</title>
                <style>
                    /* Estilos para impresión */
                    body {
                        font-family: Arial, sans-serif;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    th, td {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h2>Tabla de Cotizaciones</h2>
                ${tablaImprimir.outerHTML}
            </body>
            </html>
        `);
        ventanaImpresion.document.close();
        ventanaImpresion.print();
    }

    // Función para eliminar una fila
    function eliminarcolumna(btnEliminar) {
        const fila = btnEliminar.closest('tr');
        fila.remove();
    }
});
