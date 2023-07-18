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

  async function fetchForSale(cityInput) {
    try {
      const encodedCity = encodeURIComponent(cityInput);
      const url = `https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=${encodedCity}&offset=0&limit=200&sort=relevance`;
      
      
      const response = await fetch(url, options);
      const result = await response.json();
      
      
      const listings = result.listings
      console.log(listings)
    } catch (error) {
      console.error(error);
    }
  }

  searchBtn.addEventListener('click', () => {
    const cityInput = document.getElementById('search-bar').value;
    fetchForSale(cityInput);
  })
});

