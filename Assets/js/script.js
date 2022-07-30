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
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let humid = document.querySelector("#humidity");
let uvIndex = document.querySelector("#uv-index");
let currentCity = document.querySelector("#current-city");
let currentIcon = document.querySelector("#current-icon");
let city;
let cityArray = [];
let today = moment().format('MM/DD/YYYY');
let dateOne = document.querySelector("#date-one");
let iconOne = document.querySelector("#icon-one");
let tempOne = document.querySelector("#temp-one");
let windOne = document.querySelector("#wind-one");
let humidityOne = document.querySelector("#humidity-one");
let dateTwo = document.querySelector("#date-two");
let iconTwo = document.querySelector("#icon-two");
let tempTwo = document.querySelector("#temp-two");
let windTwo = document.querySelector("#wind-two");
let humidityTwo = document.querySelector("#humidity-two");
let dateThree = document.querySelector("#date-three");
let iconThree = document.querySelector("#icon-three");
let tempThree = document.querySelector("#temp-three");
let windThree = document.querySelector("#wind-three");
let humidityThree = document.querySelector("#humidity-three");
let dateFour = document.querySelector("#date-four");
let iconFour = document.querySelector("#icon-four");
let tempFour = document.querySelector("#temp-four");
let windFour = document.querySelector("#wind-four");
let humidityFour = document.querySelector("#humidity-four");
let dateFive = document.querySelector("#date-five");
let iconFive = document.querySelector("#icon-five");
let tempFive = document.querySelector("#temp-five");
let windFive = document.querySelector("#wind-five");
let humidityFive = document.querySelector("#humidity-five");
let previousCityButtons = document.querySelector("#previous-cities");
let previousButtons = document.querySelector(".btn-block");



function getData(event) {


    storeData();
    

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
        .then(function (data) {
            //use lat and long to pull weather
            lat = data[0].lat;
            lon = data[0].lon;
            let apiCurrent = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=1e64d4984f9bd49dd45881e4e3f332ca";

            fetch(apiCurrent)
                .then((response) => response.json())
                .then(function (data) {
                    //set all data from weather
                    postData(data);
                    return (data);
                });

        });

}

