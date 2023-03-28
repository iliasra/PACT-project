import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native'


const CustomLogOut = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,

    },


    container_PRIMARY: {
        backgroundColor: '#FCBCB8',
    },

    container_TERTIARY: {
        marginBottom: 25,

    },

    text: {
        fontWeight: 'bold',
    },

    text_PRIMARY: {
        color: "white"
    },

    text_TERTIARY: {
        color: "gray"
    },
})
export default CustomLogOut