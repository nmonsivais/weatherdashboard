var todaysDate = $("#time").text(setTime);
var APIKey = "cda32d604d850c123a48e324b1c48dbb";
var queryCity = "";

//create time function from moment.js
function setTime() {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  return time;
}
//3 query URLs (1 for weather, one for UV, and one for forecast)

//need 3 ajax calls (weather, UV, forecast)

//create local storage

// query for weather
function weather(queryCity) {
  var queryURLweather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    queryCity +
    "&units=imperial&appid=" +
    APIKey;
  console.log(queryURLweather);

  var queryURLforecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    queryCity +
    "&units=imperial&appid=" +
    APIKey;

  console.log(queryURLforecast);

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
}
console.log(weather);

$("#btn1").on("click", function(e) {
  console.log("youclickme");
  e.preventDefault();

  var newDiv = $("<div>");
  var userCity = $("#userInput")
    .val()
    .trim();
  newDiv.text(userCity);

  weather(userCity);

  $("#userInput").val("");
});

//   console.log(queryURL);
//   console.log(response);
//   console.log(response.name);
//   console.log(kelvinTemp);
//   console.log("The temperature in Fahrenheit is " + fahrenheit);
//   console.log(response.main.humidity);
//   console.log(response.wind.speed);
