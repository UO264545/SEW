class GeoLocalizacion {
    constructor() {
    }

    obtenerUbicacion() {
        navigator.geolocation.getCurrentPosition(this.mostrar, this.errores);
    }

    mostrar(posicion) {
        var datos = "";
        datos += "<p>Latitud: " + posicion.coords.latitude + " \u00B0 </p>";
        datos += "<p>Longitud: " + posicion.coords.longitude + " \u00B0 <\p>";
        datos += "<p>Precision de la latitud y longitud: " + posicion.coords.accuracy + " m<\p>";
        datos += "<p>Altitud: " + posicion.coords.altitude + " m<\p>";
        datos += "<p>Precision de la altitud: " + posicion.coords.altitudeAccuracy + " m <\p>";
        datos += "<p>Rumbo: " + posicion.coords.heading + " \u00B0 <\p>";
        datos += "<p>Velocidad: " + posicion.coords.speed + " m/segundo <\p>";

        $("#pos").html(datos);
    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
}

var geoLoc = new GeoLocalizacion();