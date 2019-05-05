import Book from './book.js';

export default class BookShelf {

    constructor(books) {
        this.books = books;
    }

    * read(item) {
        yield* item;
    }

    showAllBooks() {
        for (let book of this.read(this.books)) {
            let stories = document.getElementsByClassName('stories')[0];
            let newStory = document.createElement('div');

            newStory.innerHTML = `<h2>${book.title}</h2><p>${book.template}</p>`;
            stories.appendChild(newStory);
        }

    }
}

let story = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

let book1 = new Book(1, 'Nick', 18, story);
let book2 = new Book(2, 'John', 25, story);
let book3 = new Book(3, 'Mike', 12, story);

let bookshelf = new BookShelf([book1, book2, book3]);

bookshelf.showAllBooks();
