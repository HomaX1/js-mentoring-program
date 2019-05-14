import Request from './request';
import PeopleModel from './interfaces/people.model';

(async () => {
    const request = new Request<PeopleModel>();
    const result = await request.get('https://swapi.co/api/people/1');
    console.log(result);

    request.showData(result);
})();
