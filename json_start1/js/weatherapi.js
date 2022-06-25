// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=232422&appid=bb6b10f23ccbc81205ccce7971693fe4&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

  });

