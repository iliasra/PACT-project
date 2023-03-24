//import react
import React, {useState, useContext} from "react"
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//import boutons
import CustomLogOut from "../../components/CustomLogOut"
import BoutonOK from "../../components/BoutonOK"
//import server
import SocketContext from "../../server/SocketContext.js";

const HomeScreen = () => {
    const navigation = useNavigation();
    
    const logOutButton = () => {
        navigation.navigate("SignIn")
    }
    
    //style consts
    const [zone1NeedsHelp, setZone1NeedsHelp] = useState(styles.squareZone1);
    const [zone2NeedsHelp, setZone2NeedsHelp] = useState(styles.squareZone2);
    const [zone3NeedsHelp, setZone3NeedsHelp] = useState(styles.squareZone3);
    const [zone4NeedsHelp, setZone4NeedsHelp] = useState(styles.squareZone4);

    //serveur
    const socket = useContext(SocketContext);

    //on recoit une alerte du serveur
    socket.on("loc1",(arg) => {
        {setZone1NeedsHelp({ ...styles.squareZone1, backgroundColor: 'red' });}})
    socket.on("loc2",(arg) => {
        {setZone2NeedsHelp({ ...styles.squareZone2, backgroundColor: 'red' });}})
    socket.on("loc3",(arg) => {
        {setZone3NeedsHelp({ ...styles.squareZone3, backgroundColor: 'red' });}})
    socket.on("loc4",(arg) => {
        {setZone4NeedsHelp({ ...styles.squareZone4, backgroundColor: 'red' });}})
    

    //une membre REC s'en est occupé
    //au PAN3 on va pas s'occuper de la réponse au serveur quand le problème est terminé
    const alertHandled =() => {
        setZone1NeedsHelp({ ...styles.squareZone1});
        setZone2NeedsHelp({ ...styles.squareZone2});
        setZone3NeedsHelp({ ...styles.squareZone3});
        setZone4NeedsHelp({ ...styles.squareZone4});
    }
    
    //test ui
    const alertTest = () => {
        setZone1NeedsHelp({ ...styles.squareZone1, backgroundColor: 'red' })}

    
    return (
        <ScrollView>
        <View style={styles.root1}>
            {/*title*/}
            <Text style={styles.megatitle}>Balance ton bip!</Text>

            {/*shapes*/}
            <View style={zone1NeedsHelp}>
                <Text style={styles.boxtitle}>Stand Photo</Text>
            </View>
           
            <View style={zone2NeedsHelp}>
                <Text style={styles.boxtitle}>Scène</Text>
            </View>
            
            <View style={zone3NeedsHelp}>
                <Text style={styles.boxtitle}>Entrée</Text>
            </View>
            
            <View style={zone4NeedsHelp}>
                <Text style={styles.boxtitle}>Bar</Text>
            </View>


            {/*declencher une alerte*/}
            <View style={styles.root1}>
            <CustomLogOut 
                text="Déclencher une alerte test"
                onPress={alertTest}
                type="TERTIARY"
            />
            </View>

            {/*alerte finie*/}
            <View style={styles.root1}>
            <BoutonOK 
                text="Clear Alert"
                onPress={alertHandled}
                type="PRIMARY"
            />
            </View>

            {/*Log Out Button*/}
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

    rootLogOut:{
        alignItems: 'center',
        padding: 20,
        flex:1,
        position:"relative",
        marginTop: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 20,
    },
    boxtitle:{
        fontSize: 15,
        color: '#051C60',
        padding:25,
    },

    megatitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 15,
        padding:30,
        marginTop:30,
        marginBottom:50
    },
    

    //les styles des carrés
    squareZone1: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:20,
        marginLeft:-100,
        borderColor:"black",
        borderWidth:4,
        borderBottomWidth:0,
        borderRightWidth:0
        },
    squareZone2: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:-100,
        marginLeft:100,
        borderColor:"black",
        borderWidth:4,
        borderBottomWidth:0
        },
    squareZone3: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:0,
        marginLeft:-100,
        borderColor:"black",
        borderWidth:4,
        borderRightWidth:0
        },
    squareZone4: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginTop:-100,
        marginLeft:100,
        borderColor:"black",
        borderWidth:4
        }
});

export default HomeScreen