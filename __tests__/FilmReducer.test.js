import filmReducer from '../src/reducers';
import { FILMS_FETCH_SUCCESS  } from '../src/actions/types';

describe('filmReducer', function () {
    it('should return the initial state', function () {
        expect(filmReducer(undefined, {})).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: false
            },
            filmForm:{
                name: '',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films:{}
        })
    });
    it('should react to an action with the type FILMS_FETCH_SUCCESS', function () {
        const films = [1,2,3];
        expect(filmReducer(undefined, {
            type: FILMS_FETCH_SUCCESS,
            payload: films
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: false
            },
            filmForm:{
                name: '',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films:films
        });
    });

});