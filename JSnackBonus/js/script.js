// const numbersArray = [];

// for (let i = 0; i < 10; i++) {
//     numbersArray.push(getRndInteger(1, 100));
// }

// const evenNumbersContainer = document.getElementById("even-numbers");
// const oddNumbersContainer = document.getElementById("odd-numbers");


// numbersArray.forEach(element => {
//     if (element % 2 === 0) {
//         evenNumbersContainer.innerHTML += `${element} `;
//     } else {
//         oddNumbersContainer.innerHTML += `${element} `;
//     }
// });

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max -min + 1) ) + min;
// }

// CORREZIONE

const numbersArray = [];

for (let i = 0; i < 10; i++) {
    numbersArray.push(getRndInteger(1, 100));
}

const evenNumbersContainer = document.getElementById("even-numbers");
const oddNumbersContainer = document.getElementById("odd-numbers");


numbersArray.forEach(number => {
    (number % 2 === 0)
    ? addNumberToDOM(evenNumbersContainer, number)
    : addNumberToDOM(oddNumbersContainer, number);
});

function addNumberToDOM(container, number) {
    container.innerHTML += `${number} `;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max -min + 1) ) + min;
}