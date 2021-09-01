import React from 'react'; 
import { Text } from 'react-native';
import Style from './Style';


export default props => {
    return(
        <Text style={props.header ? Style.header : Style.h1 }>{props.children}</Text>
    );
}