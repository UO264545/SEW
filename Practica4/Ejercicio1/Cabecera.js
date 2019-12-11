var prototypeInformacion = {
    init: function (asignatura, titulacion, centro, universidad, curso, estudiante, email) {
        this.asignatura = asignatura;
        this.titulacion = titulacion;
        this.centro = centro;
        this.universidad = universidad;
        this.curso = curso;
        this.estudiante = estudiante;
        this.email = email;
    }
}

function informacion(asignatura, titulacion, centro, universidad, curso, estudiante, email) {
    function F() { };
    F.prototype = prototypeInformacion;

    var f = new F();

    f.init(asignatura, titulacion, centro, universidad, curso, estudiante, email);
    return f;
}

var cabecera = informacion("Software y Est\u00E1ndares para la Web", "Ingenier\u00EDa Inform\u00E1tica del Software", "Escuela de Ingenieria Inform\u00E1tica",
    "Universidad de Oviedo", "3\u00B0", "Thal\u00EDa Cuetos Fern\u00E1ndez", "UO264545@uniovi.es");
