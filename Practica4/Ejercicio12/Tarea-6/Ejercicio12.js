class GeoLocalizacion {
    constructor() {
    }

    consultarCoordenadas() {
        var lat = $("#latitud").val();
        var long = $("#longitud").val();

        this.colocarMarcador(parseInt(lat), parseInt(long), "");
        console.log(lat + " " + long);
    }

    colocarMarcador(latitud, longitud, nombre) {
        var nuevo = new google.maps.Marker({
            position: new google.maps.LatLng(latitud, longitud),
            map: mapa,
            title: nombre
        });
        mapa.panTo(new google.maps.LatLng(latitud, longitud));
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