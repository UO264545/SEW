class Pokemon {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

function consultar(url, funcion) {
    $.ajax({
        url: url,
        type: "get",
        dataType: 'json',
        data: {},
        crossDomain: true,
        complete: (data) => funcion(data.responseJSON)
    }
    );
}