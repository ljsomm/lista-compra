import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import Style from './Style';

export default props => (
    <TouchableHighlight style={Style.btn} onPress={props.onclick}>
        <Text style={Style.txt}>{props.children}</Text>
    </TouchableHighlight>
);