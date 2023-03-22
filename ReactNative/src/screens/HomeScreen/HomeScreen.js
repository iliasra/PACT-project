import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import CustomLogOut from "../../components/CustomLogOut"

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
        <View style={styles.root1}>
            <Text style={styles.megatitle}>Balance ton bip!</Text>
            <CustomLogOut 
            text="bouton 1"
            onPress={logOutButton}
            type="PRIMARY"
            />
            <View style={styles.root2}>
            <CustomLogOut 
                text="bouton 2"
                onPress={logOutButton}
                type="PRIMARY"
            />
        </View>
        </View>

        
        </ScrollView>
        /*<View style={styles.root2}>
            <CustomLogOut 
                text="bouton 2"
                onPress={logOutButton}
                type="PRIMARY"
            />
        </View>*/
    );
};

const styles = StyleSheet.create({
    root1:{
        alignItems: 'center',
        padding: 20,
    },
    root2:{
        alignItems: 'center',
        padding: 20,
        flex:1,
        position:"relative",
        bottom:
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