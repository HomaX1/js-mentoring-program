import Book from './book.js';

export default class BookShelf {

    constructor(books) {
        this.books = books;
    }

    * read(books) {
        for (let i = 0; i <= books.length; i++) {
            yield books[i];
        }
    }

    showAllBooks() {
        let sequence = [...this.read(this.books)];

        for (let book of sequence) {
            if (!book) return;

            for (let line of book) {
                console.log(line);
            }
        }
    }
}

const story = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const story2 = 'Cras ornare tincidunt diam, vel dapibus lectus dapibus vitae. Ut tempor massa a maximus pellentesque. Curabitur auctor mauris accumsan neque accumsan, vel ultrices nisi tempus. Donec mattis accumsan ipsum eget iaculis. Suspendisse pretium, enim eu congue facilisis, nisl diam molestie mi, eget vehicula erat massa eget tortor. Vivamus quis mollis turpis. Cras egestas justo id metus cursus commodo. Ut eget magna ac augue placerat lobortis sit amet ac elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam id malesuada massa, non sollicitudin est. Sed eget purus nunc. Suspendisse mauris ex, rutrum blandit rutrum ac, vehicula eget nibh.';

const book1 = new Book({name: 'Life', age: 2000, story: story});
const book2 = new Book({name: 'Benefits', age: 1998, story: story2});
const book3 = new Book({name: 'Faces', age: 1999, story: story});

const bookshelf = new BookShelf([book1, book2, book3]);

bookshelf.showAllBooks();
