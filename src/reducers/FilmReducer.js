import {
    FILMS_FETCH_SUCCESS,
    FILM_SAVE_SUCCESS

} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILMS_FETCH_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
