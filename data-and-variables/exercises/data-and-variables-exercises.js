// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
const mperkm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof mperkm);
// Calculate a space mission below
let milestoMars = distanceMars * mperkm;
let hourstoMars = milestoMars / shuttleSpeed;
let daystoMars = hourstoMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daystoMars + " days to reach Mars.");

// Calculate a trip to the moon below

// Print the results of the trip to the moon below