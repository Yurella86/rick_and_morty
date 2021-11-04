
export default class QueryService {

    _apiBase = 'https://rickandmortyapi.com/api';

    async getResourse(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`Not fetch ${url}`)
        }
        return await response.json();
    }
    getCharacters() {
        return this.getResourse(`/character/`);
    }
    getCharactersPage(number) {
        return this.getResourse(`/character/?page=${number + 1}`);
    }
    getEpisodes() {
        return this.getResourse(`/episode/`);
    }
    getEpisodesPage(number) {
        return this.getResourse(`/episode/?page=${number + 1}`);
    }
    getLocations() {
        return this.getResourse(`/location/`);
    }
    getLocationsPage(number) {
        return this.getResourse(`/location/?page=${number + 1}`);
    }
}

const s = 'codeleet';
const indice = [4, 5, 6, 7, 0, 2, 1, 3];

function res() {
    var arr = new Object();
    for (let i = 0; i < s.length; i++) {

    }
    return arr;
}
console.log(res());

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);
