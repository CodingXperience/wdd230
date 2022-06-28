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


  // initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.

// how should this be improved?
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// Using localStorage to display how many days it has been since the user's last visit to your site. 

// get the last visit date value stored in localStorage
let lastVisitDate = window.localStorage.getItem("last-date-visit");
console.log(lastVisitDate);
console.log("Last visit was on:" + new Date(parseInt(lastVisitDate)));


// get todays date - leave the variable todayy with double yy's its not an error,changing it it will cause errors
let todayy = Date.now();

//Using JS calculate how many milliseconds are in a day. 
const msInDay = 1000 * 60 * 60 * 24;

// Creating a variable for today and another variable for the last visit and then subtract and divide by the number of milliseconds. 
// Then use Math.round() to make it a whole number.
let difference = Math.round((todayy - lastVisitDate)/msInDay);
console.log("Last visit difference in days is:" + parseInt(difference));

//Displaying a message about how many days it's been or if this is the first visit.
if (numVisits !== 0) {
	//Displaying a message about how many days it's been
	document.querySelector(".how-many-days-ago").textContent = 0;
} else {
	document.querySelector(".how-many-days-ago").textContent = difference;
}

// update the lastVisitDate
localStorage.setItem("last-date-visit",Date.now());
lastVisitDate = window.localStorage.getItem("last-date-visit");
console.log(lastVisitDate);
console.log("Last visit was on:" + new Date(parseInt(lastVisitDate)));






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

