const requestURL = 'temple.json';
const cards = document.querySelector('.cards');

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//   });

async function getTemples() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    buildTempleCards(data);
  }else {
    throw Error(response.statusText);
  }
}

function buildTempleCards(data) {
  data.temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let container_one = document.createElement("div");
    let image = document.createElement("img");
    let container_two = document.createElement("div");
    let history = document.createElement("p");
    let link = document.createElement("a");
    let services = document.createElement("p");
    let ordinance = document.createElement("p");
    let email = document.createElement("p");
    let telephone = document.createElement("p");
    let address = document.createElement("p");
    


    name.innerHTML = `${temple.name}`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `a view of ${temple.name}`);
    history.innerHTML = `History: ${temple.history}`;
    link.innerHTML = `<a href ="${temple.moreInfo}" target="_blank">Learn more</a>`;
    services.innerHTML = `Services: ${temple.services}`;
    ordinance.innerHTML = `Ordinance schedule: ${temple.ordinanceSchedule}`;
    email.innerHTML = `<a href ="${temple.email}" target="_blank">Send my Email to the temple</a>`;
    telephone.innerHTML = `Telephone: ${temple.telephone}`;
    address.innerHTML = `Address: ${temple.address}`;
    
    container_one.classList.add('content');
    container_two.classList.add('img');
    card.appendChild(name);
    container_one.appendChild(history);
    container_one.appendChild(link);
    container_two.appendChild(image);
    //card.appendChild(services);
    //card.appendChild(ordinance);
    //card.appendChild(email);
    //card.appendChild(telephone);
    //card.append(address);
    card.appendChild(container_one);
    card.appendChild(container_two);
    cards.appendChild(card);
  })
}

getTemples();