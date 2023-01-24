import React from "react";
import {Text, View} from "react-native";

const index = () => {
    return (
        <View>
            <Text style={{fontSize: 24, alignSelf: 'right',}}>HomeScreen</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    },
});

export default index