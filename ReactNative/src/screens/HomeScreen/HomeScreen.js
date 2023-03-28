<<<<<<< HEAD
import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, Image, Alert, ScrollView} from "react-native";
import photoVictime from "../../../assets/images/photoVictime.jpg";
import photoVictime2 from "../../../assets/images/photoVictime2.jpg";
import RAS from "../../../assets/images/RAS.png";
import ALERT from "../../../assets/images/ALERT.png";
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import { io } from "socket.io-client";
import SocketContext from '../../SocketContext.js';
import { Buffer } from 'buffer';

var nom = 'Aucun';
var prenom = 'Aucun';
let loc = 'Aucune';


const HomeScreen = () => {

    const Buffer = require('buffer').Buffer
    const [text, setText] = useState('');
    const [AlertText, setAlertText] = useState('Aucune alerte n\'est à signaler');
    const [source, setSource] = useState(RAS);
    const [photoUrl, setPhotoUrl] = useState('http://137.194.210.159:80/photoInit');
    const [textColor, setColor] = useState("#696969");
    const socket = useContext(SocketContext);

=======
//les import react
import React, {useState, useContext} from "react"
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//les import boutons
import CustomLogOut from "../../components/CustomLogOut"
import BoutonOK from "../../components/BoutonOK"
//l'import server
import SocketContext from "../../server/SocketContext.js";

const HomeScreen = () => {
    const navigation = useNavigation();
    
    const logOutButton = () => {
        navigation.navigate("SignIn")
    }
    
>>>>>>> origin/ReactColin
    //style consts
    const [zone1NeedsHelp, setZone1NeedsHelp] = useState(styles.squareZone1);
    const [zone2NeedsHelp, setZone2NeedsHelp] = useState(styles.squareZone2);
    const [zone3NeedsHelp, setZone3NeedsHelp] = useState(styles.squareZone3);
    const [zone4NeedsHelp, setZone4NeedsHelp] = useState(styles.squareZone4);

<<<<<<< HEAD


    socket.on("hello", (arg) => {
        console.log(arg); // world
        setText(arg);
    });
    socket.on('loc', (arg) => {
        setText('La victime se trouve dans la zone ' + arg);
    });
    socket.on('photo', (arg) => {
            fetch('http://137.194.210.159:80/photo/' + arg)
                .then(response => response.blob())
                .then(blob => {
            const url = URL.createObjectURL(blob);
            setPhotoUrl(url);
            console.log(photoUrl);
    
      })
      .catch(error => console.log(error));
    });
    socket.on('nom', (arg) => {
        nom = arg;  
    });
    socket.on('prenom', (arg) => {
        prenom = arg;
    });
    socket.on('alert', (arg) => {
        setText('Alerte: ' +nom + prenom+ ' est en danger dans la zone' + loc);
        setSource(ALERT);
        setAlertText('ALERTE ' + nom + prenom+ ' est en danger dans la zone ' + loc);
        setColor("#FF0000");
    });

    const onPress = () => {
        setSource(ALERT);
        setAlertText('ALERTE \n' + nom +' '+ prenom+ ' est en danger dans la zone ' + loc);
        setColor("#D90404");
        fetch('http://137.194.210.159:80/photo')
            .then(response => response.blob())
            .then(blob => {
        const url = URL.createObjectURL(blob);
        setPhotoUrl(url);
        console.log(photoUrl);

  })
  .catch(error => console.log(error));
    }  
    
    return (
        <ScrollView>
        <View>
            <Image source={source} style={{width: 50, height: 50, alignSelf: 'center', marginTop: 15}}/>
            <Text style={[styles.RAS, { color: textColor }]}>
                    {AlertText}
            </Text>
            
            <Image source={{ uri: photoUrl }} style={styles.photo} />
            <Text style={{fontSize: 24, alignSelf: 'center',}}></Text>
            <Text style={{fontSize: 24, alignSelf: 'center',}}>{text}</Text>

            <CustomButton 
            text="Image" 
            onPress={onPress}
            type="TERTIARY"
            />
            <CustomButton
            text="Alerte traitée?"
            onPress={() => {
                setSource(RAS);
                setAlertText('Aucune alerte n\'est à signaler');
                setColor("#696969");
            }}
            type="SEC"
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    photo: {
        alignSelf: 'center',
        width: '40%',
        height: '50%',
        maxWidth: 500,
        maxHeight: 375,
        marginBottom: 20,
    },
    alert: {
        fontSize: 33, 
        alignSelf: 'center', 
        marginTop: 15, 
        fontWeight: "600", 
        color: "#BF0413", 
        textAlign: true
    },
    RAS : {
        fontSize: 33, 
        alignSelf: 'center', 
        marginTop: 15, 
        fontWeight: "600", 
        textAlign: true
    }
});

export default HomeScreen;
=======
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
                <Text style={styles.boxtitle}>Zone 1</Text>
            </View>
           
            <View style={zone2NeedsHelp}>
                <Text style={styles.boxtitle}>Zone 2</Text>
            </View>
            
            <View style={zone3NeedsHelp}>
                <Text style={styles.boxtitle}>Zone 3</Text>
            </View>
            
            <View style={zone4NeedsHelp}>
                <Text style={styles.boxtitle}>Zone 4</Text>
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
        fontSize: 16,
        color: '#051C60',
        padding:20,
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
>>>>>>> origin/ReactColin
