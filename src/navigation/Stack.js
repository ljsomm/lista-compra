import React from 'react';
import Login from '../screens/Login';
import Tab from './Tab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack  = createNativeStackNavigator();

export default ()=>(
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Tab" component={Tab}/>
    </Stack.Navigator>
)