import filmFormReducer from '../src/reducers';
import { FILM_CREATE,
    FILM_UPDATE,
    FILM_SAVE_SUCCESS,
    FORM_CLOSED  } from '../src/actions/types';

describe('filmFormReducer', function () {
    it('should return the initial state', function () {
        expect(filmFormReducer(undefined, {})).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: false
            },
            filmForm: {
                name: '',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films: {}
        })
    });
    it('should react to an action with the type FILM_CREATE', function () {
        const films = [1, 2, 3];
        expect(filmFormReducer(undefined, {
            type: FILM_CREATE,
            payload: films
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: false
            },
            filmForm: {
                name: '',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films: {}
        });
    });
    it('should react to an action with the type FILM_SAVE_SUCCESS', function () {
        const films = [1, 2, 3];
        expect(filmFormReducer(undefined, {
            type: FILM_SAVE_SUCCESS,
            payload: films
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: false
            },
            filmForm: {
                name: '',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films: {}
        });
    });
    it('should react to an action with the type FORM_CLOSED', function () {
        const films = [1, 2, 3];
        expect(filmFormReducer(undefined, {
            type: FORM_CLOSED,
            payload: films
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: false
            },
            filmForm: {
                name: '',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films: {}
        });
    });
    it('should react to an action with the type FILM_UPDATE', function () {
        expect(filmFormReducer(undefined, {
            type: FILM_UPDATE,
            payload: {prop:'name', value: 'Big bang'}
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: false
            },
            filmForm: {
                name: 'Big bang',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films: {}
        });
    });

});