/* ===== Last Visit =====*/
const lastVisit = Number(localStorage.getItem('lastvisit'));
const currentVisit = Date.now() - lastVisit;
const daysBetweenVisits = currentVisit / (1000 * 60 * 60 * 24);
const firstVisit = `Welcome, this is your first visit!`
const visits = `Welcome back! Your last visit was ${Math.round(daysBetweenVisits)} days ago.`

if (lastVisit === 0) {
    document.querySelector("#visits").textContent = firstVisit;
} else {
    document.querySelector("#visits").textContent = visits;
}
localStorage.setItem('lastvisit', Date.now())



 // initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector("#numVisits");

//get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

//determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

//increment the number of visits.

//how should this be improved?
numVisits++;
//store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// Using localStorage to display how many days it has been since the user's last visit to your site. 

// get the last visit date value stored in localStorage
// let lastVisitDate = window.localStorage.getItem("last-date-visit");
// console.log(lastVisitDate);
// console.log("Last visit was on:" + new Date(parseInt(lastVisitDate)));


// get todays date - leave the variable todayy with double yy's its not an error,changing it it will cause errors
// let todayy = Date.now();

// Using JS calculate how many milliseconds are in a day. 
// const msInDay = 1000 * 60 * 60 * 24;

// Creating a variable for today and another variable for the last visit and then subtract and divide by the number of milliseconds. 
// Then use Math.round() to make it a whole number.
// let difference = Math.round((todayy - lastVisitDate)/msInDay);
// console.log("Last visit difference in days is:" + parseInt(difference));

// Displaying a message about how many days it's been or if this is the first visit.
// if (numVisits !== 0) {
// 	Displaying a message about how many days it's been
// 	document.querySelector(".how-many-days-ago").textContent = 0;
// } else {
// 	document.querySelector(".how-many-days-ago").textContent = difference;
// }

// update the lastVisitDate
// localStorage.setItem("last-date-visit",Date.now());
// lastVisitDate = window.localStorage.getItem("last-date-visit");
// console.log(lastVisitDate);
// console.log("Last visit was on:" + new Date(parseInt(lastVisitDate)));

