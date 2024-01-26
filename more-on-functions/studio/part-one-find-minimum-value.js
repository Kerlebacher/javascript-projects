*/Sort Numbers For Real
Recall that using the sort method on an array of numbers produced an unexpected result, since JavaScript converts the numbers to strings by default. Let’s fix this!

Here is one approach to sorting an array:

Find the minimum value in an array,
Add that value to a new array,
Remove the entry from the old array,
Repeat steps 1 - 3 until the numbers are all in order.
  1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array.
/*

Hint: Use what you know about if statements to identify and store the smallest value within the array.
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(/* your code here */);
