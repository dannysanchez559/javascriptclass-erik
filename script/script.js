// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number


// input value (prompt box accepts as a string regardless)
let firstNumber = prompt("enter the first number");

// attempt to check if string can be converted to number
firstNumber = parseInt(firstNumber);

// if not, prompt user again to input a valid number
// while first number is not a valid number
while (Number.isNaN(firstNumber)) {
    // keep prompting user to enter a valid first number.
    firstNumber = prompt("please enter a valid firstNumber.");
    
}

// repeat logif for the second number.

let secondNumber = prompt("enter the second number");
secondNumber = parseInt(secondNumber);

while (Number.isNaN(secondNumber)) {
    secondNumber = prompt("please enter a valid secondNumber.");
    
}
    if (firstNumber > secondNumber) {
        alert(`${firstNumber} is greater!`)
    
    } else if(firstNumber === secondNumber) {
        alert(`${firstNumber} is equal to ${secondNumber}!`)
    
    } else {
        alert(`secondNumber is greater!`);
    }



