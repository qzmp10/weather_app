import { displayCity, displayWeather } from "./asyncFunctions";
import { locationInput, icon } from "./dom";

locationInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        icon.className = '';
        displayCity();
        displayWeather();
        locationInput.value = '';
    };
});