//create function to pull specific data from fetch data and post to page
function postData(data) {
    console.log(data);
    let currentTemp = data.current.temp;
    let currentWind = data.current.wind_speed;
    let currentHumid = data.current.humidity;
    let currentUv = data.current.uvi;
    let weathIcon = data.current.weather[0].icon;
    let weathIconLink = "http://openweathermap.org/img/w/" + weathIcon + ".png";
    let cityUpper = city.toUpperCase();
    currentCity.textContent += " " + cityUpper + " " + today;
    currentIcon.src = weathIconLink;
    currentIcon.setAttribute("style", "display: inline");
    temp.textContent = "Temp: " + currentTemp + "°F";
    wind.textContent = "Wind: " + currentWind + " MPH"
    humid.textContent = "Humidity: " + currentHumid + "%";
    uvIndex.textContent = "UV Index: " + currentUv;
    if(currentUv < 2){
        uvIndex.setAttribute("style", "background-color: green")
    } else if(currentUv < 6){
        uvIndex.setAttribute("style", "background-color: yellow")
    }else{
        uvIndex.setAttribute("style", "background-color: red")
    }

    // post 5-Day Forecast
    let day1Temp = data.daily[1].temp.max;
    let day1Wind = data.daily[1].wind_speed;
    let day1Humid = data.daily[1].humidity;
    let day1WeathIcon = data.daily[1].weather[0].icon;
    let day1WeathIconLink = "http://openweathermap.org/img/w/" + day1WeathIcon + ".png";
    dateOne.textContent = moment().add(1,'days').format('MM/DD/YYYY');
    tempOne.textContent = "Temp: " + day1Temp + "°F";
    windOne.textContent = "Wind: " + day1Wind + " MPH";
    humidityOne.textContent = "Humidity: " + day1Humid + "%";
    iconOne.src = day1WeathIconLink;
    iconOne.setAttribute("style", "display: inline");

    let day2Temp = data.daily[2].temp.max;
    let day2Wind = data.daily[2].wind_speed;
    let day2Humid = data.daily[2].humidity;
    let day2WeathIcon = data.daily[2].weather[0].icon;
    let day2WeathIconLink = "http://openweathermap.org/img/w/" + day2WeathIcon + ".png";
    dateTwo.textContent = moment().add(2,'days').format('MM/DD/YYYY');
    tempTwo.textContent = "Temp: " + day2Temp + "°F";
    windTwo.textContent = "Wind: " + day2Wind + " MPH";
    humidityTwo.textContent = "Humidity: " + day2Humid + "%";
    iconTwo.src = day2WeathIconLink;
    iconTwo.setAttribute("style", "display: inline");

    let day3Temp = data.daily[3].temp.max;
    let day3Wind = data.daily[3].wind_speed;
    let day3Humid = data.daily[3].humidity;
    let day3WeathIcon = data.daily[3].weather[0].icon;
    let day3WeathIconLink = "http://openweathermap.org/img/w/" + day3WeathIcon + ".png";
    dateThree.textContent = moment().add(3,'days').format('MM/DD/YYYY');
    tempThree.textContent = "Temp: " + day3Temp + "°F";
    windThree.textContent = "Wind: " + day3Wind + " MPH";
    humidityThree.textContent = "Humidity: " + day3Humid + "%";
    iconThree.src = day3WeathIconLink;
    iconThree.setAttribute("style", "display: inline");

    let day4Temp = data.daily[4].temp.max;
    let day4Wind = data.daily[4].wind_speed;
    let day4Humid = data.daily[4].humidity;
    let day4WeathIcon = data.daily[4].weather[0].icon;
    let day4WeathIconLink = "http://openweathermap.org/img/w/" + day4WeathIcon + ".png";
    dateFour.textContent = moment().add(4,'days').format('MM/DD/YYYY');
    tempFour.textContent = "Temp: " + day4Temp + "°F";
    windFour.textContent = "Wind: " + day4Wind + " MPH";
    humidityFour.textContent = "Humidity: " + day4Humid + "%";
    iconFour.src = day4WeathIconLink;
    iconFour.setAttribute("style", "display: inline");
    
    let day5Temp = data.daily[5].temp.max;
    let day5Wind = data.daily[5].wind_speed;
    let day5Humid = data.daily[5].humidity;
    let day5WeathIcon = data.daily[5].weather[0].icon;
    let day5WeathIconLink = "http://openweathermap.org/img/w/" + day5WeathIcon + ".png";
    dateFive.textContent = moment().add(5,'days').format('MM/DD/YYYY');
    tempFive.textContent = "Temp: " + day5Temp + "°F";
    windFive.textContent = "Wind: " + day5Wind + " MPH";
    humidityFive.textContent = "Humidity: " + day5Humid + "%";
    iconFive.src = day5WeathIconLink;
    iconFive.setAttribute("style", "display: inline");

};

function getOldItem(){

}

function storeData(){
    // store city data in local storage as array
    // append to array new city to start
    // cap array at 10 cities
    let previousCities = JSON.parse(localStorage.getItem("cities"));
    if (previousCities == null){
        cityArray.push(city);

    } else {
    cityArray = previousCities;
    cityArray.unshift(city);
    }
    
    cityArray.splice(10);
    
    localStorage.setItem("cities", JSON.stringify(cityArray));

    cityArray = [];
    preCities();
}

function preCities(){
    // Delete the previous city buttons
    previousCityButtons.innerHTML = "";
    // post previous cities to div under search


    let preCity = JSON.parse(localStorage.getItem("cities"));
    if(preCity != null){
    for (let i = 0; i < preCity.length; i++) {
        let button = document.createElement("button");
        button.innerHTML = preCity[i];
        button.classList.add("btn", "btn-info", "btn-lg", "btn-block");
        previousCityButtons.appendChild(button);
    }}


}

preCities();

// add event listener to main search button
search.addEventListener("click", function(event){
    event.preventDefault()
    city = document.querySelector("#city-search").value;
    getData();
});

// Add event listener to previous search items

previousCityButtons.addEventListener("click", function(event){
    city = event.target.innerText;
    console.log(event);
    getData();
});