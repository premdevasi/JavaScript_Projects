const input = document.querySelector('#input');
const button = document.querySelector('#button');
const output = document.querySelector('#output');


button.addEventListener("click", ()=>{
   console.log(input.value);
   if(input.value == ""){
    alert("Please enter your date of birth")
   }else{
    input.value
    const dob = new Date(input.value);
    const dob_year = dob.getFullYear();
    console.log(dob_year);

    //current 
    const now = new Date();
   const currDate =  now.getFullYear();
   console.log(currDate);

   const age = currDate - dob_year;
     output.textContent = age

     input.value = '';
   }

});