class ConversionMonedas {
    constructor() {
        this.simbolosMoneda = new Map();
        this.simbolosMoneda.set("USD", "$");
        this.simbolosMoneda.set("JPY", "\u00A5");
        this.simbolosMoneda.set("GBP", "\u00A3");
        this.simbolosMoneda.set("CZK", "k\u010D");
        this.simbolosMoneda.set("DKK", "kr");
    }

    cambiar() {
        var moneda = $("#monedas :selected").attr("value");

        $("#otraMoneda").html(this.simbolosMoneda.get(moneda));

        var euros = $("#inputEuro").val();

        this.consultarCambio(moneda, euros);
    }

    consultarCambio(moneda, euros) {
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml",
            type: "get",
            dataType: 'xml',
            data: {},
            crossDomain: true,
            complete: (data) => this.procesarXML(data, moneda, euros)
        }
        );
    }

    procesarXML(data, moneda, euros) {
        var xml = data.responseXML;
        var cambio = $(xml).find("Cube[currency='" + moneda + "']").attr("rate");
        this.hacerConversion(euros, cambio);
    }

    hacerConversion(euros, cambio) {
        var res = euros * cambio;
        $("#inputOtraMoneda").val(res);        
    }
}

var conversor = new ConversionMonedas();

function iniciarPagina() {
    $("#euro").html("\u20AC");
}