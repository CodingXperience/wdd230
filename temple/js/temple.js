const requestURL = 'temple.json';
let likes = [];
let cards_created = 0;
//const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(buildTempleCards);
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
  });


function buildTempleCards(temple) {
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
  let childSpan = document.createElement('span');
  
  name.innerHTML = `${temple.name}`;
  contact_icon_one.setAttribute("src", temple.addressIcon);
  contact_icon_one.setAttribute("alt", `house location`);
  contact_icon_two.setAttribute("src", temple.telephoneIcon);
  contact_icon_two.setAttribute("alt", `phone number contact`);
  contact_icon_three.setAttribute("src", temple.mailIcon);
  contact_icon_three.setAttribute("alt", `email address`);
  image.setAttribute("src", temple.imageUrl);
  //image.setAttribute("data-src", temple.imageUrl);
  image.setAttribute("alt", `a view of ${temple.name}`);
  image.setAttribute('loading', 'lazy');
  history.innerHTML = `History: ${temple.history}`;
  link.innerHTML = `<a href ="${temple.moreInfo}" target="_blank">Learn more</a>`;
  services.innerHTML = `Services: ${temple.services}`;
  ordinance.innerHTML = `Ordinance schedule: ${temple.ordinanceSchedule}`;
  email.innerHTML = `<a href ="${temple.email}" target="_blank">Send my Email to the temple</a>`;
  telephone.innerHTML = `Telephone: ${temple.telephone}`;
  address.innerHTML = `Address: ${temple.address}`;


  // Check for local storage value
  let liketext = window.localStorage.getItem(`liked-temples-ls ${cards_created}`);
  // Set text content of like button
  if (liketext == "🧡 Liked"){childSpan.textContent = liketext;}else{ childSpan.textContent = "🤍"; }
  // Add it to our list
  likes.push(childSpan);
  // Add/append portait and like button to the image container div
  container_two.append(childSpan);

  childSpan.setAttribute("class", "heart");
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
  

  card.append(container_one);
  container_one.append(container_three);
  card.append(container_two);
  document.querySelector('.cards').append(card);
  cards_created += 1;
} 

   
document.addEventListener('click',function(e){
  if(e.target){
    // for each button
    for(i=0; i<likes.length; i++){
      // check if it was clicked
      if( e.target== likes[i]){
        // do something
        if(likes[i].textContent == "🤍"){
          likes[i].textContent = "🧡 Liked"
          //likes[i].style.backgroundColor="white";
        }else{
          likes[i].textContent = "🤍"
          //likes[i].style.backgroundColor="rgb(154, 172, 187)";
        }
        
        // store the time we are visiting now
        localStorage.setItem(`liked-temples-ls ${i}`, likes[i].textContent);
      }
    }
  }
});
  