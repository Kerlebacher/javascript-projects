const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
strTwo = str.slice(3) + str.slice(0,3);
console.log(strTwo);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} "looks like" ${strTwo}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let n = 3
n = input.question("How many letters do you want relocated?");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (n <= 9) { strTwo = str.slice(n) + str.slice(0,n);
    console.log(strTwo);
} else { console.log(` ${n} is too many letters to relocate. Pick a smaller number.`);
}