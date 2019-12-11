function iniciarPagina() {    $("section").each(function () {        var boton = "<button onclick='mostrarDatos(" +            $(this).attr("id") +            ")' >Consultar informacion meteorologica</button>";        var botonOcultar = "<button onclick='ocultarDatos(" +            $(this).attr("id") +            ")' >Ocultar</button>";        $(this).html($(this).html() + "<section name='botones'>" + boton + botonOcultar + "</section>");    });}function ocultarDatos(id) {    $("#" + id).children("#datos").remove();}function mostrarDatos(id) {    var seccion = $("#" + id);
    var link = "https://cors-anywhere.herokuapp.com/https://api.tutiempo.net/xml/?lan=es&apid=qCDza4Xzaa4zagt&lid=" + id;

    $.ajax({
        url: link,
        type: "get",
        dataType: 'xml',
        data: {},
        crossDomain: true,
        complete: function (data) {
            var datos = "<section id='datos'>";
            var xml = data.responseXML;

            for (var i = 1; i < 8; i++) {
                var dia = $(xml).find("day" + i);
                datos += "<section id='dia'>";

                datos += "<section id='columna1'>";
                datos += "<h4 id='fecha'>" + $(dia).find("date").text() + "</h4>";
                datos += "<p id='Tiempo'>" + $(dia).find("text").text() + "</p>";
                datos += "</section>";

                datos += "<section id='columna2'>";
                datos += "<p id='viento'>" + $(dia).find("wind").text() + "km/h " +
                    $(dia).find("wind_direction").text() + "</p>";
                datos += "<img id='iconoViento' src='https://v5i.tutiempo.net/wd/big/black/" + $(dia).find("icon_wind").text() + ".png' />";
                datos += "</section>";

                datos += "<section id='columna3'>";
                datos += "<p id='sol'>Sol: " + $(dia).find("sunrise").text() + " - " + $(dia).find("sunset").text() + "</p>";
                datos += "<p id='Luna'>Luna: " + $(dia).find("moonrise").text() + " - " + $(dia).find("moonset").text() + "</p>";
                datos += "<img id='iconoLuna' src='https://v5i.tutiempo.net/wmi/02/" + $(dia).find("moon_phases_icon").text() + ".png' />";
                datos += "</section>";

                datos += "<section id='columna4'>";
                datos += "<img id='iconoTiempo' src='https://v5i.tutiempo.net/wi/03/40/" + $(dia).find("icon").text() + ".png' />";
                datos += "</section>";

                datos += "<section id='columna5'>";
                datos += "<p id='maxTemp'>" + $(dia).find("temperature_max").text() + "\u00BA</p>";
                datos += "<p id='minTemp'>" + $(dia).find("temperature_min").text() + "\u00BA</p>";
                datos += "</section>";

                datos += "</section>";
            }

            datos += "</section>";
            seccion.html(seccion.html() + datos);
        },
        beforeSend: setHeader
    });
}

function setHeader(xhr) {
    xhr.setRequestHeader('Authorization', "*");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
}