var maxLineas = 5;

class Pila {
    constructor() {
        this.size = 0;
        this.data = {};
    }

    push(dato) {
        this.data[this.size] = dato;
        this.size++;
    }

    pop() {
        if (this.size == 0)
            return "0";
        return this.data[--this.size];
    }

    get(i) {
        return this.data[i];
    }

    getSize() {
        return this.size;
    }

    borrar() {
        this.data = {};
        this.size = 0;
    }
}

class CalculadoraRPN {
    constructor() {
        this.pila = new Pila();
        this.numeroActual = "";
        this.darEnter = false;
    }

    escribirPila() {
        var string = "";

        for (var i = maxLineas; i > 0 ; i--) {
            if (this.pila.size >= i) 
                string += this.pila.get(this.pila.size - i);
            string += "\r\n";
        }

        string += this.numeroActual;
        document.getElementById("text").value = string;
    }

    escribirNumero(numero) {
        if (this.darEnter) {
            this.enter();
            this.darEnter = false;
        }
        if (this.numeroActual == "0")
            this.numeroActual = numero + "";
        else
            this.numeroActual += numero;
        this.escribirPila();
    }

    enter() {
        this.pila.push(this.numeroActual);
        this.numeroActual = "0";
        this.escribirPila();
    }

    operacionDosDigitos(operacion) {
        var num2 = this.pila.pop();
        var op = num2 + operacion + this.numeroActual;
        var res = eval(op);
        this.numeroActual = res + "";
        this.escribirPila();
        this.darEnter = true;
    }

    operacionUnDigito(operacion) {
        var res = eval(operacion + this.numeroActual + ")");
        this.numeroActual = res + "";
        this.escribirPila();
        this.darEnter = true;
    }

    elevarAlCuadrado() {
        var res = Math.pow(this.numeroActual, 2);
        this.numeroActual = res + "";
        this.escribirPila();
        this.darEnter = true;
    }

    borrarLinea() {
        this.numeroActual = this.numeroActual.substring(0, this.numeroActual.length - 1);
        this.escribirPila();
    }

    borrarPila() {
        this.pila.borrar();
        this.numeroActual = "0";
        this.escribirPila();
    }

    pop() {
        this.numeroActual = this.pila.pop();
        this.escribirPila();
    }

    swap() {
        var numero = this.pila.pop();
        this.pila.push(this.numeroActual);
        this.numeroActual = numero;
        this.escribirPila();
    }
}

var calc = new CalculadoraRPN();