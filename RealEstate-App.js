const myKey = config.MY_KEY;
const host = config.HOST;

const url = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';

fetch(url, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': myKey,
    'X-RapidAPi-Host': host
  }
})

.then (res => res.json())
.then (data => console.log(data))
.then(error => console.error(error));