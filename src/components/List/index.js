import React, { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import ListItem from '../ListItem';


export default () => {
    const [state, setState] = useState("");
    fetch("http://url:8080/produto").then(resp=>{if(resp.ok && resp.status == 200){return resp.json()}else{throw new Error("Deu ruim");}}).then(json=>setState({json, err: false})).catch(err=>setState({err:true}))
    if(!state.err){
        return(
            <FlatList data={state.json} keyExtractor={i=>i.id} renderItem={ListItem}/>
        );
    }
    else{
        
        return(
            <View style={{ marginTop: 100, flexDirection: 'column', alignItems: 'center'}}>
                <Image style={{width: 50, height: 50}} source={require('../../assets/icons/erro-404.png')}/>
                <Text style={{fontSize: 17.5, fontFamily: 'century-gothic'}}>OPS! Tivemos um erro ao carregar os itens :c</Text>
            </View>
            
        );
    }
    
}