function makeLine(size) {
    let line = ''
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}
// console.log(makeLine(5));

function makeSquare(width) {
    let square = ''
    for (let i = 0; i < width; i++) {
square += (makeLine(width) + '\n');
    }
    return square;
}
// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = ''
    for (let i = 0; i < height; i++) {
rectangle += (makeLine(width) + '\n');
    }
    return rectangle;
}
// console.log(makeRectangle(5, 3));

function makeDownwardStairs (height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
}
return stairs;
}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numCharacters) {
    let spaces = ''
        for (i = 0; i < numSpaces; i++) {
        spaces += ' '
    }
return spaces + makeLine(numCharacters) + spaces;
}

// console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle;
}
// console.log(makeIsoscelesTriangle(5));

function makeDiamond (height) {
    let diamondtop = ''
    let diamondbottom = ''
    for (let i = 0; i < height; i++) {
        diamondtop += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    for (let j = height; j >= 0; j--) {
        diamondbottom += (makeSpaceLine(height - j - 1, 2*j + 1) + '\n');
    }
    return diamondtop + diamondbottom;
}

console.log(makeDiamond(5));