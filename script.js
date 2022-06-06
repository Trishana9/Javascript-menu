const openModalButtons = document.querySelector('.pop-out')
const nav = document.querySelector('.nav-links')
const closeModalButtons = document.querySelector('.pop-in')
const overlay = document.getElementById('overlay')

openModalButtons.addEventListener('click' ,() =>{
    nav.classList.remove('sm:-left-full')
    overlay.classList.remove('hidden')
})


closeModalButtons.addEventListener('click' ,() =>{
    nav.classList.add('sm:-left-full')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click' ,() =>{
    nav.classList.add('sm:-left-full')
    overlay.classList.add('hidden')
})





  

