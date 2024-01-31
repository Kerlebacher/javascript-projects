
let chimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: idNum(),
   move: Math.round(Math.random() * 10)
};

let salamanderOne = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: idNum(),
   move: Math.round(Math.random() * 10)
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: idNum(),
   move: Math.round(Math.random() * 10)
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: idNum(),
   move: Math.round(Math.random() * 10)
};

let tardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: idNum(),
   move: Math.round(Math.random() * 10)
};

let candidates = [chimpOne, chimpTwo, beagleOne, tardigradeOne, salamanderOne];
// console.log( crew);

function idNum(max,min){
   arr=[];
   for (i = 0; i < max; i++) {
       x = Math.floor( Math.random() * max) + min;
       if(arr.includes(x) == true){
           i=i-1;
       }else{
           if(x>max==false){
               arr.push(x);
               return x;
           }
       }
   }
   
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
   let results = [], numSteps, turns;
   for (let i = 0; i < 5; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
console.log(fitnessTest());