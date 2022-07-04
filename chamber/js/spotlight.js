const requestURL = 'data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    select(companies);
  });

  function select(companies) {
    const sieveMember = companies.filter(function(company) {
      return company.membershiplevel == "Gold" ||
            company.membershiplevel == "silver";
    });

    const remixMember = sieveMember.sort(() => 0.5 - Math.random());
    display(remixMember[0], ".spot_a");
    display(remixMember[1], ".spot_b");
    display(remixMember[2], ".spot2");
  }

  function display(company, elementID) {
    let name = document.createElement('h3');
    let slogan = document.createElement('p');
    let spot_illustration = document.createElement('img');
    let email = document.createElement('a');
    let phonenumber = document.createElement('p');
    let hr = document.createElement('hr');
    
    name.textContent = `${company.name}`;
    slogan.textContent = `${company.slogan}`;
    spot_illustration.setAttribute('src', company.spot_illustration);
    spot_illustration.setAttribute('alt', `${company.name} illustration`);
    email.textContent = `${company.email}`;
    email.setAttribute('href', "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1656945785&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d55302008-a6d0-2843-a200-515e4a5e9f66&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015")
    phonenumber.textContent = `Our Contact: ${company.phonenumber}`;

    const spotlight = document.querySelector(elementID)

    email.classList.add('unique')
    spot_illustration.classList.add('effect');
    spotlight.appendChild(name);
    spotlight.appendChild(slogan);
    spotlight.appendChild(spot_illustration);
    spotlight.appendChild(email);
    spotlight.appendChild(phonenumber);
    spotlight.appendChild(hr);
  }
    // const company_details = jsonObject['companies'];
    // for (let i = 0; i < company_details.length; i++) {
    //   // Create elements to add to the document
    //   let card = document.createElement('div');
    //   let name = document.createElement('h2');
    //   let community_service = document.createElement('h3');
    //   let spotlight_illustration_one = document.createElement('img');
    //   let slogan = document.createElement('p');
    //   let email = document.createElement('p');
    //   let phonenumber = document.createElement('p');
    //   let spotlight_illustration_two = document.createElement('img');
    //   let figcaption = document.createElement('p');
  
    //   name.textContent = `${company_details[i].name_spot1}`;
    //   community_service.textContent = `${company_details[i].community_service}`;
    //   spotlight_illustration_one.setAttribute('src', company_details[i].spot1_illustration_one);
    //   spotlight_illustration_one.setAttribute('alt', 'transport image');
    //   slogan.textContent = `${company_details[i].slogan}`;
    //   email.textContent = `E-mail: ${company_details[i].email}`;
    //   phonenumber.textContent = `Our Contact: ${company_details[i].phonenumber_spot1}`;
    //   spotlight_illustration_two.setAttribute('src', company_details[i].spot1_illustration_two);
    //   spotlight_illustration_two.setAttribute('alt', 'imagery art');
    //   figcaption.textContent = `${company_details[i].figcaption}`;
    //   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        
  
    //   card.appendChild(name)
    //   card.appendChild(community_service)
    //   card.appendChild(spotlight_illustration_one)
    //   card.appendChild(slogan)
    //   card.appendChild(email)
    //   card.appendChild(phonenumber)
    //   card.appendChild(spotlight_illustration_two)
    //   card.appendChild(figcaption)
    //   document.querySelector("div.spot1").appendChild(card);
    //}
  

 