function dateTime() {
  return new Date().toLocaleString();
}
//store the time the page was loaded inside the form data
document.querySelector("#DateTime").value =  dateTime();

function adjustRating(quantity) {

  document.getElementById("roomQuantity").innerHTML = quantity;
}