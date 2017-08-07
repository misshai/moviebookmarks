import 'react-native';
import React from 'react';
import {FilmForm} from '../src/componentes/FilmForm';
import renderer from 'react-test-renderer';

test('Film  Form', () => {
    const component = renderer.create(
        <FilmForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});