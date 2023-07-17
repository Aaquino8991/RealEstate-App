document.addEventListener('DOMContentLoaded', () => {
  
  const myKey = config.MY_KEY;
  const host = config.HOST;

  const url = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';

  // Create elements for each city
  function homeList(data) {

    data.autocomplete.forEach(city => {
      const element = document.createElement('ul');
      element.textContent = city;
      document.getElementById('house-list').appendChild('ul')
    })
    
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
},

  document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('search-bar').value;
    fetchData(searchInput);
  })
);