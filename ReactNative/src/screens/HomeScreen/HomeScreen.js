import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import CustomLogOut from "../../components/CustomLogOut"
import BoutonSalle from "../../components/BoutonSalle"

const HomeScreen = () => {
    const navigation = useNavigation();
   
    const Square = () => {
        return <View style={styles.square} />;
      };

    const logOutButton = () => {
        navigation.navigate("SignIn")
    }

    return (
        <ScrollView>
        <View style={styles.root1}>
            <Text style={styles.megatitle}>Balance ton bip!</Text>

            <View style={styles.squareTopLeft}></View>
            <View style={styles.squareTopRight}></View>
            <View style={styles.squareBottomLeftAlert}></View>
            <View style={styles.squareBottomRight}></View>



            <View style={styles.rootLogOut}>
            <CustomLogOut 
                text="Log Out"
                onPress={logOutButton}
                type="TERTIARY"
            />
            </View>

        
        
        </View>
        

        
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root1:{
        alignItems: 'center',
        padding: 20,
    },
    rootSalle:{
        alignItems: 'center',
        position:"relative"
    },
    rootLogOut:{
        alignItems: 'center',
        padding: 20,
        flex:1,
        position:"relative",
        marginTop: 100
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
        marginTop:30
    },
    

    //la zone n'a pas d'alerte donc elle est blanche
    squareTopLeft: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:20,
        marginLeft:-100,
        borderColor:"black",
        borderWidth:4,
        borderBottomWidth:2,
        borderRightWidth:2
        },
    squareTopRight: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:-100,
        marginLeft:100,
        borderColor:"black",
        borderWidth:4,
        borderBottomWidth:2
        },
    squareBottomLeft: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:0,
        marginLeft:-100,
        borderColor:"black",
        borderWidth:4,
        borderRightWidth:2
        },
    squareBottomRight: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:-100,
        marginLeft:100,
        borderColor:"black",
        borderWidth:4
        },


    //la zone a une alerte donc elle est rouge
    squareTopLeftAlert: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        marginTop:20,
        marginLeft:-100,
        borderColor:"black",
        borderWidth:4,
        borderBottomWidth:2,
        borderRightWidth:2
        },
    squareTopRightAlert: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        marginTop:-100,
        marginLeft:100,
        borderColor:"black",
        borderWidth:4,
        borderBottomWidth:2
        },
    squareBottomLeftAlert: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        marginTop:0,
        marginLeft:-100,
        borderColor:"black",
        borderWidth:4,
        borderRightWidth:2
        },
    squareBottomRightAlert: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        marginTop:-100,
        marginLeft:100,
        borderColor:"black",
        borderWidth:4
        }
});

export default HomeScreen