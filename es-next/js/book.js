export default class Book {
    constructor(character) {
        this.character = character;

        const [name, age, story] = this.character;

        this.template = `"${name}" is a story written in ${age}. ${story}.`;
        let linesOfStory = this.template.split('. ');
        // console.log(Object.keys(linesOfStory[0]));

        // const range = (start, end) => {
        //     let i = start;
        //
        //     return {
        //         [Symbol.iterator]: () => ({
        //             next: () => ({
        //                 value: i++,
        //                 done: i <= end
        //             })
        //         })
        //     }
        // };
        //
        // for (let value of range(4, linesOfStory.length)) {
        //     console.log(value);
        // }


        // this.character = {
        //     id: id,
        //     name: name,
        //     age: age,
        //     story: story
        // };
        //
        // this.title = `Story ${this.character.id}`;
        //
    }
}

const story = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

new Book(['Bai', '1994', story]);

