"use strict"
// Movie list array
let movieList = [
    { 
        title: "Spiderman", 
        reason: "One of my first hero movies that felt relatable", 
        url: "https://m.media-amazon.com/images/I/61-rozyeQQL._AC_UF894,1000_QL80_.jpg" 
    },
    { 
        title: "Transformers", 
        reason: "I just like watching big robots fight with Big Explosions",
        url: "https://m.media-amazon.com/images/I/51m2UmuaxuL._AC_UF894,1000_QL80_.jpg" 
    },
    { 
        title: "Shrek 4", 
        reason: "It was funny while hitting me in the feels", 
        url: "https://idposter.com/img/Movie/S/Shrek_Forever_After_(2010)/id425494.webp" 
    }
];

// Function to display random movie
function displayRandomMovie() {
    let randomIndex = Math.floor(Math.random() * movieList.length);
    let randomMovie = movieList[randomIndex];
    // Display random movie title and image
    $("#randomMovieDisplay").html(`
        <h2>You should watch "${randomMovie.title}"</h2>
        <p>${randomMovie.reason}</p>
        <img src="${randomMovie.url}" alt="${randomMovie.title}" style="max-width: 100%;">
    `);
}

// Function to populate dropdown menu with movie titles
function populateDropdown() {
    let dropdown = $("#movieDropdown");
    dropdown.empty();
    dropdown.append('<option selected disabled>Select a movie</option>');
    $.each(movieList, function(index, movie) {
        dropdown.append(`<option value="${index}">${movie.title}</option>`);
    });
}

// Event listener for random movie button
$("#randomMovieButton").click(function() {
    displayRandomMovie();
});

// Event listener for movie dropdown change
$("#movieDropdown").change(function() {
    let selectedIndex = $(this).val();
    if (selectedIndex !== null) {
        let selectedMovie = movieList[selectedIndex];
        // Display selected movie title and image
        $("#randomMovieDisplay").html(`
            <h2>You selected "${selectedMovie.title}"</h2>
            <p>${selectedMovie.reason}</p>
            <img src="${selectedMovie.url}" alt="${selectedMovie.title}" style="max-width: 100%;">
        `);
    }
});

// Populate dropdown menu on page load
$(document).ready(function() {
    populateDropdown();
});
