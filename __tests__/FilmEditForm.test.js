import 'react-native';
import React from 'react';
import {FilmEdit} from '../src/componentes/FilmEdit';
import renderer from 'react-test-renderer';

test('Film Edit Form', () => {
    const component = renderer.create(
        <FilmEdit />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});