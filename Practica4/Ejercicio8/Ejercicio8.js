function iniciarPagina() {    $("section").each(function () {        var boton = "<button onclick='mostrarDatos(" +            $(this).attr("id") +            ")' >Consultar informacion meteorologica</button>";        var botonOcultar = "<button onclick='ocultarDatos(" +            $(this).attr("id") +            ")' >Ocultar</button>";        $(this).html($(this).html() + "<section name='botones'>" + boton + botonOcultar + "</section>");    });}function ocultarDatos(id) {    $("#" + id).children("#datos").remove();}function mostrarDatos(id) {    var seccion = $("#" + id);
    var link = "https://cors-anywhere.herokuapp.com/https://worldweather.wmo.int/es/json/" + id + "_es.xml";

    $.ajax({
        url: link,
        type: "get",
        dataType: 'application/json',
        data: {},
        crossDomain: true,
        complete: function (data) {
            console.log(data);
            var datos = "<section id='datos'>";
            var json = JSON.parse(data.responseText);

            var dias = json.city.forecast.forecastDay;
            for (var dia of dias) {
                var icon = dia.weatherIcon + "";
                icon = icon.substring(0, 2);

                datos += "<section id='dia'>";

                datos += "<section id='columna1'>";
                datos += "<h4 id='fecha'>" + dia.forecastDate + "</h4>";
                datos += "<p id='Tiempo'>" + dia.weather + "</p>";
                datos += "</section>";
                datos += "<section id='columna2'>";
                datos += "<img id='iconoTiempo' src='https://worldweather.wmo.int/img_cartoon/pic" + icon + ".gif' />";
                datos += "</section>";
                datos += "<section id='columna3'>";
                datos += "<p id='maxTemp'>" + dia.maxTemp + "\u00BA</p>";
                datos += "<p id='minTemp'>" + dia.minTemp + "\u00BA</p>";
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
    xhr.setRequestHeader('x-requested-with', '3');
}