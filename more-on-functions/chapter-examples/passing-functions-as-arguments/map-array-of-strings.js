let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

let firstLetter = function (i) {
    return i[0];
};
let firstInitials = names.map(firstLetter);

console.log(firstInitials);
