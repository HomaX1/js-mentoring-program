import Request from './request';
import PeopleModel from './interfaces/people.model';

(async () => {
    const request = new Request<PeopleModel>();
    const result = await request.get<PeopleModel>('https://swapi.co/api/people/1');

    console.log({name: result.name, films: result.films});
})();
