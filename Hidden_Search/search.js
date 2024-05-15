const search = document.querySelector('.search-container');
const searchInput = document.querySelector('.input');
const searchIcon = document.querySelector('.button');

search.classList.remove('active');
searchIcon.addEventListener("click", ()=>{
  search.classList.toggle('active');
})