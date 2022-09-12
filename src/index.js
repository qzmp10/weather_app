const weatherDiv = document.querySelector('.weather-data');
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
            console.log(json);
            const latitude = json[0].lat;
            const longitude = json[0].lon;
            console.log(latitude, longitude);
        } catch (error) {
            console.log(error);

        }
    }

    getLocation();
})
