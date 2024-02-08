// launchcode.test.js code:
const launchcode = require('../index.js');

describe("launchcode", function(){

  test("The value of organization responds with nonprofit", function() {
  let output = launchcode(launchcode.organization);
  expect(output).toEqual("nonprofit");
});
});

describe("launchcode", function(){

  test("The value of executiveDirector responds with 'Jeff'", function() {
  let output = launchcode(launchcode.executiveDirector);
  expect(output).toEqual("Jeff");
});
});

describe("launchcode", function(){

  test("The value of percentageCoolEmployees responds with '100'", function() {
  let output = launchcode(launchcode.percentageCoolEmployees);
  expect(output).toEqual(100);
});
});

describe("launchcode", function(){

  test("The value of programsOffered responds with 'Web Development' in idex 0, 'Data analysis' in index 1, and '' in index 2 ", function() {
  let output0 = launchcode(launchcode.programsOffered[0]);
  expect(output0).toEqual("Web Development");
  let output1 = launchcode(launchcode.programsOffered[1]);
  expect(output1).toEqual("Data Analysis");
  let output2 = launchcode(launchcode.programsOffered[2]);
  expect(output2).toEqual("Liftoff");
});
});

describe("launchcode", function(){

  test("The items in the array are equal to 3", function() {
  let output = launchcode(launchcode.programsOffered.length());
  expect(output).toEqual(3);
});
});
