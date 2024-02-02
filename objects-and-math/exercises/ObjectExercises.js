
let chimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: ,
   move: Math.round(Math.random() * 10)
};

let salamanderOne = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: ,
   move: Math.round(Math.random() * 10)
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: ,
   move: Math.round(Math.random() * 10)
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: ,
   move: Math.round(Math.random() * 10)
};

let tardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: ,
   move: function (Math.round(Math.random() * 10)
};

let crew = [chimpOne, salamanderOne, chimpTwo, beagleOne, tardigradeOne];

for (let i = 0; i < crew.length; i++) {
   crew[i].astronautID = i + 1;
}
   

// Part 2
function crewReports (candidates) {
for (item in {}) {
 return console.log(`${this.name}'is a' ${this.species} '. They are '${this.age} 'years old and '${this.mass} 'kilograms. Their ID is '${this.astronautID}'.'`)
}
}
// console.log(crewReports(chimpOne));

//Part 3
function fitnessTest(candidates){
   let results = []

   for (const candidates of crewArr) {
       let numSteps = 0;
       let turns = 0;
       while(numSteps < 20){
       numSteps += candidates.move();
       turns++;
       }
       results.push(`${candidates.name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
console.log(fitnessTest());