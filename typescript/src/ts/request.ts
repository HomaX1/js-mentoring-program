import Person from './abstract-classes/person';
import PeopleResultModel from './interfaces/people-result.model';
import PeopleModel from './interfaces/people.model';

export default class Request<T> extends Person {

    constructor(name: string, films: Array<string>) {
        super(name, films);
    }

    get(url: string) {
        return this._request(url, {method: 'GET'});
    }

    async _request<T>(url: string, options: {}): Promise<T> {
        return await fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }

    showData<T>(obj: PeopleModel): void {
        console.log({name: obj.name, films: obj.films});
    }
}
