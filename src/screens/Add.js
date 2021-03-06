import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import TextField from '../components/TextField';
import Style from './Style';

export default props=>(
    <>
        <Header>Adicionar Produto</Header>
        <View style={Style.body}>
            <TextField  ph={"Nome do Produto"}/>
            <TextField isnumber={true} ph={"Quantia"}/>
            <Button>Adicionar</Button>
        </View>
    </>
);