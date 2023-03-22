import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
   
    const onAttemptConnection = () => {
        console.warn("veuillez attendre")
    }

    const logOutButton = () => {
        navigation.navigate("SignIn")
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.megatitle}>Home Screen</Text>

            <CustomButton 
            text="Log out"
            onPress={logOutButton}
            type="TERTIARY"
            />

        </View>
        </ScrollView>
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
    megatitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 15,
        padding:30,
    },
});

export default HomeScreen