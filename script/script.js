// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables

let firstNumber = prompt("enter the first number");
let secondNumber = prompt("enter the second number");

console.log(firstNumber, typeof firstNumber);
console.log(secondNumber, typeof secondNumber);

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

console.log(firstNumber, typeof firstNumber);
console.log(secondNumber, typeof secondNumber);

// Compare the two numbers
// Alert the larger number

if (firstNumber > secondNumber) {
    console.log(`${firstNumber} is greater!`)
} else if(firstNumber === secondNumber) {
    console.log(`${firstNumber} is equal to ${secondNumber}!`)
} else {
    console.log(`secondNumber is greater!`);
}

