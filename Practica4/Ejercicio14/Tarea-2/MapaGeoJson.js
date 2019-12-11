class GeoLocalizacion {
    constructor() {
    }

    obtenerUbicacion() {
        navigator.geolocation.getCurrentPosition(this.mostrarPosicion, this.errores);
    }

    mostrarPosicion(posicion) {
        mostrarMarcador(posicion.coords.latitude, posicion.coords.longitude, "Mi posicion");
    }

    cargarGeoJSON() {
        this.mostrarMapa();

        var promise = $.getJSON("rutas.GeoJSON"); 
        promise.then(function (data) {
            var cachedGeoJson = data;
            mapa.data.addGeoJson(cachedGeoJson, { idPropertyName: "id" });
        });

        console.log(mapa);
    }

    mostrarMarcador(lat, long, name) {
        new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            map: mapa,
            title: name
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