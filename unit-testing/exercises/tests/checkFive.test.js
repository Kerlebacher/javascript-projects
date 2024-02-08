const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Returns 2 is less than 5 when passed the number 2", function() {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5.");
 });
});
 describe("checkFive", function(){

    test("Returns 6 is greater than 5 when passed the number 6", function() {
     let output = checkFive(6);
     expect(output).toEqual("6 is greater than 5.");
  });
});
  describe("checkFive", function(){

    test("Returns 5 is equal to 5 when passed the number 5", function() {
     let output = checkFive(5);
     expect(output).toEqual("5 is equal to 5.");
  });
});
