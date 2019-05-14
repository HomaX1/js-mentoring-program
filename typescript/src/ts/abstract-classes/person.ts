import PeopleResultModel from '../interfaces/people-result.model';
import PeopleModel from '../interfaces/people.model';

export default abstract class Person implements PeopleResultModel {

    constructor(
        public name: string = '',
        public films: Array<string> = []
    ) {
    }

    abstract get(url: string): object;
    abstract async _request<T>(url: string, options: {}): Promise<T>;

    abstract showData(obj: PeopleModel): void;
}
