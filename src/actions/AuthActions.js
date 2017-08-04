import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { PASSWORD_CHANGED,
    EMAIL_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER} from './types';


export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch((error) => loginUserFail(dispatch, error.message));
            });
    };
};

const loginUserFail = (dispatch, message) => {
    console.log(message);
    dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    firebase.auth().onAuthStateChanged((auth) => {
        if (!auth) {
            Actions.auth();
        }
    });
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};