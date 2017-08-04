
console.ignoredYellowBox = [
    'Setting a timer'
];
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBc0Y8_CJjdP930-QYQ0kfb0fdFFg3WnnY",
            authDomain: "bookmarks-2f690.firebaseapp.com",
            databaseURL: "https://bookmarks-2f690.firebaseio.com",
            projectId: "bookmarks-2f690",
            storageBucket: "bookmarks-2f690.appspot.com",
            messagingSenderId: "366875360233"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>);
    }
}

export default App;
