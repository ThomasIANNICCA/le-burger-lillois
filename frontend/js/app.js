import districts from './districts.js';
import restaurants from './restaurants.js';
import rate from './rate.js';

const app = {
    init: function(){
        console.log('app chargée');
        districts.init()
        restaurants.init()
        rate.init()
    },
}

document.addEventListener('DOMContentLoaded', app.init())