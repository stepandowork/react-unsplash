import { FETCH_PHOTOS, SEARCH, CLEAR } from '../actions/types';

const initialState = {    
    request: '',
    items: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTOS : {       
            return  {
                ...state,
                items: [...state.items, ...action.payload]
            }
        }
        case SEARCH : {            
            return {
                ...state,                
                request: action.request,
                items: [...state.items, ...action.payload]
            }
        }
        case CLEAR : {
            state.items = [];
        }
        default:
            return state;
    }
}