
const score = document.querySelector('#score');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
let input = document.querySelector('#input');
const submit = document.querySelector('#submit');

let count = 0;

submit.addEventListener('click', () => {
    let val = input.value.trim(); 
    let valNum = Number(val); 
    let mult = num1.textContent * num2.textContent; 
    
    if (val === '') {
        alert("Please enter a number.");
    } else if (valNum === mult) {
        
        count++; 
        score.textContent = count;
        alert("Your answer is right!");
    } else {
        
        alert("Your answer is wrong.");
    }

    input.value = '';

    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10);
});
