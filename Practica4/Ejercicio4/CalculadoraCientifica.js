class CalculadoraCientifica extends CalculadoraBasica {
    constructor() {
        super();
        this.numeroActual = "";
        this.cerrarParentesis = false;
        this.radianes = false;
    }

    anadirNumero(numero) {
        this.numeroActual += numero;
        document.getElementById("text2").value = this.numeroActual;
    }

    anadirOperacion(operacion) {
        if (this.numeroActual != "") {
            if (this.cerrarParentesis) {
                this.operacionTotal += this.numeroActual + ")";
                this.cerrarParentesis = false;
            }
            else
                super.anadirNumero(this.numeroActual);
            this.numeroActual = "";
        }
        super.anadirOperacion(operacion);
    }

    borrarMemoria() {
        super.numeroGuardado = 0;
    }

    guardarMemoria() {
        this.numeroGuardado = 0;
        super.sumarNumeroMemoria();
    }

    elevarAlCuadrado() {
        this.operacionAMostrar += this.numeroActual + "^2";
        super.actualizarInput();
        var res = Math.pow(this.numeroActual, 2);
        this.numeroActual = "";
        this.anadirNumero(res);
        this.numeroActual = "";
    }

    elevarAX() {
        this.operacionTotal += "Math.pow(" + this.numeroActual + ",";
        this.operacionAMostrar += this.numeroActual + "^";
        super.actualizarInput();
        this.numeroActual = "";
        this.cerrarParentesis = true;
    }

    realizarOperacion() {
        super.anadirNumero(this.numeroActual);
        if (this.cerrarParentesis) {
            this.operacionTotal += ")";
            this.cerrarParentesis = false;
        }
        this.numeroActual = eval(this.operacionTotal) + "";
        this.operacionTotal = "";
        this.operacionAMostrar += " =";
        super.actualizarInput();
        this.operacionAMostrar = "";
        document.getElementById("text2").value = this.numeroActual;
    }

    seno() {
        this.operacionAMostrar += "sin(" + this.numeroActual + ")";
        this.operacionTotal += "Math.sin(" + this.numeroActual + ")";
        if (!this.radianes)
            this.numeroActual = this.numeroActual * Math.PI / 180.0;
        var res = Math.sin(this.numeroActual);
        this.numeroActual = "";
        this.anadirNumero(res);
        super.actualizarInput();
        this.numeroActual = "";
    }

    coseno() {
        this.operacionAMostrar += "cos(" + this.numeroActual + ")";
        this.operacionTotal += "Math.cos(" + this.numeroActual + ")";
        if (!this.radianes)
            this.numeroActual = this.numeroActual * Math.PI / 180.0;
        var res = Math.cos(this.numeroActual);
        this.numeroActual = "";
        this.anadirNumero(res);
        super.actualizarInput();
        this.numeroActual = "";
    }

    tangente() {
        this.operacionAMostrar += "tan(" + this.numeroActual + ")";
        this.operacionTotal += "Math.tan(" + this.numeroActual + ")";
        if (!this.radianes)
            this.numeroActual = this.numeroActual * Math.PI / 180.0;
        var res = Math.tan(this.numeroActual);
        this.numeroActual = "";
        this.anadirNumero(res);
        super.actualizarInput();
        this.numeroActual = "";
    }

    raizCuadrada() {
        this.operacionAMostrar += "sqrt(" + this.numeroActual + ")";
        this.operacionTotal += "Math.sqrt(" + this.numeroActual + ")";
        var res = Math.sqrt(this.numeroActual);
        this.numeroActual = "";
        this.anadirNumero(res);
        super.actualizarInput();
        this.numeroActual = "";
    }

    elevar10A() {
        this.operacionAMostrar += "10^(" + this.numeroActual + ")";
        this.operacionTotal += "Math.pow(10," + this.numeroActual + ")";
        var res = Math.pow(10, this.numeroActual);
        this.numeroActual = "";
        this.anadirNumero(res);
        super.actualizarInput();
        this.numeroActual = "";
    }

    logaritmo() {
        this.operacionAMostrar += "log(" + this.numeroActual + ")";
        this.operacionTotal += "Math.pow(10," + this.numeroActual + ")";
        var res = Math.log(this.numeroActual);
        this.numeroActual = "";
        this.anadirNumero(res);
        super.actualizarInput();
        this.numeroActual = "";
    }

    exp() {
        this.cerrarParentesis = true;
        this.operacionAMostrar += this.numeroActual + ",e+";
        this.operacionTotal += this.numeroActual + "*Math.pow(10,";
        super.actualizarInput();
        this.numeroActual = "";
    }

    borrarNumActual() {
        this.numeroActual = "";
        document.getElementById("text2").value = 0;
    }

    resetear() {
        this.borrarNumActual();
        super.resetear();
    }

    borrar() {
        this.numeroActual = this.numeroActual.substring(0, this.numeroActual.length - 1);
        document.getElementById("text2").value = this.numeroActual;
    }

    pi() {
        this.operacionAMostrar += "π";
        this.operacionTotal += "Math.PI";
        super.actualizarInput();
        this.ultimoCaracterOperacion = false;
    }

    fact() {
        this.operacionAMostrar += "fact(" + this.numeroActual + ")";
        var res = 1;

        for (var i = 1; i <= this.numeroActual; i++)
          res *= i;


        this.operacionTotal += res;
        this.numeroActual = "";
        this.anadirNumero(res);
        super.actualizarInput();
        this.numeroActual = "";
    }

    cambiarSigno() {
        this.numeroActual *= (-1);
        document.getElementById("text2").value = this.numeroActual;
    }

    deg() {
        this.radianes = !this.radianes;
        document.getElementById("deg").innerHTML = this.radianes ? "RAD" : "DEG";
    }
}

var calculadora = new CalculadoraCientifica();