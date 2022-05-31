const openModalButtons = document.querySelector('.pop-out')
const nav = document.querySelector('.nav-links')
const closeModalButtons = document.querySelector('.pop-in')
const overlay = document.getElementById('overlay')

openModalButtons.addEventListener('click' ,() =>{
    nav.classList.add('active')
    overlay.classList.add('active')
})


closeModalButtons.addEventListener('click' ,() =>{
    nav.classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click' ,() =>{
    nav.classList.remove('active')
    overlay.classList.remove('active')
})





  

