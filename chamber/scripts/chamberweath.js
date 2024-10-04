const myTown = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#description');
const weatherIcon = document.querySelector('#weather-icon');


const myKey = "0a980d90572da9d3e9e5773ef08bd0fa"
const myLat = "34.142067"
const myLong = "109.961329"

const myURL = 'https://api.openweathermap.org/data/2.5/weather?lat={myLat}&lon={myLon}&appid={myKey}&units=imperial'

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(data) {
    console.log('hello')
  }
  
  apiFetch();