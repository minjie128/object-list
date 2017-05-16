"use strict";

var movieData = [];

// Add Movie
$("#addMovie").click(function() {
  displayForm();
});

// Cancel Form
$("#cancelForm").click(function() {
  displayTable();
});

// Submit Form
$("#movie-form").submit(function() {
  event.preventDefault();
  movieData.push({
    title: $("#movieTitle").val(),
    director: $("#movieDirector").val(),
    genre: $("#movieGenre").val(),
    country: $("#movieCountry").val(),
    year: $("#movieYear").val(),
    runtime: $("#movieRuntime").val()
  });
  displayTable();
  displayMovieData();
  $("input, select").val("");
});

function displayMovieData() {
  $("#movie-table-tbody").empty();
  for (var i = 0; i < movieData.length; i++) {
    $("#movie-table-tbody").append("<tr><td>" + movieData[i].title + "</td><td>" + movieData[i].director + "</td><td>" + movieData[i].genre + "</td><td>" + movieData[i].country + "</td><td>" + movieData[i].year + "</td><td>" + movieData[i].runtime + "</td><td><button class='editBtn'>Edit</button>&nbsp;<button class='deleteBtn'>Delete</button></td></tr>");
  }
  // Delete Movie
  $(".deleteBtn").click(function() {
    $(this).parents("tr").remove();
    var deleteId = $(this).parents().siblings(":first").text();
    movieData = movieData.filter(function(el) {
      return el.title !== deleteId;
    });
  });
  // Edit Movie
  $(".editBtn").click(function() {
    var editId = $(this).parents().siblings(":first").text();
    var movieToEdit = $.grep(movieData, function(el) {
      return el.title === editId;
    })[0];
    displayForm();
    $("#movieTitle").val(movieToEdit.title);
    $("#movieDirector").val(movieToEdit.director);
    $("#movieGenre").val(movieToEdit.genre);
    $("#movieCountry").val(movieToEdit.country);
    $("#movieYear").val(movieToEdit.year);
    $("#movieRuntime").val(movieToEdit.runtime);
    movieData = movieData.filter(function(el) {
      return el.title !== editId;
    });
  });
}

// Display Table
function displayTable() {
  $("#movie-form").hide();
  $("#movie-table").show();
}
// Display Form
function displayForm() {
  $("#movie-table").hide();
  $("#movie-form").show();
}
