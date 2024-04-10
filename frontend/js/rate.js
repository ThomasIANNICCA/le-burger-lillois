const rate = {
  init: function(){

    const allCheckboxes = document.querySelectorAll('input[name=rating]')

    for (const checkbox of allCheckboxes){
        checkbox.addEventListener('change', rate.filterElements)
    }
  },

  filterElements: function() {
    const allCheckboxes = document.querySelectorAll('input[name=rating]');

    for (const checkbox of allCheckboxes) {
        const nbrStars = checkbox.value;
        const isChecked = checkbox.checked;

        const allRestaurantsToFilter = document.querySelectorAll(`.result-element[data-rating='${nbrStars}']`);
      
        for (const restaurant of allRestaurantsToFilter) {
            if (isChecked) {
                restaurant.classList.remove('result-element--hidden');
            } else {
                restaurant.classList.add('result-element--hidden');
            }
        }
    }
  }
};
export default rate;