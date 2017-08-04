import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { filmsFetch } from '../actions';
import ListItem from './ListItem';

class FilmList extends Component {
    componentWillMount() {
        this.props.filmsFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ films }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(films);
    }

    renderRow(film) {
        let filmItem = {...film};

        let {lastWatchedSerie,lastWatchedSeason,hasWatched} = this.getLastWatched(film.seasons);
        filmItem.numberOfSeasons = film.seasons.length;
        filmItem.numberOfSeries = film.seasons[0].length;
        filmItem.lastWatchedSerie = lastWatchedSerie;
        filmItem.lastWatchedSeason = lastWatchedSeason;
        filmItem.hasWatched = hasWatched;
        return <ListItem film={filmItem}/>;
    }

    getLastWatched(seasons) {
        let lastWatchedSerie = 0,
            lastWatchedSeason = 0,
            hasWatched = false;
        for (let i = seasons.length - 1; i >= 0; i--) {
            for (let j = seasons[i].length - 1; j >= 0; j--) {
                if (seasons[i][j].watched) {
                    hasWatched = true;
                    lastWatchedSeason = i+1;
                    lastWatchedSerie = j+1;
                    return {lastWatchedSerie, lastWatchedSeason, hasWatched};
                }
            }
        }
        return {lastWatchedSerie, lastWatchedSeason, hasWatched};
    }


    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}


const mapStateToProps = state => {
    const films = _.map(state.films, (val, uid) => {
        return {...val, uid};
    });

    return {films};
};

export default connect(mapStateToProps, {filmsFetch})(FilmList);

