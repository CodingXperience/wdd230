const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      // Create elements to add to the document
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthDay = document.createElement("p");
      let birthPlace = document.createElement("p");
      let portrait = document.createElement('img');

      portrait.setAttribute('src', prophets[i].imageurl);
      portrait.setAttribute('alt', `Portait of ${prophets[i].name} ${prophets[i].lastname}`);
      portrait.setAttribute('loading', 'lazy');
      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
      birthDay.textContent = `Birthdate: ${prophets[i].birthdate}`;
      birthPlace.textContent = `Birthplace: ${prophets[i].birthplace}`;

      // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      

      card.appendChild(h2)
      card.appendChild(birthDay)
      card.appendChild(birthPlace)
      card.appendChild(portrait)
      document.querySelector("div.cards").appendChild(card);
    }
  });
  
  //   function displayProphets(prophet) {
  //     // Create elements to add to the document
  //     let card = document.createElement('section');
  //     let h2 = document.createElement('h2');
  //     let portrait = document.createElement('img');
    
  //     // Change the textContent property of the h2 element to contain the prophet's full name
  //     h2.textContent = prophet.name + ' ' + prophet.lastname;
    
  //     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  //     ____.setAttribute('src', prophet.imageurl);
  //     ____.setAttribute('alt', `Portait of prophet.name prophet.lastname`);
  //     ____.setAttribute('loading', 'lazy');
    
  //     // Add/append the section(card) with the h2 element
  //     card.appendChild(h2);
  //     card.appendChild(portrait);
    
  //     // Add/append the existing HTML div with the cards class with the section(card)
  //     document.querySelector('div.cards').appendChild(card);
  //   }
  // });

