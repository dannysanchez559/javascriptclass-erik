// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function

function isEvenOrOdd(num) {
    if (num % 2 === 1) {
        alert(`${num} is odd!`);
    } else if(num % 2 === 0) {
        alert(`${num} is even!`);
    } else {
        alert('Please enter a valid number.');
    }
}

const userNum = prompt("Enter a number:");
isEvenOrOdd(userNum);