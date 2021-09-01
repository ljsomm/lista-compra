import React from 'react';
import { View } from 'react-native';
import Logo from '../Logo';
import Title from '../Title';
import Style from './Style';

export default props => (
    <View style={Style.background}>
       
        <Logo style={{width: 75, height: 75}}/>
        <View style={{flex: 1, right: 25, alignItems: 'center'}}>
            <Title header={true}>{props.children}</Title>
        </View>
    </View>
);