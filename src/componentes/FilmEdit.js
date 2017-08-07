import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import CheckBox from 'react-native-checkbox';
import FilmForm from './FilmForm';
import { filmUpdate, filmSave, filmDelete, formClosed } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

export class FilmEdit extends Component {
    state = {showModal: false};

    componentWillMount() {
        _.each(this.props.film, (value, prop) => {
            this.props.filmUpdate({prop, value});
        });
    }

    componentWillUnmount() {
        this.props.formClosed();
    }

    onButtonPress() {
        const { name, numberOfSeasons, numberOfSeries, seasons } = this.props;

        this.props.filmSave({name, numberOfSeasons, numberOfSeries, seasons, uid: this.props.film.uid});
    }


    onAccept() {
        const { uid } = this.props.film;

        this.props.filmDelete({uid});
    }

    onDecline() {
        this.setState({showModal: false});
    }

    renderHeader(section, i) {

        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Season {(i + 1).toString()}</Text>
            </View>
        );
    }

    renderContent(section, seasonNumber) {
        return (<View style={styles.content}>
            {section.map((value, serieNumber)=> {
                return (

                    <CheckBox
                        key={serieNumber}
                        label={(serieNumber+1).toString()}
                        checked={value.watched}
                        onChange={(checked)=>{
                            let seasonsMod = [...this.props.seasons];
                            seasonsMod[seasonNumber][serieNumber].watched = !checked;
                            this.props.filmUpdate({ prop: 'seasons', value:seasonsMod })
                                 }}
                    />)
            })}
        </View>);
    }


    render() {
        return (
            <ScrollView>
                <Card style={styles.container}>
                    <FilmForm />
                    <Accordion
                        sections={this.props.seasons}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent.bind(this)}
                    />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save Changes
                        </Button>
                    </CardSection>


                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                            Delete Film
                        </Button>
                    </CardSection>

                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this film?
                    </Confirm>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
});

const mapStateToProps = (state) => {
    const { name, numberOfSeasons, numberOfSeries, seasons } = state.filmForm;

    return {name, numberOfSeasons, numberOfSeries, seasons};
};

export default connect(mapStateToProps, {
    filmUpdate, filmSave, filmDelete, formClosed
})(FilmEdit);
