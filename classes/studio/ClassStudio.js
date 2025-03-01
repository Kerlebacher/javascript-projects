//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
}
addScore(score) {
    this.scores.push(score);
}
average() {
    let sum = 0;
    for (let j = 0; j < this.scores.length; j++) {
        sum += this.scores[j];
    }
    return Math.round(10 * sum / this.scores.length) / 10;
}

status() {
    let avg = this.average();
    if(avg >= 90) {
        return "Accepted";
    } else if(avg >= 80) {
        return "Reserve";
    } else if(avg >= 70) {
        return "Probationary";
    } else {
        return "Rejected";
    }

}
}

let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);


// console.log(bubba);
// console.log(merry);
// console.log(glad);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
// bubba.addScore(83);
// console.log(bubba.scores);

// console.log(merry.average());

let candidates = [bubba, merry, glad];
for (let i=0; i <  candidates.length; i++) {
    console.log(`\n${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`);
}
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.