import 'react-native';
import React from 'react';
import {LoginForm} from '../src/componentes/LoginForm';
import renderer from 'react-test-renderer';

test('Login Form', () => {
    const component = renderer.create(
        <LoginForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});