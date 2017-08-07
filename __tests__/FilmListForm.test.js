import 'react-native';
import React from 'react';
import {FilmList} from '../src/componentes/FilmList';
import renderer from 'react-test-renderer';

test('Film List Form', () => {
    const films = [];
    const component = renderer.create(
        <FilmList filmsFetch = {()=>{}} films = {films}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});