const hamburger = document.querySelector('.hamburger-menu-container');
const header = document.querySelector('.nav');
const closeIcon = document.querySelector('.close-icon')


hamburger.addEventListener('click', ()=>{
header.classList.add('menu-open');
})

closeIcon.addEventListener('click', ()=>{
header.classList.remove('menu-open');
})

