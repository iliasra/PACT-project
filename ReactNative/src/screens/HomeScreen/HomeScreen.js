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

    
        //style consts
    const [zone1NeedsHelp, setZone1NeedsHelp] = useState(styles.squareZone1);
    const [zone2NeedsHelp, setZone2NeedsHelp] = useState(styles.squareZone2);
    const [zone3NeedsHelp, setZone3NeedsHelp] = useState(styles.squareZone3);
    const [zone4NeedsHelp, setZone4NeedsHelp] = useState(styles.squareZone4);
    const alertHandled =() => {
        setZone1NeedsHelp({ ...styles.squareZone1});
        setZone2NeedsHelp({ ...styles.squareZone2});
        setZone3NeedsHelp({ ...styles.squareZone3});
        setZone4NeedsHelp({ ...styles.squareZone4});
    }


    

    socket.on("hello", (arg) => {
        console.log(arg); // world
        setText(arg);
    });
    socket.on('loc', (arg) => {
        setText('La victime se trouve dans la zone ' + arg);
        switch (arg){
            case 1: 
            {setZone1NeedsHelp({ ...styles.squareZone1, backgroundColor: 'red' });};
            case 2: 
            {setZone2NeedsHelp({ ...styles.squareZone2, backgroundColor: 'red' });};
            case 3: 
            {setZone3NeedsHelp({ ...styles.squareZone3, backgroundColor: 'red' });};
            case 4: 
            {setZone4NeedsHelp({ ...styles.squareZone4, backgroundColor: 'red' });};


        }
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
                alertHandled;
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
        },
});

export default HomeScreen;