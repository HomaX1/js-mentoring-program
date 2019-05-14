import Person from './abstract-classes/person';
import PeopleModel from './interfaces/people.model';

export default class Request<T> extends Person {
    get(url: string) {
        return this._request<T>(url, {method: 'GET'});
    }

     async _request<T>(url: string, options: {}): Promise<T> {
        return await fetch(url, options)
            .then((response) => response.json())
            .catch((error) => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }

    public showData(obj: PeopleModel): void {
        console.log({name: obj.name, films: obj.films});
    }
}
