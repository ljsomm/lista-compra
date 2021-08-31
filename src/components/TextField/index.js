import React from 'react';
import { TextInput } from 'react-native';
import Style from './Style';

export default props => {
    if(props.pass){
        return(
            <TextInput placeholder={props.ph} secureTextEntry={true}  style={Style.input}/>
        )
    }
    else{
        return(
            <TextInput placeholder={props.ph} style={Style.input}/>
        )
    }
};