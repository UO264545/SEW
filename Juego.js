var iconos = ["javascript", "css", "jquery", "html",
    "w3c", "stackoverflow", "uniovi", "cloud", 
    "helloWorld", "web", "bug", "google",
    "java", "windows", "apple", "commandLine",
    "eclipse", "binario", ];

class Juego {
    constructor(numero) {
        this.numeroIconos = Math.pow(numero / 2, 2);
        this.dificultad = numero / 2;
        this.iniciarJuego();
        this.seleccionado = "";
        this.aciertos = 0;
    }

    iniciarJuego() {
        //Se asocia una celda a cada icono
        //(tantos iconos distintos como dificultad tenga el juego)
        for (var i = 0; i < this.numeroIconos / 2; i++) {
            this.asociarCelda(iconos[i]);
            this.asociarCelda(iconos[i]);
        }
        setTimeout(this.ocultarImagenes , 3000);
    }

    ocultarImagenes() {
        var imagenes = document.getElementsByName("img");
        for (var i = 0; i < imagenes.length; i++)
            imagenes[i].hidden = true;
    }

    asociarCelda(icono) {
        var asociado = false;
        //Se genera una posicion i,j hasta que encuentre una libre
        while (!asociado) {
            var i = Math.trunc(Math.random() * this.dificultad);
            var j = Math.trunc(Math.random() * this.dificultad);
            var boton = document.getElementById(i + "" + j);
            if (boton.getAttribute("asociado") == "false") {
                boton.setAttribute("asociado", icono);
                boton.innerHTML = "<img name='img' src='img/" + icono + ".png' />";
                asociado = true;
            }
        }
    }

    seleccionarBoton(id) {
        id += "";
        if (id.length == 1)
            id = "0" + id;
        var boton = document.getElementById(id);

        boton.getElementsByTagName("img")[0].hidden = false;
        var icono = boton.getAttribute("asociado");

        if (this.seleccionado == icono) {
            this.acertar();
        }
        else if (this.seleccionado == "") {
            this.seleccionado = icono;
        }
        else {
            this.fallar();
            setTimeout(function () {
                juego.ocultarUltimaSeleccion(boton)
            }, 1500);
        }
    }

    ocultarUltimaSeleccion(boton) {
        boton.getElementsByTagName("img")[0].hidden = true;
        var botones = document.getElementsByName("icono");
        for (var i = 0; i < botones.length; i++) {
            if (botones[i].getAttribute("asociado") == this.seleccionado)
                botones[i].getElementsByTagName("img")[0].hidden = true;
        }
        this.seleccionado = "";
    }

    acertar() {
        this.aciertos++;
        var htmlAciertos = document.getElementById("aciertos");
        htmlAciertos.innerHTML = "<p id='aciertos'>Aciertos: " + this.aciertos + "<p>";
        document.getElementById("acierto").innerHTML = "<p>Has acertado!</p>";
        document.getElementById("acierto").innerHTML += htmlAciertos.innerHTML;
        this.seleccionado = "";
        if (this.aciertos == this.numeroIconos / 2)
            document.getElementById("acierto").innerHTML = "Has ganado!";
    }

    fallar() {
        var htmlAciertos = document.getElementById("aciertos");
        htmlAciertos.innerHTML = "<p id='aciertos'>Aciertos: " + this.aciertos + "<p>";
        document.getElementById("acierto").innerHTML = "<p>Has fallado, sigue intentandolo</p>";
        document.getElementById("acierto").innerHTML += htmlAciertos.innerHTML;
    }
}