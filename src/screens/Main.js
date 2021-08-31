import React from 'react';
import {Text} from 'react-native';
import List from '../components/List';

export default props => (
    <>
        <Text style={{padding: 10, backgroundColor: '#74CAEB', color: 'white', textAlign: 'center', fontFamily: 'century-gothic', fontSize: 15}}>Lista de Produtos</Text>
        <List/>
    </>
)