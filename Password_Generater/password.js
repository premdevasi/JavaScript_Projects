const lengthp = document.querySelector('#length-number');
const uppercase = document.querySelector('#Uppercase');
const lowercase = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbol');
const pass_input = document.querySelector('#pass-input');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate')

// console.log(length.value);
// console.log(uppercase.checked);
// console.log(lowercase.checked);
// console.log(numbers.checked);
// console.log(symbol.checked);
// console.log(pass_input);
// console.log(copy);
// console.log(generate);

const uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
const nmberStr = '0123456789';
const symbolStr = '!@#$%^&*()_+';
let password = '';
generate.addEventListener("click", ()=>{

    let str = ''

  if(uppercase.checked){
    str += uppercaseStr;
  }
  if(lowercase.checked){
    str += lowercaseStr;
  }
  if(numbers.checked){
    str += nmberStr;
  }
  if(symbol.checked){
 str += symbolStr;
  }
  console.log(str, "str");
  
  for(let i =0;i<lengthp.value;i++){
 let index = Math.floor(Math.random() * str.length);
 console.log(index, "index");
 console.log("Math.random()", Math.random());
 console.log("Math.random() * str.length", Math.random() * str.length);
 console.log(str[index]);
 password += str[index]
  }
  console.log(password, "password");
  pass_input.value = password;
})

copy.addEventListener("click", ()=>{
 if(pass_input.value === ''){
  alert('Plese Generate a password First')
 }else{
  const newElement = document.createElement('textarea');
  newElement.value = pass_input.value;
  document.body.appendChild(newElement);
  newElement.select();
  document.execCommand('copy');
  alert('password Copied to Clickboard');
  newElement.remove();
 }
})