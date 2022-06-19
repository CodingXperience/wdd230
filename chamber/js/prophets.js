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
    let name = document.createElement("name");
    //let imageurl = document.createElement("imageurl");
    let category = document.createElement("category");
    let weburl = document.createElement("weburl");

    name.innerHTML = `${company.name}`;
    //imageurl.innerHTML = `${prophet.imageurl}`;
    category.innerHTML = `${company.category}`;
    weburl.innerHTML = `${company.weburl}`;
    
    <br>card.appendChild(name);</br>

    
    //card.append(imageurl);
    card.appendChild(category);
    card.appendChild(weburl);
    cards.appendChild(card);
  })
}

getProphets();