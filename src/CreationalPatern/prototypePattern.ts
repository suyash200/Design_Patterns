/*
Also known as clone pattern .
 The pattern declares a common interface for all objects that support cloning.

 Real world analogy for this could be cellurlar division
*/

//lets startnp

class Book {
  constructor(public title: string, public author: string) {}

  // Clones this book object.
  clone(): Book {
    const book = Object.create(this);
    book.title = this.title;
    book.author = this.author;
    return book;
  }
}

const book1 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams");
const book2 = book1.clone();

console.log(book1 === book2); // false
console.log(book1.title === book2.title); // true
console.log(book1.author === book2.author); // true
