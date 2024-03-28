const app = {
    init: function(){
        console.log('coucou');
        
        const formElement = document.querySelector('.left-section__form')
        formElement.addEventListener('submit', app.handleSubmit)
    },

    handleSubmit: function(event){
        event.preventDefault();
        
        const rightSection = document.querySelector('.right-section')
        
        if (!rightSection.classList.contains('active')){
            rightSection.classList.add('active')
        }
    }
}

document.addEventListener('DOMContentLoaded', app.init())