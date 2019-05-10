export default class Book {
    constructor(character) {
        this.character = character;

        const {name, age, story} = this.character;

        this._template = `"${name}" is a story written in ${age}. ${story}`;
        this._linesOfStory = this._template.split('. ');
        this._i = 0;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        return {
            value: this._linesOfStory[this._i++],
            done: this._i >= this._linesOfStory.length,
        };
    }
}

const story = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

let book = new Book({name: 'Bai', age: '1994', story: story});

for (let sentence of book) {
    console.log(sentence);
}