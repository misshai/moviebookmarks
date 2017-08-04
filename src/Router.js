import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './componentes/LoginForm';
import FilmList from './componentes/FilmList';
import FilmCreate from './componentes/FilmCreate';
import FilmEdit from './componentes/FilmEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65, flex:1 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main">
                <Scene key="filmList"
                       component={FilmList}
                       title="List of Films"
                       rightTitle="Add"
                       onRight={() =>Actions.addFilm()}
                       leftTitle="Logout"
                       onLeft={() => firebase.auth().signOut() }
                />
                <Scene key="addFilm" component={FilmCreate} title="Add a film" />
                <Scene key="editFilm" component={FilmEdit} title="Edit a film" />
            </Scene>


        </Router>
    );
};

export default RouterComponent;
