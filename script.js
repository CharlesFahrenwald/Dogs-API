'use strict';

function getDogImage(numInput) {
  if (numInput <= 1) {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
     .catch(error => ("Please Try Again"));
  }  else if (numInput > 50){ 
    return alert ("Please choose a vaild number");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then (responseJson => displayDogs(responseJson))
      .catch(error => alert("Please Try Again"));
  }
}

/*function buttonReturn(){
  $("#button").on(click)
  fetch('https://dog.ceo/api/breeds/image/random/3')
  .then(response => response.json())
  .then (responseJson => displayDogs(responseJson));
}*/


function watchForm(){
  $("#dog-num-form").submit(event => {
    event.preventDefault();
    let userInput = $("#num-dog").val();
    getDogImage(userInput);
  });
}

function displayDogs(responseJson) {
  console.log(responseJson);
  //$(".results").html("");
  $("#resultFrame").html("");
  responseJson.message.forEach(renderedImg => {
    //$(".results").append(`<img src="${renderedImg}" class = "results">`);
    $("#resultFrame").append(`<img src="${renderedImg}" class = "resultItem">`);

  });
  $(".results").removeClass("hidden");
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

