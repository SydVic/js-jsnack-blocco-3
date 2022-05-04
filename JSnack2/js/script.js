// creare array vuoto
const originalArray = [];
let originalArrayNumbersSum = 0;
// chiedere all'utente i numeri da inserire nell'array
do {
    const userNumber = parseInt(prompt("Dimmi un numero.."));
    originalArray.push(userNumber);

    originalArrayNumbersSum += userNumber;

// farlo fino a quando la somma degli elementi è inferiore a 50
} while ( originalArrayNumbersSum < 50 );

console.log("originalArray" ,originalArray);
console.log("originalArrayNumbersSum" ,originalArrayNumbersSum);