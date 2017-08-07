import authReducer from '../src/reducers';
import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER  } from '../src/actions/types';

describe('authReducer', function () {
    it('should return the initial state', function () {
        expect(authReducer(undefined, {})).toEqual({
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
    it('should react to an action with the type EMAIL_CHANGED', function () {
        const email = 'kate@kate.com';
        expect(authReducer(undefined, {
            type: EMAIL_CHANGED,
            payload: email
        })).toEqual({
            auth: {
                email: email,
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
        });
    });
    it('should react to an action with the type PASSWORD_CHANGED', function () {
        const password = '123456';
        expect(authReducer(undefined, {
            type: PASSWORD_CHANGED,
            payload: password
        })).toEqual({
            auth: {
                email: '',
                password: password,
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
        });
    });
    it('should react to an action with the type LOGIN_USER_SUCCESS', function () {
        const user = {name:"Kate"};
        expect(authReducer(undefined, {
            type: LOGIN_USER_SUCCESS,
            payload: user
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: user,
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
        });
    });
    it('should react to an action with the type LOGIN_USER_FAIL', function () {
        const email = 'kate@kate.com';
        expect(authReducer(undefined, {
            type: LOGIN_USER_FAIL,
            payload: email
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: 'Authentication Failed.',
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
        });
    });
    it('should react to an action with the type LOGIN_USER', function () {
        const email = 'kate@kate.com';
        expect(authReducer(undefined, {
            type: LOGIN_USER,
            payload: email
        })).toEqual({
            auth: {
                email: '',
                password: '',
                user: null,
                error: '',
                loading: true
            },
            filmForm:{
                name: '',
                numberOfSeasons: '',
                numberOfSeries: '',
                seasons: [],
                loading: false
            },
            films:{}
        });
    });

});