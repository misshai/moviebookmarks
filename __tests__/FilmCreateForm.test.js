import 'react-native';
import React from 'react';
import {FilmCreate} from '../src/componentes/FilmCreate';
import renderer from 'react-test-renderer';



test('Film Create Form', () => {
    const component = renderer.create(
        <FilmCreate />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});