import React from 'react';
import { Stylesheet, Image } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Main from '../screens/Main';

const Btab = createMaterialBottomTabNavigator();


export default ()=>(
    <Btab.Navigator initialRouteName="Principal" 
    activeColor="white"
    barStyle={{ backgroundColor: '#74CAEB' }}
    >
        <Btab.Screen name="Principal"
        options={{
            tabBarIcon: () => {
            return <Image style={{height: 25, width: 25}} source={require('../assets/icons/white-home.png')}/>
        }}}
        component={Main}/>
    </Btab.Navigator>
);