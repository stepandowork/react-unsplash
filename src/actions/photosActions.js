import { FETCH_PHOTOS, SEARCH , CLEAR} from './types';
import PhotosService from '../services/PhotosService';

const photosService = new PhotosService();

export const fetchPhotos = (page) => dispatch => { 
    photosService.getPhotos(page)
    .then(photos => dispatch({
        type: FETCH_PHOTOS,
        payload: photos
    }));
}

export const search = (request, page) => dispatch => {     
    dispatch({
        type: CLEAR        
    })
    photosService.search(request, page)
        .then(photos => {            
            if(!photos.results.length) return;
            dispatch({
                type: SEARCH,
                request,
                payload: photos.results
        })})
}

export const scroll = (request, page) => dispatch => {
    if (!request) {
        photosService.getPhotos(page)
        .then(photos => dispatch({
            type: FETCH_PHOTOS,
            payload: photos
        }));
        return;
    }
    photosService.search(request, page)
        .then(photos => dispatch({
            type: SEARCH,
            request,
            payload: photos.results
        }))
}