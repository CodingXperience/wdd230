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
    let link = document.createElement("button");
    let services = document.createElement("p");
    let ordinance = document.createElement("p");
    let container_three = document.createElement("div");
    let email = document.createElement("p");
    let telephone = document.createElement("p");
    let address = document.createElement("p");
    let contact_icon_one = document.createElement("img");
    let contact_icon_two = document.createElement("img");
    let contact_icon_three = document.createElement("img");
  
    


    name.innerHTML = `${temple.name}`;
    contact_icon_one.setAttribute("src", temple.addressIcon);
    contact_icon_one.setAttribute("alt", `house location`);
    contact_icon_two.setAttribute("src", temple.telephoneIcon);
    contact_icon_two.setAttribute("alt", `phone number contact`);
    contact_icon_three.setAttribute("src", temple.mailIcon);
    contact_icon_three.setAttribute("alt", `email address`);
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `a view of ${temple.name}`);
    history.innerHTML = `History: ${temple.history}`;
    link.innerHTML = `<a href ="${temple.moreInfo}" target="_blank">Learn more</a>`;
    services.innerHTML = `Services: ${temple.services}`;
    ordinance.innerHTML = `Ordinance schedule: ${temple.ordinanceSchedule}`;
    email.innerHTML = `<a href ="${temple.email}" target="_blank">Send my Email to the temple</a>`;
    telephone.innerHTML = `Telephone: ${temple.telephone}`;
    address.innerHTML = `Address: ${temple.address}`;
    //let container = document.querySelector('.content');


    name.classList.add('temple-title');
    card.classList.add('temple-card');
    container_one.classList.add('content');
    container_two.classList.add('img');
    container_three.classList.add('contact-info');
    card.append(name);
    container_one.append(history);
    container_three.append(address);
    container_three.append(telephone);
    container_three.append(email);
    container_three.append(contact_icon_one);
    container_three.append(contact_icon_two);
    container_three.append(contact_icon_three);
    container_three.append(link);
    container_two.append(image);
    
    //card.appendChild(services);
    //card.appendChild(ordinance);

    //const parent = document.querySelector(".content");
    //const child = document.querySelector(".content p:nth-child(1)");
    //console.log(parent);
    //console.log(child);


    card.append(container_one);
    container_one.append(container_three);
    card.append(container_two);
    cards.append(card);
  })
}

getTemples();