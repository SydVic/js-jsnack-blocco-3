// creare due array di lunghezze diverse
const firstArray = [3, 45, 72, 19, 95];
const secondArray = [67, 29, 20, 3, 78, 21, 84, 18];

// pushare elementi nell'array più corto fino a che entrambi hanno la stessa lunghezza
    // capire quale array è più corto
let shortestArray = [];
if (firstArray.length < secondArray.length) {
    shortestArray = firstArray;
} else {
    shortestArray = secondArray;
}

console.log("shortestArray", shortestArray);
    // pushare elementi nell'array più corto
    // fino a che il "controllo" ci dice che hanno la stessa lunghezza
    
// meglio ciclo while e basta e non do while perchè do while viene eseguito almeno una volta anche se sono della stessa lunghezza sin dall'inizio
while (shortestArray.length !== secondArray.length) {
    const newArrayElement = Math.floor(Math.random() * 100) + 1;
    shortestArray.push(newArrayElement);
}
console.log("shortestArray", shortestArray);
    
// do {
//     const newArrayElement = Math.floor(Math.random() * 100) + 1;
//     shortestArray.push(newArrayElement);
// } while (shortestArray.length !== secondArray.length);