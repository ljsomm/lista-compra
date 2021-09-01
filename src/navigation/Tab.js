import React from 'react';
import { Stylesheet, Image } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Main from '../screens/Main';
import Add from '../screens/Add';
import Settings from '../screens/Settings';
const Btab = createMaterialBottomTabNavigator();


export default ()=>(
    <Btab.Navigator initialRouteName="Principal" 
    activeColor="black"
    inactiveColor="#515151"
    barStyle={{ backgroundColor: '#84D3F2' }}
    >
        <Btab.Screen name="Adicionar"
        options={{
            tabBarIcon: () => {
            return <Image style={{height: 22.5, width: 22.5}} source={require('../assets/icons/plus.png')}/>
        }}}
        component={Add}/>
        <Btab.Screen name="Principal"
        options={{
        
            tabBarIcon: () => {
            return <Image style={{height: 22.5, width: 22.5}} source={require('../assets/icons/home.png')}/>
        }}}
        component={Main}/>
        <Btab.Screen name="Configurações"
        options={{
        
            tabBarIcon: () => {
            return <Image style={{height: 22.5, width: 22.5}} source={require('../assets/icons/setting.png')}/>
        }}}
        component={Settings}/>
    </Btab.Navigator>
);