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
if (dayNumber == 1 || dayNumber == 3) {
  element.classList.add("showme");
}else {
  element.classList.add("hideme");
}


if(!!window.IntersectionObserver){console.log("Inserction Observer is super cool")}


// create a function
let myObserver = new IntersectionObserver((myListA, myObserver) => { 
    myListA.forEach(cupX => {
    if(cupX.isIntersecting){
        cupX.target.src = cupX.target.dataset.src;
        cupX.target.removeAttribute('data-src');
        myObserver.unobserve(cupX.target);
    }
    });
}, {rootMargin: "0px 0px -300px 0px"});

// make a list of all images with a data source and send that list to myObserver
document.querySelectorAll('img[data-src]').forEach(img => {myObserver.observe(img) });

