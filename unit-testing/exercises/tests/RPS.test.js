const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("Returns PLAYER 1 wins when both player 1 enters 'scissors' and player 2 enters 'paper'", function() {
     let output = whoWon(("scissors"),("paper"));
     expect(output).toEqual('Player 1 wins!');
  });
 });

 describe("whoWon", function(){

    test("Returns Player 2 wins when player 1 enters 'scissors' and player 2 enters 'rock' ", function() {
        let output = whoWon(('scissors'),('rock'));
        expect(output).toBe('Player 2 wins!');
  });
 });

 describe("whoWon", function(){

    test("Returns Player 2 wins when player 1 enters 'paper' and player 2 enters 'scissors' ", function() {
        let output = whoWon(('paper'),('scissors'));
        expect(output).toBe('Player 2 wins!');
  });
 });

 describe("whoWon", function(){

    test("Returns TIE when both players enter 'rock'", function() {
     let output = whoWon(("rock"),("rock"));
     expect(output).toEqual('TIE!');
  });
 });
