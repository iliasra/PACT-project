import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native'

// au final je ne pense pas qu'on se serve de ce bouton
//a voir
const BoutonOK = ({onPress, text, type = "PRIMARY"}) => {
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


        alignItems: 'center',
        borderRadius: 5,
    },


    container_PRIMARY: {
        backgroundColor: '#ED00FF',
    },

    container_TERTIARY: {
        marginBottom: 25,
    },

    text: {
        fontWeight: 'bold',
    },

    text_PRIMARY: {
        color: "black"
    },

    text_TERTIARY: {
        color: "gray"
    },
})
export default BoutonOK