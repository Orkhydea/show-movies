//$('.collapse').collapse()

$(document).ready(function () {
    //   $("#buscar-productos").click(function (event) {
    console.log("Entro");
    // var hogar = $("#poke-text").val();
    ajaxPeliculas();
    //   });
});

// var showHogar = function (hogares) {
//     var name = "";
//     var imagen = "";
//     var precio = "";


//     hogares.results.forEach(function (hogar) {
//         console.log(hogar);
//         name = hogar.title;
//         imagen = hogar.thumbnail;
//         precio = hogar.price;
//         $("#elementos").append(armarTemplate(name, imagen, precio))
//     })
// }

// var armarTemplate = function (name, imagen, precio) {
//     var t = "<div class='card' style='width: 15rem;'><img class='card-img-top' src='" + imagen + "alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + name + "</h5><p class='card-text'><i class='fas fa-dollar-sign'></i> " + precio + "</p><a href='#' class='btn btn-primary'>Comprar</a></div></div>";
//     return t;
// }

var ajaxPeliculas = function () {
    $.ajax({
        url: `http://www.omdbapi.com/search?apikey=90359439&`,
        type: 'GET',
        datatype: 'json',
         data:{
        // // // : gif,
        api_key : '90359439'
         } 
    })
        .done(function (response) {
            console.log(response);
            showPeliculas(response);
        })
        .fail(function (xhr) {
            console.log("error");
        });
}