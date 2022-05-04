const numbersArray = [2, 86, 4, 53, 90, 127, 456, 21, 65];

const evenNumbersContainer = document.getElementById("even-numbers");
const oddNumbersContainer = document.getElementById("odd-numbers");


numbersArray.forEach(element => {
    if (element % 2 === 0) {
        evenNumbersContainer.innerHTML += `${element} `;
    } else {
        oddNumbersContainer.innerHTML += `${element} `;
    }
});
