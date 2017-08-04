import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.editFilm({film: this.props.film});
    }

    render() {
        const { name ,lastWatchedSeason, lastWatchedSerie, hasWatched} = this.props.film;
        const {container ,titleStyle, lastWatchedStyle } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection style={container}>
                        <Text style={titleStyle}>
                            {name}
                        </Text>
                        {this.renderLastWatched()}

                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderLastWatched() {
        const { lastWatchedSeason, lastWatchedSerie, hasWatched} = this.props.film;
        const { lastWatchedStyle } = styles;
        if (hasWatched)
            return (
                <Text style={lastWatchedStyle}>
                    Last watched {lastWatchedSeason}:{lastWatchedSerie}
                </Text>);
        return (<Text style={lastWatchedStyle}>
            Not watched
        </Text>);
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    lastWatchedStyle: {
        fontSize: 13,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
};

export default ListItem;
