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

var cabecera = informacion("Software y Estandares para la Web", "Ingenieria Informatica del Software", "Escuela de Ingenieria Informatica",
    "Universidad de Oviedo", "3\u00BA", "Thalia Cuetos Fernandez", "UO264545@uniovi.es");
