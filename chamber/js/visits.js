//let lastVisit = localStorage.getItem('visits-ls');
const visitEL = document.querySelector('.last-visit');

// Factor to adjust date string
const FACTOR = 1000 * 60 * 60 * 24;

// Load the local storage and set the element variable
let lastVisit = Number(window.localStorage.getItem("visits-ls"));
// Calculate today and last visit day to the day
//let lastDay = Math.trunc(lastVisit / FACTOR);
//let today = Math.trunc(Date.now() / FACTOR);

// Display welcome message based on last visit day
if (lastVisit !== 0){
    visitEL.textContent = Math.round((Date.now() - lastVisit)/FACTOR);

} else {
    visitEL.textContent = `Welcome to the site, Hope you enjoy`;
}
localStorage.setItem('visits-ls', Date.now());