const principal = document.querySelector('#amout');
const interest = document.querySelector('#interest');
const tenure = document.querySelector('#time');
const  calculate = document.querySelector('#button');
const emi = document.querySelector('#output-span');

function calculateEMI() {
    if( principal.value === '' || interest.value === '' || tenure.value === '') {
        alert('Please enter all the values');
        return;
    }else{
        const p = principal.value;
        const r = interest.value / 1200;
        const n = tenure.value;
        const emiValue = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        emi.textContent = emiValue.toFixed(2);
    }
}

calculate.addEventListener('click', calculateEMI);

principal.value = '';
interest.value = '';
tenure.value = '';
