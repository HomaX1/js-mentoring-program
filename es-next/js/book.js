export default class Book {
    constructor(id, name, age, story) {
        this.character = {
            id: id,
            name: name,
            age: age,
            story: story
        };

        this.title = `Story ${this.character.id}`;

        this.template = `Once upon a time there was ${this.character.name}. His age was ${this.character.age} years old 
        and here is his story. ${this.character.story}.`
    }
}

