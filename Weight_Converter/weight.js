const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener("input", () => {
    let inputValue = parseFloat(input.value);

    if (isNaN(inputValue)) {
        output.innerHTML = "Invalid input";
    } else {
        let weightInPounds = inputValue * 2.20462;
        output.innerHTML = `Your weight in pounds: ${weightInPounds.toFixed(2)}`;
    }
});