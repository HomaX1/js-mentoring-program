import PeopleResultModel from '../interfaces/people-result.model';
import PeopleModel from '../interfaces/people.model';

export default abstract class Person implements PeopleResultModel {
    name = '';
    films = [];

    public showData(obj: PeopleModel): void {
        const result = this.filterData<PeopleModel>(obj);
        console.log(result);
    }

    private filterData<T>(obj: PeopleModel): PeopleResultModel {
        return {name: obj.name, films: obj.films};
    }
}
