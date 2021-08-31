import React from 'react';
import { Text, View } from 'react-native';
import Style from './Style';

export default ({item}) => (
    <View style={Style.item}>
        <Text>{item.pname}</Text>
        <Text>{item.quantity}</Text>
    </View>
)