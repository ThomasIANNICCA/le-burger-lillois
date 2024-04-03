const app = {

    routeAllDistricts: "http://localhost:8000/api/district/",
    routeAllRestaurants: "http://localhost:8000/api/restaurant/",


    init: function(){
        app.loadAllDistricts()
        const selectElement = document.querySelector('select')
        selectElement.addEventListener('change', app.handleChange)
    },

    loadAllDistricts: async function(){
        try {

            const httpResponse = await fetch(app.routeAllDistricts,
                {
                    method : 'GET'
                });

            const allDistricts = await httpResponse.json()

            for(district of allDistricts){
                app.addToDom(district)
            }
        } catch (error) {
            return {
                httpStatus: 500,
                message: error
            }
        }
    }, 

    addToDom: function(district){
        const selectEl = document.querySelector('select')

        const optionEl = document.createElement('option')
        optionEl.textContent = district.name
        optionEl.setAttribute('data-id', district.id)

        selectEl.appendChild(optionEl)
    },


    handleChange: function(event){
        const optionSelected = event.target.selectedOptions[0]; // Accédez à l'option sélectionnée
        const dataId = optionSelected.dataset.id;
        console.log('L\'option choisie est ' + dataId);

        app.showRestaurant(dataId)
    },

    showRestaurant: async function(dataId){
        
    }
    

    
}

document.addEventListener('DOMContentLoaded', app.init())