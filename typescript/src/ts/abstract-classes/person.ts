import PeopleResultModel from '../interfaces/people-result.model';
import PeopleModel from '../interfaces/people.model';

export default abstract class Person implements PeopleResultModel {

    // protected constructor(
    //     name = '',
    //     films = []
    // ){}
    name: string;
    films: Array<string>;
    protected constructor(name: string, films: Array<string>) {
        this.name = name;
        this.films = films;
    }

    abstract get(url: string): object;
    abstract async _request<T>(url: string, options: {}): Promise<T>;

    abstract showData<T>(obj: PeopleModel): void;


    // public showData(obj: PeopleModel): void {
    //     const result = this.filterData<PeopleModel>(obj);
    //     console.log(result);
    // }
    //
    // private filterData<T>(obj: PeopleModel): PeopleResultModel {
    //     return {name: obj.name, films: obj.films};
    // }
}
