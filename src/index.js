import { displayCity, displayWeather } from "./asyncFunctions";
import { searchButton } from "./dom";

searchButton.addEventListener('click', () => {
    displayCity();
    displayWeather();
});



