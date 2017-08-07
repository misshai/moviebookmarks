import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard, TouchableWithoutFeedback} from 'react-native'
import { filmCreate } from '../actions';
import { Card, CardSection, Button,DismissKeyboardHOC } from './common';
import FilmForm from './FilmForm';

export class FilmCreate extends Component {
    onButtonPress() {
        const { name, numberOfSeasons, numberOfSeries } = this.props;
        Keyboard.dismiss();
        this.props.filmCreate({name, numberOfSeasons, numberOfSeries});
    }

    onFormPress() {
        Keyboard.dismiss();
    }

    render() {
        return (
                <Card>
                    <FilmForm {...this.props} />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Create
                        </Button>
                    </CardSection>
                </Card>
        );
    }
}
const mapStateToProps = (state) => {
    const { name, numberOfSeries, numberOfSeasons } = state.filmForm;

    return {name, numberOfSeries, numberOfSeasons};
};

export default connect(mapStateToProps, {filmCreate})(FilmCreate);
