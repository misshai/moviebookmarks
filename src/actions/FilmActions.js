import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {FILM_CREATE,
    FILM_UPDATE,
    FILMS_FETCH_SUCCESS,
    FILM_SAVE_SUCCESS,
    FORM_CLOSED} from './types';

export const filmCreate = ({ name, numberOfSeasons, numberOfSeries }) => {
    const { currentUser } = firebase.auth();

    const seasons = [];
    for (let k = 0; k < numberOfSeasons; k++) {
        seasons[k] = [];
        for (let m = 0; m < numberOfSeries; m++) {
            seasons[k][m] = {watched: false};
        }
    }

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/films`)
            .push({name, seasons, watched: false})
            .then(() => {
                dispatch({type: FILM_CREATE});
                Actions.filmList({type: 'reset'});
            });
    };
};

export const filmsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/films`)
            .on('value', snapshot => {
                dispatch({type: FILMS_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };
};

export const filmUpdate = ({ prop, value }) => {
    return {
        type: FILM_UPDATE,
        payload: {prop, value}
    };
};


export const formClosed = () => {
    return {
        type: FORM_CLOSED

    };
};


export const filmSave = ({ name, numberOfSeasons, numberOfSeries, seasons, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/films/${uid}`)
            .set({name, numberOfSeasons, numberOfSeries, seasons})
            .then(() => {
                dispatch({type: FILM_SAVE_SUCCESS});
                Actions.filmList({type: 'reset'});
            });
    };
};

export const filmDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/films/${uid}`)
            .remove()
            .then(() => {
                Actions.filmList({type: 'reset'});
            });
    };
};

