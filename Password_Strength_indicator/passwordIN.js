const inputfild = document.querySelector('#password');
const outputfild = document.querySelector('#output');

inputfild.addEventListener('input', () => {
    const inputvalue = inputfild.value;
    if (inputvalue.length < 8) {
        outputfild.innerText = "password is too shrot";
        outputfild.style.color = 'red'
    } else {
        outputfild.innerText = "password is long enough";
        outputfild.style.color = 'green'

        //a-z
        //A-Z
        //0-9
        //special characters  `~!@#$%^&*( )_+-={ }[ ]\|:;"'< >,.?/
        console.log("is lowear case", inputvalue.search(/[a-z]/) == -1);
        if (inputvalue.search(/[a-z]/) == -1) {
            outputfild.innerText = "password is missing a lowercase letter";
            outputfild.style.color = 'red'
        } else if (inputvalue.search(/[A-Z]/) == -1) {
            outputfild.innerText = "password is missing a uppercase letter";
            outputfild.style.color = 'red'
        }
        else if (inputvalue.search(/[0-9]/) == -1) {
            outputfild.innerText = "password is missing a Numeric letter";
            outputfild.style.color = 'red'
        }
        else if (inputvalue.search(/[!\@\#\$\%\^\&\*\()\_\+\{\}\:\"\<\>\?\|\[\]\;\'\,\.]/) == -1) {
            outputfild.innerText = "password is missing a special characters  ";
            outputfild.style.color = 'red'
        }
        else {
            outputfild.innerText = "password is strong";
            outputfild.style.color = 'green'
        }
    }
})

