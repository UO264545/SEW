class CalculadoraBasica {
    constructor() {
        this.ultimoCaracterOperacion = false;
        this.operacionTotal = "";
        this.numeroGuardado = 0;
        this.operacionAMostrar = "";
    }

    actualizarInput() {
        document.getElementById("text").value = this.operacionAMostrar;
    }

    anadirNumero(operacion) {
        this.ultimoCaracterOperacion = false;
        this.operacionTotal += operacion;
        this.operacionAMostrar += operacion;
        this.actualizarInput();
    }

    anadirOperacion(operacion) {
        if (this.ultimoCaracterOperacion) {
            this.operacionTotal = this.operacionTotal.substring(0, this.operacionTotal.length - 1);
            this.operacionAMostrar = this.operacionTotal;
        }
        this.ultimoCaracterOperacion = true;
        this.operacionTotal += operacion;
        this.operacionAMostrar += operacion;
        this.actualizarInput();
    }

    realizarOperacion() {
        this.operacionTotal = eval(this.operacionTotal);
        this.operacionAMostrar = this.operacionTotal + "";
        this.actualizarInput();
        this.operacionAMostrar = "";
    }

    resetear() {
        this.operacionTotal = "";
        this.operacionAMostrar = "";
        this.actualizarInput();
    }

    sumarNumeroMemoria() {
        numeroGuardado += eval(this.operacionTotal);
    }

    restarNumeroMemoria() {
        numeroGuardado -= eval(this.operacionTotal);
    }

    recuperarMemoria() {
        this.operacionTotal = numeroGuardado;
        this.actualizarInput();
    }
}

var calculadora = new CalculadoraBasica();