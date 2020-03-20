//Global Variables
var todaysDate = $("#time").text(setTime);
var APIKey = "cda32d604d850c123a48e324b1c48dbb";
var emptyCityArray = [];
// var queryCity = "";

//create time function from moment.js
function setTime() {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  return time;
}

init();

//3 query URLs (1 for weather, one for UV, and one for forecast)

//need 3 ajax calls (weather, UV, forecast)

//create local storage

// query for weather

//Functions
function weather(queryCity) {
  $("#forecast").empty();
  var queryURLweather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    queryCity +
    "&units=imperial&appid=" +
    APIKey;
  console.log(queryURLweather);

  $.ajax({
    url: queryURLweather,
    method: "GET"
  }).then(function(response) {
    var fahrenheit = response.main.temp;
    var city = response.name;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;
    var todaysDate = $("#time").text(setTime);
    var information = $("#city").text("City: " + city);
    $("#wind").text("Wind: " + wind);
    $("#humidity").text("Humidity: " + humidity);
    $("#temp").text("Temperature: " + fahrenheit);
    // $("#date").text("Date: " + todaysDate);
    $("#weatherBox").append(information);
  });

  var queryURLforecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    queryCity +
    "&units=imperial&appid=" +
    APIKey;

  $.ajax({
    url: queryURLforecast,
    method: "GET"
  }).then(function(response) {
    var newDiv = $("<div>");
    for (var i = 0; i < 5; i++) {
      var card = $("<div class= 'card-group'>");
      var cityName = $("<div>").text(response.city.name);
      var mainTemp = $("<div>").text(response.list[i].main.temp);
      var mainHumidity = $("<div>").text(response.list[i].main.humidity);

      card.append("City: ", cityName);
      card.append("Temperature: ", mainTemp);
      card.append("Humidity: ", mainHumidity);
      newDiv.append(card);
    }
    $("#forecast").append(newDiv);
  });

  console.log(queryURLforecast);
}
console.log(weather);

$("#btn1").on("click", function(e) {
  /// event listener
  console.log("youclickme");
  e.preventDefault();

  var newDiv = $("<div>");
  //This var is what the user is typing.
  var userCity = $("#userInput")
    .val()
    .trim();
  newDiv.text(userCity);
  emptyCityArray.push(userCity);

  localStorage.setItem("citynames", JSON.stringify(emptyCityArray));
  // update page to have the new city that was added
  renderCities();

  weather(userCity);
  //This clears what the user already typed.
  $("#userInput").val("");
});
//This onClick event listener allows me to retrieve the information for each city.
$(document).on("click", ".classCity", function(e) {
  e.preventDefault();
  var cityName = $(this).attr("data-city");
  weather(cityName);

  console.log("ClassCity button is working");
});
/// make a function to retrieving items in localstorage aka jar
// This function needs to run prior to the button click.
function init() {
  var storedCities = JSON.parse(localStorage.getItem("citynames"));
  if (storedCities !== null) {
    // if stored Cities is not empty
    emptyCityArray = storedCities; // update emptyCityArray to storedCities
  }

  // call function that renders city names on the page
  renderCities();

  console.log("Values in the jar ");
  console.log(emptyCityArray);
}
//Function below allows cities to appear as buttons.
function renderCities() {
  ///loop thru emptyCityArray
  $("#cityList").empty();
  for (var i = 0; i < emptyCityArray.length; i++) {
    var city = emptyCityArray[i];
    console.log(city);

    var dynBtns = $("<button>");
    dynBtns.text(city);
    dynBtns.attr("data-city", city);
    dynBtns.attr("class", "classCity");
    $("#cityList").append(dynBtns);
  }
  // for every city  we create an element
  // place that element on the page
}

/// make another function to write to local storage

//local storage code
// var cityList = $("#cityList");
// var cityNames = localStorage.getItem("cityNames");

// cityList.html(cityNames);

//   console.log(queryURL);
//   console.log(response);
//   console.log(response.name);
//   console.log(kelvinTemp);
//   console.log("The temperature in Fahrenheit is " + fahrenheit);
//   console.log(response.main.humidity);
//   console.log(response.wind.speed);
