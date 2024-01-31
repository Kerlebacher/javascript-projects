function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

 const combArr = [happiness, words];
 
// Part A 
// for (i=0; i < 3; i++){
//    console.log(randomSelection(happiness));
//    console.log(randomSelection(words));
//  }
// Part B
function renderItem() {
  //randomly select an array
  let randArrIndex= Math.floor(Math.random() * combArr.length);
  //now select a random Item from that array (we need it's length to get a valid index)
  let randItemIndex = Math.floor(Math.random() * combArr[randArrIndex].length);
  console.log(combArr[randArrIndex][randItemIndex]);
}
console.log(renderItem(), renderItem()); // why does it print two items and two undefined terms?
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.