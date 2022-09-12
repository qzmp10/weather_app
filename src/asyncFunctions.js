import { weatherDiv, cityDiv, locationInput, description } from "./dom";
import { kelvinToCelsius, kelvinToFahrenheit } from "./convert";

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
    };
    
    
    
    async function getWeather() {
        try {
            const locationLatLon = await getLocation();
            const weather = await fetch ('https://api.openweathermap.org/data/2.5/weather?lat='+
            `${locationLatLon['latitude']}`+'&lon='+`${locationLatLon['longitude']}`+'&appid=899939d5ca4c4ea4b64de201ec8fde6f');
            const json = await weather.json();
            return json;
        
        } catch (error) {
            console.log(error);
        }
    };

    async function displayWeather () {
        try {
            const jsonWeather = await getWeather();
            console.log(jsonWeather);
            const celsiusTemp = kelvinToCelsius(jsonWeather.main.temp);
    
            weatherDiv.textContent = `${celsiusTemp} °C`;
    
            description.textContent = `${jsonWeather.weather[0].description.charAt(0).toUpperCase()}`
            +`${jsonWeather.weather[0].description.slice(1)}`;

        } catch(error) {
            weatherDiv.textContent = "Error 404";
            description.textContent = "Error 404";
        }


    };

    async function displayCity() {
        try {
            const locationJson = await getLocation();
            const city = locationJson['city'];
    
            if(locationJson['country'] !== ''){
                const country = locationJson['country'];
                cityDiv.textContent = `${city}`+`, ${country}`;
            } else {
                cityDiv.textContent = `${city}`;
            }
        } catch  (error) {
            cityDiv.textContent = 'Error 404';
        }

    };


export { getLocation, getWeather, displayCity, displayWeather}