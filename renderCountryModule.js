// renderCountryModule.js
const renderCountry = function (data) {
    const countryInfo = `
    Country: ${data.name.common}
    Region: ${data.region}
    Population: ${data.population.toLocaleString()} people
    Language: ${Object.values(data.languages)[0]}
    Currency: ${Object.values(data.currencies)[0].name}
    Nabouring countries: ${data.borders.join(", ")}
    `;
    console.log(countryInfo);
};

module.exports = renderCountry;
