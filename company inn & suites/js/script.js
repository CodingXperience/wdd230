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

// const datefield = document.querySelector(".date");

// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-UK", {
//   dateStyle: "full"
// }).format(now);

// datefield.innerHTML = `<em>${fulldate}</em>`

// const today = new Date();
// console.log(today);

// const dayNumber = today.getDay();
// //console.log(dayNumber);
// const element = document.getElementById("message");
// if (dayNumber == 1 || dayNumber == 2) {
//   element.classList.add("showme");
// }else {
//   element.classList.add("hideme");
// }


