// create search button for cities
// use api key to pull weather data for specific city
// store searched city in local storage
// post current weather into upper div
// post 5 day forecast into cards 
// save searched city as a button for easy access
// store searched cities
// store weather data in local storage...? 
// how to update if it is searched for later...?

//Add Dates
//hide icon i

// const apiKey = "1e64d4984f9bd49dd45881e4e3f332ca";
let search = document.querySelector("#search");
let currentWeatherCard = document.querySelector("#current-weather-card");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let humid = document.querySelector("#humidity");
let uvIndex = document.querySelector("#uv-index");
let currentCity = document.querySelector("#current-city");
let currentIcon = document.querySelector("#current-icon");
let city;

function getData(event) {
    event.preventDefault()
    city = document.querySelector("#city-search").value;
    localStorage.setItem("city", event.target.previousElementSibling.value);

    //get lat and long
    let location = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=1e64d4984f9bd49dd45881e4e3f332ca";
    let lat;
    let lon;
    //clear text content for new search
    currentCity.textContent = "";
    currentIcon.textContent = "";
    temp.textContent = "";
    wind.textContent = "";
    humid.textContent = "";
    uvIndex.textContent = "";

    fetch(location)
    .then((response) => response.json())
    .then(function (data){
        //use lat and long to pull weather
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        let apiCurrent = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=1e64d4984f9bd49dd45881e4e3f332ca";

        fetch(apiCurrent)
        .then((response) => response.json())
        .then(function(data){
            //set all data from weather
            postData(data);
            return(data);
            
            
        });
    
    });
    
}

function postData (data){
    console.log(data);
    let currentTemp = data.current.temp;
    console.log(currentTemp);
    let currentWind = data.current.wind_speed;
    let currentHumid = data.current.humidity;
    let currentUv = data.current.uvi;
    let weathIcon = data.current.weather[0].icon;
    let weathIconLink = "http://openweathermap.org/img/w/" + weathIcon + ".png";
    let cityUpper = city.toUpperCase();
    currentCity.textContent += " " + cityUpper;
    currentIcon.src = weathIconLink;
    currentIcon.setAttribute("style", "display: inline");
    temp.textContent = "Temp: " + currentTemp + "° F";
    wind.textContent = "Wind: " + currentWind + " MPH"
    humid.textContent = "Humidity: " + currentHumid + "%";
    uvIndex.textContent = "UV Index: " + currentUv;
};

search.addEventListener("click", getData);

