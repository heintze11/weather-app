// create search button for cities
// use api key to pull weather data for specific city
// store searched city in local storage
// post current weather into upper div
// post 5 day forecast into cards 
// save searched city as a button for easy access
// store searched cities
// store weather data in local storage...? 
// how to update if it is searched for later...?


// var city = "denver";
// const apiKey = "1e64d4984f9bd49dd45881e4e3f332ca";
var search = document.querySelector("#search");


function addWeather(event) {
    event.preventDefault()
    var city = document.querySelector("#city-search").value;
    localStorage.setItem("city", event.target.previousElementSibling.value);
    var apiCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=1e64d4984f9bd49dd45881e4e3f332ca";
    var apiFive = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5&appid=1e64d4984f9bd49dd45881e4e3f332ca";
    fetch(apiCurrent)
    .then((response) => response.json())
    .then((data) => console.log(data))

    // fetch(apiFive)
    // .then((response) => response.json())
    // .then((data) => console.log(data))
}

search.addEventListener("click", addWeather);