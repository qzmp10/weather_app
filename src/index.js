import { getWeather } from "./asyncFunctions";
import { searchButton } from "./dom";

searchButton.addEventListener('click', () => {
    getWeather();
})




