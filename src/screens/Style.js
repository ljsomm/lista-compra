import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    content: {
        flex: 1,
        padding: 30,
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    viewCenter:{
        alignItems: 'center'
    },
    logo:{
        bottom: 75
    },
    configOption: {
        fontFamily: 'century-gothic',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#8A8A8A',
        fontSize: 17.5
    },
    logout: {
        fontFamily: 'century-gothic',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#8A8A8A',
        color: 'red',
        fontSize: 17.5
    }

});

export default Style;