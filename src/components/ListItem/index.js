import React from 'react';
import { Text, View } from 'react-native';
import Style from './Style';

export default ({item}) => (
    <View style={Style.item}>
        <Text style={Style.itemText}>{item.name}</Text>
        <Text style={Style.itemText}>{item.quantity}</Text>
    </View>
)