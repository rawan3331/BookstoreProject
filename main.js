// Bookstore Project

// Book information is stored in a 2D array
let books = [
  [1, 'Start with why', 'Simon Sinek', 80.0, 13],
  [2, 'But how do it know', 'J. Clark Scott', 59.9, 22],
  [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
  [4, 'Zero to One', 'Peter Thiel', 45.0, 12],
  [5, "You don't know JS", 'Kyle Simpson', 39.9, 9]
];

// Function to add a new book
function addBook(id, title, author, price, quantity) {
  books.push([id, title, author, price, quantity]);
}

// Function to modify a book
function modifyBook(id, newTitle, newAuthor, newPrice, newQuantity) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][0] === id) {
      books[i][1] = newTitle;
      books[i][2] = newAuthor;
      books[i][3] = newPrice;
      books[i][4] = newQuantity;
      break;
    }
  }
}

// Function to delete a book
function deleteBook(id) {
  books = books.filter(book => book[0] !== id);
}

// Function to display book information
function displayBook(id) {
  for (let book of books) {
    if (book[0] === id) {
      console.log(`Book ID: ${book[0]}, Title: ${book[1]}, Author: ${book[2]}, Price: ${book[3]}, Quantity: ${book[4]}`);
      break;
    }
  }
}

// Function to query a book
function queryBook(id) {
  for (let book of books) {
    if (book[0] === id) {
      return book;
    }
  }
  return null;
}

// Function to sell a book and export an invoice
function sellBook(title, quantity, balance) {
  for (let book of books) {
    if (book[1] === title) {
      if (book[4] < quantity) {
        console.log('Not enough quantity in stock.');
        return;
      }
      let cost = book[3] * quantity;
      if (balance < cost) {
        console.log('Insufficient balance.');
        return;
      }
      book[4] -= quantity;
      console.log(`Invoice: Sold book: '${title}',Quantity: ${quantity}. Total cost: ${cost}. Remaining balance: ${balance - cost}.`);
      return;
    }
  }
  console.log('Book not found.');
}

// Test adding a new book
addBook(6, 'Eloquent JavaScript', 'Marijn Haverbeke', 30.0, 10);
console.log(books);  
console.log("modify book with id=6");
// Test modifying a book
modifyBook(6, 'Eloquent JavaScript, Third Edition', 'Marijn Haverbeke', 35.0, 15);
console.log(books);  

console.log("Delete book with id=6");
// Test deleting a book
deleteBook(6);
console.log(books);  
console.log("find book with id=1");
// Test displaying a book
displayBook(1);  

console.log("querying book with id=1");
// Test querying a book
console.log(queryBook(1));  
console.log("selling book with id=5");
// Test selling a book
sellBook('Start with why', 5, 500); 
console.log(books);  
