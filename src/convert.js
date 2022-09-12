function kelvinToCelsius (temp) {
    let cTemp = (temp - 273.15);

    return Math.round(cTemp);
};

function kelvinToFahrenheit (temp) {
    let firstEquation = (temp - 273.15);
    let secondEquation = (firstEquation * 1.8);
    let fTemp = (secondEquation + 32);

    return Math.round(fTemp);
};

export { kelvinToCelsius, kelvinToFahrenheit }