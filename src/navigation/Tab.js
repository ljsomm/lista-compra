import React from 'react';
import { Stylesheet } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';

const Btab = createBottomTabNavigator();


export default ()=>(
    <Btab.Navigator screenOptions={{headerShown:false}} initialRouteName="Principal">
        <Btab.Screen name="Principal" component={Main}/>
    </Btab.Navigator>
);