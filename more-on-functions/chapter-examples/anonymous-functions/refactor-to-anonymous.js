// function reverse(str) {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// }

// console.log(reverse("LaunchCode"));

let reversed = function(str) {
  let reversedLettersArray = str.split('').reverse();
  return reversedLettersArray.join('');
}
console.log(reversed("LaunchCode"));
