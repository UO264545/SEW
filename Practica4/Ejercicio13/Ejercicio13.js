class ManejadorDeArchivos {
    constructor() {
    }

    handleFiles(files) {
        var file = files[0];

        var datos = "<table>";

        datos += "<tr><th colspan='2'>Datos del archivo seleccionado</th></tr>";
        datos += "<tr><th>Nombre</th><td>" + file.name + "</td></tr>";
        datos += "<tr><th>Tama\u00F1o</th><td>" + file.name + "</td></tr>";
        datos += "<tr><th>Tipo</th><td>" + file.type + "</td></tr>";
        datos += "<tr><th>Ultima modificacion</th><td>" + file.lastModifiedDate + "</td></tr>";

        datos += "</table>";

        if (file.type.match("text") || file.type.match("json")) {
            datos += "<h1>Contenido del fichero</h1><p id='resultado'></p>";
            $("#datos").html(datos);

            var reader = new FileReader();
            reader.onload = ( (e) => $("#resultado").html(e.target.result) );
            reader.readAsText(file);
        }

        $("#datos").html(datos);
    }
}

var manejador = new ManejadorDeArchivos();