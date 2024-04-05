const qrinput = document.querySelector('#qr-input');
const qrbutton = document.querySelector('#qr-button');
const qrimg   = document.querySelector('#qr-img');

qrbutton.addEventListener("click", function(){
    const inputValue = qrinput.value;
    console.log(inputValue);

    if( ! inputValue){
        alert('Please enter vaild url');
        
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example=${inputValue}`
        qrimg.alt = `OR code for ${inputValue}`
        qrinput.value = '';
    }
})