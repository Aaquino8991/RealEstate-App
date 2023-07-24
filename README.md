# RealEstate-App

RealEstate-App is an app that displays houses on sale in a specific city.

## Installation

No installation required.

## Usage


# Listens for a click, then clears any previous data and calls the fetchForSale() function passing user input
```javascript
searchBtn.addEventListener('click', () => {
    const contentBox = document.getElementById('content-box');
    contentBox.innerHTML = ''

    const cityInput = document.getElementById('cityInput').value;
    const stateCode = document.getElementById('stateCode').value
    fetchForSale(cityInput, stateCode);
  })
```

# fetches data from API and displays data on the DOM
```javascript
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

      //Iterate through all the data in listings
      listings.forEach(element => {
        const contentBox = document.getElementById('content-box');
        const houseCard = document.createElement('div');
        contentBox.appendChild(houseCard);
        //Style div and add data
        houseCard.style.margin = '35px';
        houseCard.style.width = '255px';
        houseCard.style.display = 'inline-block';
        houseCard.innerHTML = `
          <img src=${element.photo} width = '200px'>
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
```