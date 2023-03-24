import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import photoVictime from "../../../assets/images/photoVictime.jpg";
import photoVictime2 from "../../../assets/images/photoVictime2.jpg";
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import { io } from "socket.io-client";
import SocketContext from '../../SocketContext.js';
import { Buffer } from 'buffer';


const HomeScreen = () => {

    const Buffer = require('buffer').Buffer
    const [text, setText] = useState('');
    const [source, setSource] = useState();
    const [photoUrl, setPhotoUrl] = useState('http://137.194.210.159:80/photoInit');
    const socket = useContext(SocketContext);

    socket.on("hello", (arg) => {
        console.log(arg); // world
        setText(arg);
    });

    const onPress = () => {
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
        <View>
            <Image source={{ uri: photoUrl }} style={styles.photo} />
            <Text style={{fontSize: 24, alignSelf: 'center',}}>HomeScreen</Text>
            <Text style={{fontSize: 24, alignSelf: 'center',}}>{text}</Text>

            <CustomButton 
            text="Image" 
            onPress={onPress}
            type="TERTIARY"
            />
        </View>
        
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
    }
});

export default HomeScreen;