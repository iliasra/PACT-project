import React, {useState, useContext} from "react";
import {Text, View} from "react-native";
import Logo from '../../../assets/images/SquareLogo.jpg'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import { io } from "socket.io-client";
import { useEffect } from "react";
import SocketContext from '../../SocketContext.js';


const HomeScreen = () => {

    const Buffer = require('buffer').Buffer
    const [text, setText] = useState('');
    const socket = useContext(SocketContext);
    socket.on("hello", (arg) => {
        console.log(arg); // world
        setText(arg);
      });
    
    socket.on("photo:", (arg) => {
        const buffer = Buffer.from(arg, "base64");
        fs.writeFileSync("..\..\..\assets\images\photoVictime.jpg", buffer);
    });  
    
    return (
        <View>
            <Text style={{fontSize: 24, alignSelf: 'center',}}>HomeScreen</Text>
            <Text style={{fontSize: 24, alignSelf: 'center',}}>{text}</Text>
        </View>
        
    )
}

export default HomeScreen;