import {
    FILM_CREATE,
    FILM_UPDATE,
    FILM_SAVE_SUCCESS,
    FORM_CLOSED
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    numberOfSeasons: '',
    numberOfSeries: '',
    seasons: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILM_CREATE:
            return INITIAL_STATE;
        case FILM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case FILM_SAVE_SUCCESS:
            return INITIAL_STATE;
        case FORM_CLOSED:
            return INITIAL_STATE;
        default:
            return state;
    }
};
