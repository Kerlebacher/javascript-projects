// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
// function divide (num, denom) {
//     (num/denom)
// };
// Your function should return the result of numerator / denominator.
console.log(divide(3,0));
// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide (num, denom) {
    if (denom === 0){
        throw Error('You cannot divide by zero!');
    }
    return num/denom;
}