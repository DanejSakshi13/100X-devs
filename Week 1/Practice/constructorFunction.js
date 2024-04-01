/*Create a constructor function for a Book with properties like title, author, and publication year.
Instantiate a few book objects and log their details. */


class Book{
    constructor() {
        this.books = [];
    }
    addNew(title,author,YoP,){
        const newBook = {
            title : title,
            author : author
    }
    this.books.push(newBook);
    // console.log(newBook);
    }
}

const myLib = new Book();
myLib.addNew("ABC","PQR");
myLib.addNew("LMN","XYZ")

console.log(myLib.books)