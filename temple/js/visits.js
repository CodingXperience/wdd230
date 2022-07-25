let currentDate = Date.now();
const visitCounts = document.querySelector(".visit-days");

const dayInMills = 24 * 60 * 60 * 1000;

const hours = (dateNum) => {
    let date = new Date(dateNum);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return new Date(year, month, day);
};

if (!window.localStorage.getItem("previous-visit")) {
    localStorage.setItem(
      "previous-visit",
      Number(hours(currentDate) - dayInMills)
    );
}
if (!window.localStorage.getItem("last-visit")) {
localStorage.setItem("last-visit", Number(hours(currentDate)));
}

const prevVisit = Number(window.localStorage.getItem("previous-visit"));
const lastVisit = Number(window.localStorage.getItem("last-visit"));

let prevDay = new Date(prevVisit);
let lastDay = new Date(lastVisit);
let days = currentDate - lastDay;

if (days > dayInMills) {
    localStorage.setItem("previous-visit", Number(lastDay));
    localStorage.setItem("last-visit", Number(hours(currentDate)));
    let displayDays = Math.floor(days / dayInMills);
    visitCounts.textContent = displayDays;
} else {
    let displayDays = Number((lastDay - prevDay) / dayInMills);
    visitCounts.textContent = displayDays;
}