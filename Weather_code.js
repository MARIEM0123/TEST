// Getting all the data element
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


// Declaring array for months and days
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Declaring API_KE
const API_KEY ='073f2e23ea0af54688619b3f4bdf3494';

// Function to get weather data and accesss current location of user
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`
    
    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

// Function to have the location
getWeatherData()
function getWeatherData () {
    let latitude = FIXED_LATITUDE;
    let longitude = FIXED_LONGITUDE;
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.weatherapi.com/v1/current.json?key=073f2e23ea0af54688619b3f4bdf3494=MARRAKECH`).then(res => res.json()).then(data => {

        console.log(data)
        displayWeatherData(data);
        showWeatherData(data);
        })

    })
}

// Updating current fore-cast depending of the location

function displayWeatherData(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    console.log(`Weather: ${weatherDescription}, Temperature: ${temperature}°C`);
}

// Get weather data for a specific location (e.g., latitude and longitude of New York City)
    getWeatherData(40.7128, -74.0060);

