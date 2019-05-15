import PeopleResultModel from '../interfaces/people-result.model';

export default abstract class Person implements PeopleResultModel {

     constructor(
        public name: string = '',
        public films: Array<string> = []
    ) {
    }

    abstract get<T>(url: string): Promise<T>;
    protected abstract async _request<T>(url: string, options: {}): Promise<T>;
}
