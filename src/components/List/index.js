import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem';
import Products from './prov';

export default () => {
    

    
    return(
    <FlatList
    data={Products}
    keyExtractor={i=>i.id}
    renderItem={ListItem}
    />);
}