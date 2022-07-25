  /* BAD WEATHER BANNER */

// hide bad weather banner (default)
const displayBanner = document.querySelector("#banner");
displayBanner.style.display = "none";

//const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=232422&appid=372fb787eb1b98093ed53bf651198d38&units=imperial";
const forecastURL ="//api.openweathermap.org/data/2.5/onecall?lat=0.31628&lon=32.582191&exclude=minutely,hourly&units=imperial&appid=372fb787eb1b98093ed53bf651198d38";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    //const currentWeather = jsonObject.current;
    const dailyForecast = jsonObject.daily.slice(0, 4);
    //alerts = jsonObject.alerts;
    //console.log(jsonObject);

     // IF THERE IS BAD WEATHER
     if(jsonObject.alerts != undefined){
      displayBanner.innerHTML += `<em>EVENT: ${jsonObject.alerts.event} DESCRIPTION: ${jsonObject.alerts.description}</em>`;
      displayBanner.style.display = "block";
      }

    // // Check for alerts
    //handleAlerts();

    // Weather Forecast
    const d = new Date();

    const todayDayNumber = d.getDay();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let forecastDayNumber = todayDayNumber;

    dailyForecast.forEach((weather) => {
      forecastDayNumber += 1;
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }
      const forecastItem = document.createElement("div");
      forecastItem.classList = "forecast-item";
      const dayName = document.createElement("h3");
      dayName.textContent = weekday[forecastDayNumber];

      const iconPath =
        "//openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png";
      const icon = document.createElement("img");
      icon.src = iconPath;
      icon.alt = weather.weather[0].description;

      const temp = document.createElement("p");
      temp.textContent = weather.temp.day + "\xB0F";

      forecastItem.appendChild(dayName);
      forecastItem.appendChild(icon);
      forecastItem.appendChild(temp);

      document.querySelector(".forecast-box").appendChild(forecastItem);
    });
  });


  function closeBanner(){
    displayBanner.style.display = "none";
  }

