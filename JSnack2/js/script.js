// creare array vuoto

const originalArray = [];
let userNumber = 0;
let NumbersSum = 0;
// chiedere all'utente i numeri da inserire nell'array
// farlo fino a quando la somma degli elementi è inferiore a 50 
do {
    userNumber = parseInt(prompt("Dimmi un numero.."));
    if ((NumbersSum + userNumber) < 50) {
        originalArray.push(userNumber);
        console.log("originalArray" ,originalArray);
    }
    NumbersSum = NumbersSum + userNumber;

// farlo fino a quando la somma degli elementi è inferiore a 50
} while ( NumbersSum < 50 );

console.log("originalArray" ,originalArray);
console.log("NumbersSum" ,NumbersSum); 
