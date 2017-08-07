import 'react-native';
import React from 'react';
import ListItem from '../src/componentes/ListItem';
import renderer from 'react-test-renderer';

test('List Item Form', () => {
    const filmMock ={ name:'' ,lastWatchedSeason:'', lastWatchedSerie:'', hasWatched:''};
    const component = renderer.create(
        <ListItem film = {filmMock}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});