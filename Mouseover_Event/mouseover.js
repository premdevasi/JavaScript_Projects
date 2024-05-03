const body = document.querySelector('body');
const innerbox1 = document.querySelector('.innerbox1');
const innerbox2 = document.querySelector('.innerbox2');
body.addEventListener("mouseover", (e)=>{
   const clintYVal = e.clientY;
   const clintXVal =  e.clientX;
   innerbox1.innerHTML = clintXVal;
   innerbox2.innerHTML = clintYVal;
});