document.addEventListener('DOMContentLoaded', () => {

  const myKey = config.MY_KEY;
  const host = config.HOST;

  const url = 'https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPI-Host': host
    }
  };

  async function fetchForSale() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  fetchForSale();
});