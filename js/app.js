

function apiCall() {
    var randomMovieArray = ['Pretty woman', 'Aquaman', 'Deadpool', 'Men in black','Pirates of the caribbean', 'Saw', 'Star Wars', 'Frozen', 'Batman', 'Cars', 'Titanic', 'Rambo', 'Fast and furious', 'Game of Thrones', 'Lord of the rings', 'Harry Potter', 'Guardians of the Galaxy', 'grease'];
var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
var randomMovie = randomMovieArray[randomNumber];
//console.log(randomMovie);
    console.log(randomMovie);

       $.getJSON('https://www.omdbapi.com/?apikey=90359439&s=' + encodeURI(randomMovie))
        .then(function (response) {//callback
        //console.log(response.Search);
        response.Search.forEach(function (movie) {  //response representa la callback despues del .then
            var name = movie.Title;
            var imagen = movie.Poster;
            if(imagen === "N/A"){
                imagen='https://i.gifer.com/COTV.gif'
            }
            $("#peliculas").append(armarTemplate(name, imagen))
           
        })
       
    })
}

var armarTemplate = function (name, imagen) {
    var t = "<div class='card text-white bg-dark'><img class='card-img-top' src='" + imagen + " ' alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + name + "</h5>";
    return t;   
}
 apiCall()

// // //$('.collapse').collapse()

// $(document).ready(function () {
//        $("#search-movie").click(function (event) {
//     console.log("Entro");
//      var movie = $("#text-movie").val();
//     ajaxPeliculas();
//      });
// });

// var showMovies = function (movies) {
//     var name = "";
//     var imagen = "";
//     //var precio = "";


//     omdb.search_movie.forEach(function (movie) {
//         console.log(movie);
//         name = search_movie.title;
//         // imagen = hogar.thumbnail;
//         // precio = hogar.price;
//         $("#elementos").append(armarTemplate(name, imagen, precio))
//     })
// }

// var armarTemplate = function (name, imagen, precio) {
//     var t = "<div class='card' style='width: 15rem;'><img class='card-img-top' src='" + imagen + "alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + name + "</h5><p class='card-text'><i class='fas fa-dollar-sign'></i> " + precio + "</p><a href='#' class='btn btn-primary'>Comprar</a></div></div>";
//     return t;
// }

// var ajaxPeliculas = function () {
//     $.ajax({
//         url: `http://www.omdbapi.com/?apikey=90359439&s=${name}`,
//         type: 'GET',
//         datatype: 'json',
//         //  data:{
//         // // // // : gif,
//         // api_key : '90359439'
//         //  } 
//     })
//         .done(function (response) {
//             console.log(response);
//             showMovies(response);
//         })
//         .fail(function (xhr) {
//             console.log("error");
//         });
// }