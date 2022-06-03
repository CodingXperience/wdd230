// auto-date update
let my_date = new Date();
let my_year = my_date.getFullYear();
document.getElementById("the_year").textContent = my_year;

document.getElementById("currentdate").textContent = document.lastModified

// min-screen navigation
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
//console.log(dayNumber);
const element = document.getElementById("message");
if (dayNumber == 1 || dayNumber == 2) {
  element.classList.add("showme");
}else {
  element.classList.add("hideme");
}

const tempNumber = parseFloat(document.getElementById("temp").textContent);
//console.log(tempNumber)
const speedNumber = parseFloat(document.getElementById("speed").textContent);
//console.log(speedNumber)

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,
  0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
  //console.log(windchill)
  windchill = Math.round(windchill);
  //console.log(windchill)

  if (tempNumber<=50 && speedNumber > 3){
    document.getElementById("chill").textContent = "Wind Chill: " + windchill + "\xB0F";
  } else {
    document.getElementById("chill").textContent = "N/A";
  }