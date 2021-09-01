import React, { useState } from 'react';
import { TextInput } from 'react-native';
import Style from './Style';



export default props => {

    const [state, action] = useState("");
    if(props.isnumber){
        return(
            <TextInput value={state} onChangeText={text=>{action(text)}} keyboardType={'numeric'} placeholder={props.ph} secureTextEntry={false}  style={Style.input}/>
        )
    }
    else{
        if(props.pass){
            return(
                <TextInput value={state} onChangeText={text=>{action(text)}} placeholder={props.ph} secureTextEntry={true}  style={Style.input}/>
            )
        }
        else{
            return(
                <TextInput value={state} onChangeText={text=>{action(text)}} placeholder={props.ph} style={Style.input}/>
            )
        }
    }
    
};