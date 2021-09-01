import React from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Style from './Style';
import Title from '../components/Title';
import { SafeAreaView, View } from 'react-native';
import Logo from '../components/Logo';

export default props =>(

    <SafeAreaView style={Style.content}>
        <View style={Style.viewCenter}>
            <Logo style={Style.logo}/>
        </View>
        <View>
            <Title>Login</Title>
        </View>
        <View>
            <TextField ph={"Usuário"}/>
            <TextField ph={"Senha"} pass={true}/>
        </View>
        <Button onclick={()=>{props.navigation.navigate("Tab")}}>Entrar</Button>
    </SafeAreaView>
        

)