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
  console.log(queryURL);
  console.log(response);
});
