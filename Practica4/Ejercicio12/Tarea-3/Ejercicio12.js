class GeoLocalizacion {
    constructor() {
    }

    obtenerUbicacion() {
        navigator.geolocation.getCurrentPosition(this.mostrar, this.errores);
    }

    mostrar(posicion) {
        var mapurl = 'http://maps.google.com/maps/api/staticmap?center=' + posicion.coords.latitude
            + ',' + posicion.coords.longitude + '&zoom=12&size=400x400&sensor=false&markers=' +
            posicion.coords.latitude + ',' + posicion.coords.longitude + "&key=AIzaSyCzXNoaFp7Kdli_pmXKg2H61kFo0cPtEu8";


        $("#pos").html("<img src='" + mapurl + "' />" );
    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
}

var geoLoc = new GeoLocalizacion();