import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { filmUpdate } from '../actions';
import { CardSection, Input } from './common';

class FilmForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name of film"
                        placeholder="Big bang teory"
                        value={this.props.name}
                        onChangeText={value => this.props.filmUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Number of seasons"
                        placeholder="4"
                        value={String(this.props.numberOfSeasons)}
                        onChangeText={value => this.props.filmUpdate({ prop: 'numberOfSeasons', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Number of series per season"
                        placeholder="10"
                        value={String(this.props.numberOfSeries)}
                        onChangeText={value => this.props.filmUpdate({ prop: 'numberOfSeries', value })}
                    />
                </CardSection>



            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, numberOfSeasons, numberOfSeries } = state.filmForm;

    return { name, numberOfSeasons, numberOfSeries };
};

export default connect(mapStateToProps, { filmUpdate })(FilmForm);
