var prototypeInfoNav = {
    init: function (nombre, idioma, detalle) {
        this.nombre = nombre;
        this.idioma = idioma;
        this.detalle = detalle;
    }
}

function informacion(nombre, idioma, detalle) {
    function F() { };
    F.prototype = prototypeInfoNav;

    var f = new F();

    f.init(nombre, idioma, detalle);
    return f;
}

var infoNav = informacion(navigator.appName, navigator.language, navigator.appVersion);

function escribir(informacion) {
    document.write(informacion);
}