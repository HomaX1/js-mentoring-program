export default class Xhr {
    constructor() {
    }

    get(url) {
        return this._request(url, {method: 'GET'});
    }

    // post(url, data) {
    //     data = JSON.stringify(data);
    //     const options = Object.assign({method: 'POST'}, {body: data});
    //     return this._request(url, options);
    // }
    //
    // put(url, data) {
    //     data = JSON.stringify(data);
    //     const options = Object.assign({method: 'PUT'}, {body: data});
    //     return this._request(url, options);
    // }
    //
    // delete(url) {
    //     return this._request(url, {method: 'DELETE'});
    // }

    async _request(url, options) {
        return await fetch(url, options)
            .then((response) => response.json())
            .catch((error) => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }
}

const xhr = new Xhr();

(async () => {
    const getResult = await xhr.get('https://swapi.co/api');
    console.log(getResult);

    // const postResult = await xhr.post('https://swapi.co/api/people/2', {name: 'Leia'});
    // console.log(postResult);
    //
    // const putResult = await xhr.put('https://swapi.co/api/people/3', {name: 'Chui'});
    // console.log(putResult);
    //
    // const deleteResult = await xhr.delete('https://swapi.co/api/people/4');
    // console.log(deleteResult);
})();

