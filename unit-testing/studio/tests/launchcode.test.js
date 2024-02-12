// launchcode.test.js code:
const launchcode = require('../index.js');

describe("launchcode", function(){

  test("The value of organization responds with nonprofit", function() {
   //How do you reference an object in a test statement??
  expect(launchcode.organization).toEqual("nonprofit");
});
});

describe("launchcode", function(){

  test("The value of executiveDirector responds with 'Jeff'", function() {
  let output = executiveDirector();
  expect(output).toEqual("Jeff");
});
});

describe("launchcode", function(){

  test("The value of percentageCoolEmployees responds with '100'", function() {
  let output = percentageCoolEmployees();
  expect(output).toEqual(100);
});
});

describe("launchcode", function(){

  test("The value of programsOffered responds with 'Web Development' in idex 0, 'Data analysis' in index 1, and '' in index 2 ", function() {
  expect(launchcode.programsOffered).toEqual(expect.arrayContaining(["Web Development", "Data Analysis", "Liftoff"]));
});
});

describe("launchcode", function(){

  test("The items in the array are equal to 3", function() {
  let output = launchcode(launchcode.programsOffered.length());
  expect(output).toEqual(3);
});
});
