/* Imports */
import { getBeanies } from './fetch-utils.js';
import { renderBeanie } from './render-utils.js';
/* Get DOM Elements */
const beanieList = document.getElementById('beanie-list');
/* State */
let error = null;
let beanies = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanieBabies();
});

async function findBeanieBabies(name) {
    const response = await getBeanies(name);
    error = response.error;
    beanies = response.data;

    if (!error) {
        displayBabies();
    }
}
/* Display Functions */

function displayBabies() {
    beanieList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
