document.addEventListener('DOMContentLoaded', () => {

  const myKey = config.MY_KEY;
  const host = config.HOST;

  const url = 'https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9653b74712msh64886888560e290p11bab2jsndede80dd8415',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
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