import React from 'react';
import { View } from 'react-native';
import  DismissKeyboardHOC  from './DismissKeyboardHOC';

const Card = (props) => {
    return (
        <DismissKeyboardView style={[styles.containerStyle, props.style]}>
            {props.children}
        </DismissKeyboardView>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
const DismissKeyboardView = DismissKeyboardHOC(View)
export { Card };
