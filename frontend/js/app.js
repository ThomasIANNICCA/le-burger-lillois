const app = {
    routeAllRestaurants: "http://localhost:8000/api/restaurant/",


    init: function(){
        app.loadAllDistricts()
        const selectElement = document.querySelector('select')
        selectElement.addEventListener('change', app.handleChange)
    },

    loadAllDistricts: async function(){
        try {

            const httpResponse = await fetch("http://localhost:8000/api/district/",
                {
                    method : 'GET'
                });

            const allDistricts = await httpResponse.json()

            for(district of allDistricts){
                app.initDistrict(district)
            }
        } catch (error) {
            return {
                httpStatus: 500,
                message: error
            }
        }
    }, 

    initDistrict: function(district){
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
        
        if (dataId == 0){
            const resultContainer = document.querySelector('.right-section__container')
            resultContainer.innerHTML=''
            const alertElement = document.createElement('p')
            alertElement.textContent = 'Veuillez sélectionner un quartier'
            resultContainer.appendChild(alertElement)
        } else{
            try {
                const httpResponse = await fetch("http://localhost:8000/api/district/" + dataId + '/restaurant')

                const jsonRestaurant = await httpResponse.json()
        
                const resultContainer = document.querySelector('.right-section__container')
                resultContainer.innerHTML=''
        
                for(restaurant of jsonRestaurant){
                    app.addNewElementsToDom(restaurant)
                }
            } catch (error) {
                return {
                    httpStatus: 500,
                    message: error
                }
            }
        }
    },

    addNewElementsToDom: function(newElement){
        const resultContainer = document.querySelector('.right-section__container')

        // RESULTAT CONTAINER
        const firstDivElement = document.createElement('div')
        firstDivElement.classList.add('result-element')
        resultContainer.appendChild(firstDivElement)

        // RESULTAT IMAGE
        const secondDivElement = document.createElement('div')
        secondDivElement.classList.add('result-element__image')
        firstDivElement.appendChild(secondDivElement)

        const imgElement = document.createElement('img')
        imgElement.src = newElement.picture
        secondDivElement.appendChild(imgElement)

        // RESULTAT DESCRIPTION
        const thirdDivElement = document.createElement('div')
        thirdDivElement.classList.add('result-element__description')
        firstDivElement.appendChild(thirdDivElement)

        const titleElement= document.createElement('h3')
        titleElement.textContent = newElement.name
        thirdDivElement.appendChild(titleElement)

        const rankElement= document.createElement('p')
        rankElement.textContent = 'Note : ' + newElement.rank + '/5'
        thirdDivElement.appendChild(rankElement)

        const ulElement=document.createElement('ul')
        thirdDivElement.appendChild(ulElement)

            //Configuration Li horaires et formatage d'heure
        const HoursElement = document.createElement('li');

            // Ouverture
        const openHours = newElement.opening_hours
        const newOpenHour = app.formatHours(openHours)

            // Fermeture
            const closeHours = newElement.closing_hours
            const newCloseHour = app.formatHours(closeHours)
        
        HoursElement.textContent = newOpenHour + ' - ' + newCloseHour
        ulElement.appendChild(HoursElement)
    },
    
    formatHours: function(hours){
        const splitHours = hours.split(':')
        const newHour = parseInt(splitHours[0])
        return newHour + 'h'
    }    
}

document.addEventListener('DOMContentLoaded', app.init())