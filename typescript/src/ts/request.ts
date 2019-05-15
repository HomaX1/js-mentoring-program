import Person from './abstract-classes/person';

export default class Request<T> extends Person {
    get<T>(url: string): Promise<T> {
        return this._request<T>(url, {method: 'GET'});
    }

     protected async _request<T>(url: string, options: {}): Promise<T> {
         try {
             const response = await fetch(url, options);
             return response.json();
         } catch (error) {
             throw new Error('There has been a problem with your fetch operation');
         }
    }
}
