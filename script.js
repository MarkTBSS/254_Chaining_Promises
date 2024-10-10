"use strict";

const renderCountry = require("./renderCountryModule");

const getCountryData = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            //console.log(neighbour);
            if (!neighbour) return;
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data[0]));
};

getCountryData("portugal");
