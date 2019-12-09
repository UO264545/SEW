class GeoLocalizacion {
    constructor() {
    }

    mostrar() {
        var map;
        var mapOptions = {
            zoom: 8,
            center: { lat: 43.3661, lng: -5.83 }
        };
        map = new google.maps.Map(document.getElementById("pos"), mapOptions);
    }
    
}

var geoLoc = new GeoLocalizacion();