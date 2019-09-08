import {ENV} from '../config/env';

export default class PhotosService {
    constructor() {
        this.key = ENV.key;
        this.apiURL =  ENV.apiUrl;
    }

    async getPhotos(page) {
        try {
            let response = await fetch(`${this.apiURL}photos?page=${page ? page : 1}&client_id=${this.key}&per_page=10&order_by=popular`)
            .then(response=>response.json())
            .then(data=>data);
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async search(query, page) {
        try {
            let response = await fetch(`${this.apiURL}search/photos?query=${query}&client_id=${this.key}&page=${page ? page : 1}`)
            .then(response=>response.json())
            .then(searchResults=>searchResults);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}