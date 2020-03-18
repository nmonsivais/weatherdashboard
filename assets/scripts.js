var APIKey = "cda32d604d850c123a48e324b1c48dbb";
var queryTerm = "";

//create time function from moment.js
function setTime() {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  return time;
}
var example = $("#time").text(setTime);
//3 query URLs (1 for weather, one for UV, and one for forecast)

//need 3 ajax calls (weather, UV, forecast)

//create local storage

function weather(queryTerm) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=Nashville,Tennessee&units=imperial&appid=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var fahrenheit = response.main.temp;
    var city = response.name;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;

    document.getElementById("cont1");
    $(".city").text("City: " + city);
    $(".wind").text("Wind: " + wind);
    $(".humidity").text("Humidity: " + humidity);
    $(".temp").text("Temperature: " + fahrenheit);
  });
}

//   console.log(queryURL);
//   console.log(response);
//   console.log(response.name);
//   console.log(kelvinTemp);
//   console.log("The temperature in Fahrenheit is " + fahrenheit);
//   console.log(response.main.humidity);
//   console.log(response.wind.speed);
