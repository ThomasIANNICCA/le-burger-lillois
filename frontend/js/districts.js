import restaurants from "./restaurants.js";

const districts = {
  
  init: function(){
    districts.loadAllDistricts()
    console.log('coucou');
    const selectElement = document.querySelector('select')
    selectElement.addEventListener('change', districts.handleChange)
  },

  loadAllDistricts: async function(){
    try {

        const httpResponse = await fetch("http://localhost:8000/api/district/",
            {
                method : 'GET'
            });

        const allDistricts = await httpResponse.json()
        for(let district of allDistricts){
          console.log(district);
            districts.showDistrict(district)
        }
    } catch (error) {
        return {
            httpStatus: 500,
            message: error
        }
    }
  }, 

  showDistrict: function(district){
    const selectEl = document.querySelector('select')

    const optionEl = document.createElement('option')
    optionEl.textContent = district.name
    optionEl.setAttribute('data-id', district.id)
    console.log(optionEl)
    selectEl.appendChild(optionEl)
  },

  handleChange: function(event){
    const optionSelected = event.target.selectedOptions[0]; // Accédez à l'option sélectionnée
    const dataId = optionSelected.dataset.id;
    console.log('L\'option choisie est ' + dataId);

    restaurants.showRestaurant(dataId)
  },
};

export default districts;