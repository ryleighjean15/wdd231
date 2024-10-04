const myTown = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#description');
const weatherIcon = document.querySelector('#weather-icon');
const forecastList = document.querySelector('#three-day-forecast');

// Your API key, latitude, and longitude for Lakeside, AZ
const myKey = "0a980d90572da9d3e9e5773ef08bd0fa";
const myLat = "34.142067";
const myLong = "109.961329";

// Current weather URL
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// 3-Day Forecast URL
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        // Fetch current weather data
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }

        // Fetch 3-day forecast data
        const forecastResponse = await fetch(forecastURL);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.textContent = data.main.temp; // Set current temperature
    captionDesc.textContent = data.weather[0].description; // Set weather description
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Set weather icon
}

function displayForecast(forecastData) {
    forecastList.innerHTML = ''; // Clear any previous forecasts

    // Loop through the forecast data and display the next three days
    const days = {}; // To keep track of temperatures for the next three days
    let count = 0; // Counter for days
    for (let i = 0; i < forecastData.list.length && count < 3; i++) {
        const date = new Date(forecastData.list[i].dt * 1000); // Convert UNIX timestamp to JS date
        const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get day name

        // Only grab one reading per day
        if (!days[date.getDate()]) {
            days[date.getDate()] = forecastData.list[i]; // Store the first reading of the day
            count++;
        }
    }

    // Loop through the stored days and create list items
    for (const day in days) {
        const temp = days[day].main.temp;
        const weatherDescription = days[day].weather[0].description;
        const icon = days[day].weather[0].icon;

        const li = document.createElement('li');
        li.innerHTML = `${day}: ${temp}°F, ${weatherDescription} <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">`;
        forecastList.appendChild(li);
    }
}

// Call the function when the page loads
apiFetch();
