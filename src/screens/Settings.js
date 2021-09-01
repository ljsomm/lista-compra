import React from 'react';
import { FlatList, Text } from 'react-native';
import Style from './Style';
import Header from '../components/Header';
export default props=>{ 

    const opt = [{id: 1, oname: "Configurações", nav: ()=>{console.log("Rota ainda não definida")}}, {id:2, oname: "Logout", nav: ()=>{props.navigation.navigate("Login")}}];

    return(
    <>
        <Header>Configurações</Header>
        <FlatList
            data={opt}
            keyExtractor={opt.id}
            renderItem={({item})=>{
                if(item.id != 2){
                    return(<Text style={Style.configOption} onPress={item.nav}>{item.oname}</Text>);
                }
                else{
                    return(<Text style={Style.logout} onPress={item.nav}>{item.oname}</Text>);
                }
                
            }}
        />
    </>
);
}