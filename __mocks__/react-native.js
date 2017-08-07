
const rn = require('react-native');

jest.mock('Linking', () => {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn(),
    }
});

jest.mock('../src/componentes/FilmForm', () => {
    const RealComponent = require.requireActual('View');
    const React = require('React');
    class FilmForm extends React.Component {
        render() {

            return React.createElement('View', this.props, this.props.children);

        }
    }
    return FilmForm;
});

jest.mock('react-native-collapsible/Accordion', ()=>{
    const RealComponent = require.requireActual('View');
    const React = require('React');
    class Accordion extends React.Component {
        render() {

            return React.createElement('View', this.props, this.props.children);

        }
    }
    return Accordion;
});



jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');
module.exports = rn;