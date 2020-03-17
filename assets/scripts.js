var APIKey = "cda32d604d850c123a48e324b1c48dbb";
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Nashville,Tennessee&appid=" +
  APIKey;
var object =
  "https://api.openweathermap.org/data/2.5/weather?q=Nashville,Tennessee&appid=cda32d604d850c123a48e324b1c48dbb";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var kelvinTemp = response.main.temp;
  var fahrenheit = (kelvinTemp - 273.15) * 1.8;

  console.log(queryURL);
  console.log(response);
  console.log(response.name);
  console.log(kelvinTemp);
  console.log("The temperature in Fahrenheit is " + fahrenheit);
  console.log(response.main.humidity);
  console.log(response.wind.speed);
});
