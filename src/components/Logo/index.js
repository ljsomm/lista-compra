import React from 'react';
import { Image } from 'react-native';


export default props=>(
    <Image style={props.style} source={require("../../assets/images/logo.png")}/>
);