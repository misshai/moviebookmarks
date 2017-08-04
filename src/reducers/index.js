import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FilmFormReducer from './FilmFormReducer';
import FilmReducer from './FilmReducer';

export default combineReducers({
    auth: AuthReducer,
    filmForm: FilmFormReducer,
    films: FilmReducer
});