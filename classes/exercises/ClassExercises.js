// Define your Book class here:
class book {

    constructor(title, auhor, copyDate, ISBN, pages, checkoutNum, isdiscarded = false){
        this.title = title;
        this.author = author;
        this.copyDate = copyDate;
        this.ISBN = ISBN;
        this.pages = Pages;
        this.checkoutNum = checkoutNum;
        this.isdiscarded = isdiscarded;
    }

    checkout(used=1) {
        this.checkoutNum += used;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, auhor, copyDate, ISBN, pages, checkoutNum, isdiscarded = false){
        super(title, auhor, copyDate, ISBN, pages, checkoutNum, isdiscarded = false);
    }
    dispose(currentYear){
        if (currentYear - this.copyDate > 5) {
            this.isdiscarded = true;
        }
    }
}

class Novel extends Book {
    constructor(title, auhor, copyDate, ISBN, pages, checkoutNum, isdiscarded = false){
        super(title, auhor, copyDate, ISBN, pages, checkoutNum, isdiscarded = false);
    }
    dispose(){
        if (checkoutNum > 100) {
            this.isdiscarded = true;
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, 111111111111, 432, 32,);
let topSecretShuttleBuildingManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1)

// Code exercises 4 & 5 here: