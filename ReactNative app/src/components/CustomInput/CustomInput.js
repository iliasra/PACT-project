import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value ={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            placeholderTextColor='#A9A9AC' 
            style={styles.input} 
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5, 

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        color: 'black',
    },
})

export default CustomInput