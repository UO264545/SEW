class Modificador {
    constructor() {
    }

    mostrarParrafo() {
        $("#parrafo").show();
        var bt = $("#btParrafo");
        bt.text("Ocultar parrafo");
        bt.attr("onclick", "modificador.ocultarParrafo()");
    }

    ocultarParrafo() {
        $("#parrafo").hide();
        var bt = $("#btParrafo")
        bt.text("Mostrar parrafo");
        bt.attr("onclick", "modificador.mostrarParrafo()");
    }

    cambiarTextoAEcabezados() {
        $(":header").text("Encabezado modificado");
    }

    agregarFila() {
        var fila = "<tr>" +
            "<td>" + Math.floor(Math.random() * 10) + "</td>" +
            "<td>" + Math.floor(Math.random() * 10) + "</td>" +
            "<td>" + Math.floor(Math.random() * 10) + "</td>" +
            "</tr>";
        console.log(fila);
        $("#tabla").html($("#tabla").html() + fila);
    }

    eliminarUltimaFila() {
        var fila = $("#tabla tr").length;
        if (fila > 1) {
            $("#tabla tr:last").remove();
        } else
            alert("No se puede borrar el encabezado de la tabla");
    }

    mostrarInformacion() {
        this.ocultarInformacion();
        $("#informacion").html("Elementos: ");
        $("*").each(function () {
            var parrafo = "<p>" +
                "Elemento: " + $(this).get(0).tagName +
                ".   Elemento padre: " + $(this).parent().get(0).tagName +
                "</p"
            $("#informacion").html($("#informacion").html() + parrafo);
        });
    }

    ocultarInformacion() {
        $("#informacion").html("");
    }

    sumarTabla() {
        var total = 0;
        $("td").each(function () {
            total += parseInt($(this).html());
        });
        $("#sumaTabla").val(total);
    }
}

var modificador = new Modificador();