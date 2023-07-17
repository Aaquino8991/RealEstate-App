document.addEventListener('DOMContentLoaded', () => {
  
  const myKey = config.MY_KEY;
  const host = config.HOST;

  const url = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';

  // Create elements for each city
  function homeList(data) {
    const element = document.createElement('ul');{
      
    }
  }
  
  // Fetch data from API
  fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPi-Host': host
    }
  })

  .then (res => res.json())
  .then (data => homeList(data))
  .catch(error => console.error(error));
});