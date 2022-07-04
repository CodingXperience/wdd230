//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=232422&appid=bb6b10f23ccbc81205ccce7971693fe4&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById("place").innerHTML=weatherInfo.name;
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML=weatherInfo.wind.speed;
    document.querySelector("figcaption.weather_second_title").innerHTML=weatherInfo.weather[0].description;
    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById("weather_icon").src = icon_path;
    // const tempNumber = Number(document.getElementById("temp").textContent);
    // console.log(tempNumber)
    // const speedNumber = Number(document.getElementById("speed").textContent);
    // console.log(speedNumber)

    let windchill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windSpeed,
      0.16)) + (0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
      console.log(windchill)
      windchill = Math.round(windchill);
      console.log(windchill)

      if (currentTemp<=50 && windSpeed > 3){
        document.getElementById("chill").textContent = "Wind Chill: " + windchill + "\xB0F";
      } else {
        document.getElementById("chill").textContent = "Wind Chill: " + "N/A";
      } 

 }); //end of "then" fat arrow function


// const tempNumber = Number(document.getElementById("temp").textContent);
// console.log(tempNumber)
// const speedNumber = Number(document.getElementById("speed").textContent);
// console.log(speedNumber)

// let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,
//   0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
//   console.log(windchill)
//   windchill = Math.round(windchill);
//   console.log(windchill)

//   if (tempNumber<=50 && speedNumber > 3){
//     document.getElementById("chill").textContent = "Wind Chill: " + windchill + "\xB0F";
//   } else {
//     document.getElementById("chill").textContent = "N/A";
//   }
