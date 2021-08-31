
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
}
