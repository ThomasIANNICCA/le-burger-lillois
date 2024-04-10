
import rate from './rate.js'

const restaurants = {
  init: function(){
    console.log('fichier restaurant chargé');
  },

  showRestaurant: async function(dataId){
        
    if (dataId == 0){
        const resultContainer = document.querySelector('.right-section__container')
        resultContainer.innerHTML=''
        const alertElement = document.createElement('p')
        alertElement.classList.add('message')
        alertElement.textContent = 'Veuillez sélectionner un quartier'
        resultContainer.appendChild(alertElement)
    } else{
        try {
            const httpResponse = await fetch("http://localhost:8000/api/district/" + dataId + '/restaurant')

            const jsonRestaurant = await httpResponse.json()
    
            const resultContainer = document.querySelector('.right-section__container')
            resultContainer.innerHTML=''
    
            for( let restaurant of jsonRestaurant){
              restaurants.addNewElementsToDom(restaurant)
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

    firstDivElement.setAttribute('data-rating', newElement.rank)

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

    const ulElement=document.createElement('ul')
    thirdDivElement.appendChild(ulElement)

    const adressElement= document.createElement('li')
    adressElement.textContent = 'Adresse : ' + newElement.adress
    ulElement.appendChild(adressElement)

    const rankElement= document.createElement('li')
    rankElement.textContent = 'Note : ' + newElement.rank + '/5'
    ulElement.appendChild(rankElement)

        //Configuration Li horaires et formatage d'heure
    const HoursElement = document.createElement('li');

        // Ouverture
    const openHours = newElement.opening_hours
    const newOpenHour = restaurants.formatHours(openHours)

        // Fermeture
        const closeHours = newElement.closing_hours
        const newCloseHour = restaurants.formatHours(closeHours)
    
    HoursElement.textContent = 'Horaires : ' + newOpenHour + ' - ' + newCloseHour
    ulElement.appendChild(HoursElement)

    rate.filterElements()

  },

  formatHours: function(hours){
    const splitHours = hours.split(':')
    const newHour = parseInt(splitHours[0])
    return newHour + 'h'
  }     
}

export default restaurants;