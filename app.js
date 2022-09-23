/* Imports */
import { getBeanies, getAstroSigns } from './fetch-utils.js';
import { renderBeanie, renderAstroSignOption } from './render-utils.js';
/* Get DOM Elements */
const beanieList = document.getElementById('beanie-list');
const astroSignSelect = document.getElementById('astro-sign-select');
const searchForm = document.getElementById('search-form');
/* State */
let error = null;
let beanies = [];
let astroSigns = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanieBabies();
    const response = await getAstroSigns();
    error = response.error;
    astroSigns = response.data;
    if (!error) {
        displayAstroSignOptions();
    }
});

async function findBeanieBabies(name, astroSign) {
    const response = await getBeanies(name, astroSign);
    error = response.error;
    beanies = response.data;

    if (!error) {
        displayBabies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findBeanieBabies(formData.get('name'), formData.get('astroSign'));
});
/* Display Functions */

function displayBabies() {
    beanieList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}

function displayAstroSignOptions() {
    for (const astroSign of astroSigns) {
        const option = renderAstroSignOption(astroSign);
        astroSignSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
