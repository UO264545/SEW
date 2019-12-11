class GeoLocalizacion {
    constructor() {
    }

    obtenerUbicacion() {
        navigator.geolocation.getCurrentPosition(this.mostrarPosicion, this.errores);
    }

    mostrarPosicion(posicion) {
        var miPosicion = new google.maps.Marker({
            position: new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude),
            map: mapa,
            title: "Mi posicion"
        });
    }

    mostrarMapa() {
        var mapOptions = {
            zoom: 8,
            center: { lat: 43.3661, lng: -5.83 }
        };
        mapa = new google.maps.Map(document.getElementById("pos"), mapOptions);
    }
    
}
var mapa;
var geoLoc = new GeoLocalizacion();