function iniciarPagina() {
    var link = "http://worldweather.wmo.int/es/json/" + id + "_es.xml";

    $.ajax({
        url: link,
        type: "get",
        dataType: 'json',
        data: {},
        crossDomain: true,
        complete: function (data) {
            var datos = "<section id='datos'>";
            var json = data.responseJSON;

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
    xhr.setRequestHeader('Authorization', "localhost");
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'localhost');
}