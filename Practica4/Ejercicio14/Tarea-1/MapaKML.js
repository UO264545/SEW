class GeoLocalizacion {
    constructor() {
    }

    obtenerUbicacion() {
        navigator.geolocation.getCurrentPosition(this.mostrarPosicion, this.errores);
    }

    mostrarPosicion(posicion) {
        mostrarMarcador(posicion.coords.latitude, posicion.coords.longitude, "Mi posicion");
    }

    cargarKML() {
        this.mostrarMapa();

        var kmlLayer = new google.maps.KmlLayer();
        var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
        var kmlLayer = new google.maps.KmlLayer(src, {
            suppressInfoWindows: true,
            preserveViewport: false,
            map: mapa
        });
        kmlLayer.addListener('click', function (event) {
            var content = event.featureData.infoWindowHtml;
            var testimonial = document.getElementById('capture');
            testimonial.innerHTML = content;
        });
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