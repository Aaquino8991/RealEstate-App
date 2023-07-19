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

  async function fetchForSale(cityInput, stateCode) {
    try {
      const encodedCity = encodeURIComponent(cityInput);
      const encodedState = encodeURIComponent(stateCode);
      const url = `https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=${encodedState}&city=${encodedCity}&offset=0&limit=5&sort=relevance`;
      
      
      const response = await fetch(url, options);
      const result = await response.json();
      
      
      const listings = result.listings
      listings.forEach(element => {
        const contentBox = document.getElementById('content-box');
        const houseCard = document.createElement('div');
        contentBox.appendChild(houseCard);
        houseCard.innerHTML = `
          <h3>${element.address}</h3>
        `
        console.log(element)
      })
    } catch (error) {
      console.error(error);
    }
  }

  searchBtn.addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    const stateCode = document.getElementById('stateCode').value
    fetchForSale(cityInput, stateCode);
  })
});

