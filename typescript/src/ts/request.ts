import Person from './abstract-classes/person';

export default class Request<T> extends Person {

    get(url: string) {
        return this._request(url, {method: 'GET'});
    }

    async _request(url: string, options: {}): Promise<T> {
        return await fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }
}
