document.addEventListener('DOMContentLoaded', () => {
    const subItemElements = document.querySelectorAll('.vertical-nav__sub')
    const btnShowItemElements = document.querySelectorAll('.vertical-nav__btn-box')
    const btnShowNavElement = document.querySelector('#btn-open-nav')
    const verticalNav = document.querySelector('.vertical-nav')

    let opened = false

    for(let i = 0; i < btnShowItemElements.length ; i++){
        btnShowItemElements[i].addEventListener('click', function(e) {
            this.classList.toggle('open')
            subItemElements[i].classList.toggle('open')
        })
    }




    btnShowNavElement.addEventListener('click',function() {
        verticalNav.classList.toggle('close')
       
    })
})