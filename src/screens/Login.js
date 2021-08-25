import React from 'react';
import {Text} from 'react-native';
import Button from '../components/Button';

export default props =>(
    <>
        <Text>Olá login</Text>
        <Button onclick={()=>{props.navigation.navigate("Tab")}}>Entrar</Button>
    </>
)