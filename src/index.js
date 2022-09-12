const weatherDiv = document.querySelector('.weather-data');
const cityDiv = document.querySelector('.city-data');
const locationInput = document.querySelector('#search_location');
const searchButton = document.querySelector('.search');

// async function getCity() {
//     try {
//         const city = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Los Angeles&limit=5&appid=899939d5ca4c4ea4b64de201ec8fde6f', {mode: 'cors'});
//         const locationData = await city.json();
//         console.log(locationData);
//         weatherDiv.textContent = locationData[0].name + ', ' + locationData[0].country;
//     } catch (error) {
//         console.log(error)
//     }
// }

searchButton.addEventListener('click', () => {
    async function getLocation() {
        try {
            const location = await fetch('http://api.openweathermap.org/geo/1.0/direct?q='+`${locationInput.value}`+'&limit=5&appid=899939d5ca4c4ea4b64de201ec8fde6f', 
            {mode: 'cors'})
            const json = await location.json();
            const latitude = json[0].lat;
            const longitude = json[0].lon;
            const country = json[0].country;
            const city = json[0].name;
            return { latitude, longitude, city, country };
        } catch (error) {
            console.log(error);

        }
    }

    async function getWeather() {
        try {
            const locationLatLon = await getLocation();
            const weather = await fetch ('https://api.openweathermap.org/data/2.5/weather?lat='+
            `${locationLatLon['latitude']}`+'&lon='+`${locationLatLon['longitude']}`+'&appid=899939d5ca4c4ea4b64de201ec8fde6f');
            const json = await weather.json();

            //this block could go in an another asynchronous function
            const city = locationLatLon['city'];
            if(locationLatLon['country'] !== ''){
                const country = locationLatLon['country'];
                cityDiv.textContent = `${city}`+`, ${country}`;
            } else {
                cityDiv.textContent = `${city}`;
            }


            weatherDiv.textContent = 'Temperature:'+` ${json.main.temp} Kelvin`;

        } catch (error) {
            console.log(error);
        }
    }

    getWeather();
})


