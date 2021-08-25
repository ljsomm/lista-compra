import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

export default props => (
    <TouchableHighlight onPress={props.onclick}>
        <Text>{props.children}</Text>
    </TouchableHighlight>
);