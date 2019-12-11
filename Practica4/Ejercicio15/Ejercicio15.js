class Juego {
    constructor() {
        this.puntuacion = 0;
    }

    iniciar() {
        var json = this.ficheroJSON;

        this.puntuacion = 0;
        var catSeleccionada = $("#categorias :selected").attr("value");

        var preguntas = $.grep(json.categorias, (categoria) => categoria.name == catSeleccionada)[0].preguntas;
        var definiciones = "";
        var huecos = "";
        var htmlNombres = "";
        var imagenes = [];
        this.nombres = [];

        for (var i = 0; i < preguntas.length; i++) {
            var pregunta = preguntas[i];
            this.nombres[i] = pregunta.nombre;
            htmlNombres += "<label id='nombre" + i + "'></label>";
            huecos += "<div id='" + i + "' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
            definiciones += "<p>" + pregunta.definicion + "</p>";
            imagenes[i] = "<img id='" + i + "' src='" + pregunta.imagen + "' draggable='true' ondragstart='drag(event)'/>";
        }

        this.total = imagenes.length;
        var htmlImagenes = this.crearHTMLImagenes(imagenes);

        $("#puntuacion").html("");
        $("#nombres").html(htmlNombres);
        $("#imagenes").html(htmlImagenes);
        $("#definiciones").html(definiciones);
        $("#huecos").html(huecos);
        $("#seleccion").hide();
        $("#cambiarTematica").show();
        $("#soluciones").show();
        $("#puntuacion").show();
    }

    crearHTMLImagenes(imagenes) {
        var htmlImagenes = "";
        while(imagenes.length > 0) {
            var j = parseInt(Math.random() * imagenes.length);
            htmlImagenes += imagenes.splice(j, 1);
        }
        return htmlImagenes;
    }

    restaurarJSON() {
        $.getJSON("json/categorias.json", (json) => {
            this.ficheroJSON = json;
            this.anadirTematicas();
        });
        $("#tematicasPorDefecto").hide();
    }

    cambiarFicheroJSON(e) {
        var reader = new FileReader();
        reader.onload = (event) => {
            try {
                juego.ficheroJSON = JSON.parse(event.target.result);
                juego.anadirTematicas();
            } catch (error) {
                alert("Seleccione un archivo JSON valido.");
            }
        }
        reader.readAsText(e.target.files[0]);
    }

    anadirTematicas() {
        console.log(this.ficheroJSON);

        var opciones = "";
        for (var cat of this.ficheroJSON.categorias)
            opciones += "<option value='" + cat.name + "'>" + cat.name + "</option>";
        $("select").html(opciones);
    }

    fallar() {
        $("#puntuacion").html("<label>Has fallado!</label>");
        $("#puntuacion").html($("#puntuacion").html() + "<label>Puntuaci\u00F3n: " + this.puntuacion + "</label>");
    }

    acertar(i) {
        $("#nombre" + i).html(this.nombres[i]);
        this.puntuacion++;
        if (this.puntuacion == this.total) {
            $("#puntuacion").html("<label>Has ganado!</label>");
            return;
        }
        $("#puntuacion").html("<label>Has acertado!</label>");
        $("#puntuacion").html($("#puntuacion").html() + "<label>Puntuaci\u00F3n: " + this.puntuacion + "</label>");
    }
}

function inicializar() {
    document.getElementsByTagName("input")[0].addEventListener("change", juego.cambiarFicheroJSON, false);
    juego.restaurarJSON();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data == ev.target.getAttribute("id")) {
        ev.target.appendChild(document.getElementById(data));
        juego.acertar(data);        
    }
    else
        juego.fallar();
   
}

function cambiarTematica() {
    $("#seleccion").show();
    $("#soluciones").hide();
    $("#puntuacion").hide();
    $("#cambiarTematica").hide();
}

var juego = new Juego();