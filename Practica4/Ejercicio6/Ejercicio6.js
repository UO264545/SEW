var juego;

function empezar() {
    var numero = obtenerDificultad();
    document.getElementById("sectionDificultad").hidden = true;

    var html = generarTablero(numero);
    document.getElementById("sectionJuego").innerHTML = html;

    juego = new Juego(numero);
}

function obtenerDificultad() {
    var dif;
    var botones = document.getElementsByName("dificultad");
    for (var i = 0; i < botones.length; i++) {
        if (botones[i].checked)
            dif = botones[i].getAttribute("value").valueOf();
    }
    return dif;
}

function generarTablero(n) {
    var html = "<section name='paneles'>";
    for (var i = 0; i < n / 2; i++) {
        html += "<section name='fila'>";
        for (var j = 0; j < n / 2; j++) {
            html += "<button name='icono' id=" + i + j + " asociado='false' onclick='juego.seleccionarBoton("
                + i + j + ")'></button > ";
        }
        html += "</section>";
    }

    html += "</section><section name='resultado'>";

    html += "<section id='acierto'><p id='aciertos'>Aciertos: 0</p></section>";

    html += "<button onclick='empezar()'>Reiniciar</button>";

    html += "<button onclick='cambiarDificultad()'>Cambiar dificultad</button>";

    html += "</section>";

    return html;
}

function cambiarDificultad(){
    document.getElementById("sectionDificultad").hidden = false;
    document.getElementById("sectionJuego").hidden = true;
}