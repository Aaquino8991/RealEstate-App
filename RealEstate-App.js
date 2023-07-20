//Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchButton');
  const myKey = config.MY_KEY;
  const host = config.HOST;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPI-Host': host
    }
  };

  //Grab data from API endpoint
  async function fetchForSale(cityInput, stateCode) {
    try {
      //Use string interpolation to insert User input in URL
      const encodedCity = encodeURIComponent(cityInput);
      const encodedState = encodeURIComponent(stateCode);
      const url = `https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=${encodedState}&city=${encodedCity}&offset=0&limit=5&sort=relevance`;
      
      //result will wait for response to finish it's process
      const response = await fetch(url, options);
      const result = await response.json();
      
      //listings will wait for result to finish it's process
      const listings = result.listings

      //Iterate through all the data in listings and create a div the info for each
      listings.forEach(element => {
        const contentBox = document.getElementById('content-box');
        const houseCard = document.createElement('div');
        contentBox.appendChild(houseCard);
        houseCard.style.margin = '25px';
        houseCard.style.width = '50px';
        houseCard.innerHTML = `
          <img src=${element.photo} width = '100px'>
          <h3>${element.address}</h3>
          <h4>${element.price}</h4>
          <p>${element.beds} beds/${element.baths} baths</p>`

        houseCard.addEventListener('mouseover', () => {
          houseCard.style.boxShadow = '1px 1px 8px 1px #525252';
          houseCard.addEventListener('mouseout', () => {
            houseCard.style.boxShadow = 'none';
          })
        })
      })

    //Log error if fetch does not return anything
    } catch (error) {
      console.error(error);
    }
  }

  //Clear contentBox, call fetchForSale passing User input as argument and refill content box with new data
  searchBtn.addEventListener('click', () => {
    const contentBox = document.getElementById('content-box');
    contentBox.innerHTML = ''

    const cityInput = document.getElementById('cityInput').value;
    const stateCode = document.getElementById('stateCode').value
    fetchForSale(cityInput, stateCode);
  })

  const inputs = [ cityInput, stateCode ];
    
  inputs.forEach((input) => {
    input.addEventListener('mouseover', () => {
      input.style.boxShadow = '1px 1px 8px 1px #525252';
      input.addEventListener('mouseout', ()=> {
        input.style.boxShadow = 'none';
      })
    })
  })
    

});

