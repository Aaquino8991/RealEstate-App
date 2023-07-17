document.addEventListener('DOMContentLoaded', () => {
  
  const myKey = config.MY_KEY;
  const host = config.HOST;

  const url = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';

  // Create elements for each city
  function homeList(data) {

    data.autocomplete.forEach(city => {
      const element = document.createElement('ul');
      const listItem = document.createElement('li')
      element.textContent = city;
      element.appendChild(listItem);
      document.getElementById('house-list').appendChild(element);
    })
    
  }
  
  // Fetch data from API
  function fetchData(city) {
  fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPi-Host': host
    }
  })

  .then (res => res.json())
  .then (data => console.log(homeList(data)))
  .catch(error => console.error(error));
};

  //Event listener for the search button
  document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('search-bar').value;
    fetchData(searchInput);
  });
});