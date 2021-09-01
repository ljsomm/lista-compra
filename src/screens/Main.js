import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import List from '../components/List';

export default props => (
    <SafeAreaView>
        <Header>Lista de Produtos</Header>
        <List/>
    </SafeAreaView>
)