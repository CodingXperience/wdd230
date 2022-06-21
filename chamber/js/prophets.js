const requestURL = 'data.json';
const cards = document.querySelector('.cards');

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//   });

async function getProphets() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    buildProphetCards(data);
  }else {
    throw Error(response.statusText);
  }
}

function buildProphetCards(data) {
  data.companies.forEach(company => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let icon = document.createElement("img");
    let logo = document.createElement("img");
    let category = document.createElement("p");
    let weburl = document.createElement("p");
    let state = document.createElement("p");
    let phonenumber = document.createElement("p");
    let membershiplevel = document.createElement("p");
    let detail = document.createElement("button");
    


    name.innerHTML = `${company.name}`;
    icon.setAttribute("src", company.icon);
    icon.setAttribute("alt", "membership level");
    logo.setAttribute("src", company.logo);
    logo.setAttribute("alt", `${company.name}'s logo`);
    category.innerHTML = `Category: ${company.category}`;
    phonenumber.innerHTML = `Contact: ${company.phonenumber}`;
    membershiplevel.innerHTML = `${company.membershiplevel}`;
    state.innerHTML = `State: ${company.state}`;
    weburl.innerHTML = `<a href ="${company.weburl}" target="_blank">${company.name}'s website link </a>`;
    detail.innerHTML = `${company.detail}`;
    
    

    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(phonenumber);
    card.appendChild(membershiplevel);
    card.appendChild(state);
    card.appendChild(weburl);
    card.appendChild(detail);
    card.appendChild(icon);
    card.append(logo);
    cards.appendChild(card);
  })
}

getProphets();