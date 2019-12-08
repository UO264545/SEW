class Buscador {
    constructor() {
    }

    buscar() {
        var nombre = $("#inputBusqueda").val();
        if (this.pokemon != undefined && this.pokemon.diferenciasDeGenero)
         $("th").each(function () { $(this).attr("colspan", $(this).attr("colspan") / 2) });

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + nombre.toLowerCase(),
            type: "get",
            dataType: 'json',
            data: {},
            crossDomain: true,
            complete: (data) => this.crearPokemon(data),
            error: () => this.mostrarError(),
            
        }
        );
    }

    crearPokemon(data) {
        var json = data.responseJSON;
        this.pokemon = new Pokemon(json.name);

        this.pokemon.tipos = [];
        var tipos = json.types;
        for (var i = 0; i < tipos.length; i++) 
            this.pokemon.tipos[i] = tipos[i].type.name;        

        this.pokemon.habilidades = [];
        var habs = json.abilities;
        for (var i = 0; i < habs.length; i++)
            this.pokemon.habilidades[i] = habs[i].ability.name;  

        this.pokemon.altura = json.height / 10;
        this.pokemon.peso = json.weight / 10;

        var sprites = json.sprites;

        consultar(json.species.url, (json) => {
            this.pokemon.pokedex = $.grep(json.pokedex_numbers, (element) => element.pokedex.name == "national")[0].entry_number;
            this.pokemon.ratio = json.capture_rate;
            this.pokemon.female = json.gender_rate / 8 * 100;
            this.pokemon.diferenciasDeGenero = json.has_gender_differences;
            this.pokemon.diferentesFormas = json.forms_switchable;
            this.cadenaEvolutiva = json.evolution_chain;

            this.mostrarDatos();

            this.pokemon.spriteFrontDefault = sprites.front_default;
            this.pokemon.spriteBackDefault = sprites.back_default;
            this.pokemon.shinyFrontDefault = sprites.front_shiny;
            this.pokemon.shinyBackDefault = sprites.back_shiny;
            if (this.pokemon.diferenciasDeGenero) {
                this.pokemon.spriteFrontFemale = sprites.front_female;
                this.pokemon.spriteBackFemale = sprites.back_female;
                this.pokemon.shinyFrontFemale = sprites.front_shiny_female;
                this.pokemon.shinyBackFemale = sprites.back_shiny_female;
            }

            this.mostrarSprites();
        });     

    }

    mostrarDatos() {
        $("#nombrePokemon").html(this.pokemon.nombre);

        $("#pokedex").html(this.pokemon.pokedex);

        $("#altura").html(this.pokemon.altura + " m");

        $("#peso").html(this.pokemon.peso + " kg");

        $("#ratio").html(this.pokemon.ratio);
        if (this.pokemon.female == -1)
            $("#genero").html("Sin genero");
        else
           $("#genero").html(this.pokemon.female + "% \u2640\n" + (100 - this.pokemon.female) + "% \u2642");

        var tipos = "";
        for (var i = 0; i < this.pokemon.tipos.length; i++)
            tipos += this.pokemon.tipos[i] + ",\t";
        $("#tipos").html(tipos.substring(0, tipos.length - 2));

        var habs = "";
        for (var i = 0; i < this.pokemon.habilidades.length; i++)
            habs += this.pokemon.habilidades[i] + ",\t";
        $("#habilidades").html(habs.substring(0, habs.length - 2));

        $("#datos").show();
    }

    mostrarSprites() {
        $("#imagenDatos").attr({ "src": this.pokemon.spriteFrontDefault});

        $("#imagenMachoFront").attr("src", this.pokemon.spriteFrontDefault);
        $("#imagenMachoBack").attr("src", this.pokemon.spriteBackDefault);
        $("#imagenMachoFrontShiny").attr("src", this.pokemon.shinyFrontDefault);
        $("#imagenMachoBackShiny").attr("src", this.pokemon.shinyBackDefault);

        if (this.pokemon.diferenciasDeGenero) {
            $("th").each(function () { $(this).attr("colspan", $(this).attr("colspan") * 2) });
            $(".DiferenciaGenero").each(function () { $(this).show(); } );

            $("#imagenHembraFront").attr("src", this.pokemon.spriteFrontFemale);
            $("#imagenHembraBack").attr("src", this.pokemon.spriteBackFemale);
            $("#imagenHembraFrontShiny").attr("src", this.pokemon.shinyFrontFemale);
            $("#imagenHembraBackShiny").attr("src", this.pokemon.shinyBackFemale);
        }
        else {
            $(".DiferenciaGenero").each(function () { $(this).hide(); });
        }

        $(".sprites").each( function() { $(this).show(); } );
    }

    mostrarError() {
        $("#nombrePokemon").html("Ups! No hemos encontrado el pokemon que buscas.");
        $("#imagenDatos").attr("src", "img/missingno.png");

        this.pokemon = undefined;
        $(".sprites").each(function () { $(this).hide(); });
        $("#datos").hide();
    }
}

var buscador = new Buscador();