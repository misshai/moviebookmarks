import 'react-native';
import React from 'react';
import {Button, Card, CardSection, Header, Input, Spinner, Confirm, DismissKeyboardHOC} from '../src/componentes/common';
import renderer from 'react-test-renderer';


describe('Common components', function () {
    describe('<Button />', function () {
        it('renders correctly', function () {
            const tree = renderer.create(<Button />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('<Card />', function () {
        it('renders correctly', function () {
            const tree = renderer.create(<Card />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('<Header />', function () {
        it('renders correctly', function () {
            const tree = renderer.create(<Header />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('<Input />', function () {
        it('renders correctly', function () {
            const tree = renderer.create(<Input />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('<CardSection />', function () {
        it('renders correctly', function () {
            const tree = renderer.create(<CardSection />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('<Spinner />', function () {
        it('renders correctly', function () {
            const tree = renderer.create(<Spinner />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('<Confirm />', function () {
        it('renders correctly', function () {
            const tree = renderer.create(<Confirm />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});