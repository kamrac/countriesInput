const countryName = document.getElementById('name');
const countryPopulation = document.getElementById('population');
const officialLanguage = document.getElementById('language');
const submitButton = document.getElementById('submit');
const output = document.getElementById('output');


async function formFilledOut(){
    try {
        const response = await fetch('http://localhost:8080/countries');
        const responseJSO = await response.json();
        const myObj = responseJSO[0];
        output.innerHTML = `${countryName.value} has a population of ${countryPopulation.value}! The official language is ${officialLanguage.value}`;
        const newCountries = new Country(countryName.value,countryPopulation.value, officialLanguage.value);
        console.log(newCountries);
        countryName.value = '';
        countryPopulation.value = '';
        officialLanguage.value = '';
        } catch(e) {
            console.log("oh no!: "+ e.message);
            }
}
function buttonClicked() {
    submitButton.style.backgroundColor ='#3D5A80';

}

class Country{
    constructor(countryName, countryPopulation, officialLanguage) {
        this.countryName = countryName,
        this.countryPopulation = countryPopulation,
        this.officialLanguage = officialLanguage
    }
}

let newCountry = [];

const newCountries = new Country('Greece',10660000, 'Greek');



submitButton.addEventListener('click', buttonClicked);

submitButton.addEventListener('click',formFilledOut);


