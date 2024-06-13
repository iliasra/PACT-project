import React, {useState, useContext} from "react"
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/images/SquareLogo.png'
import fete from '../../../assets/images/fete.png'
import alcool from '../../../assets/images/alcool.png'
import stop from '../../../assets/images/stop.png'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import {MotiView} from 'moti'
import SocketContext from '../../SocketContext.js';
import { Easing } from "react-native-reanimated"

const DATA = [
    {
      "key": "3571572",
      "title": "Multi-lateral intermediate moratorium",
      "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
      "image": fete
    },
    {
      "key": "3571747",
      "title": "Automated radical data-warehouse",
      "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
      "image": alcool
    },
    {
      "key": "3571680",
      "title": "Inverse attitude-oriented system engine",
      "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
      "image": stop
    },
    {
      "key": "3571603",
      "title": "Monitored global data-warehouse",
      "description": "We need to program the open-source IB interface!",
      "image": Logo
    }
  ]

const SignInScreen = () => {

    const socket = useContext(SocketContext);
    const [username, setUsername] = useState('');
    const [password, setPasswrord] = useState('');
    const [connectionRefused, setConnectionRefused] = useState('');
    const navigation = useNavigation();


    const onSignInPressed = () => {
    
      socket.emit("username:", username);
      socket.emit("password:", password);
      socket.emit("ConnectionRequest"); 
      //socket.emit("photo:");
      
      socket.on("ConnectionAccepted", () => {
        console.log("ConnectionAccepted");
        navigation.navigate('HomeScreen');
      });
        socket.on("ConnectionRefused", () => {
        console.log("ConnectionRefused");
        setConnectionRefused('Connexion refusée: mot de passe ou identifiant incorrect');
        });

      socket.on("disconnect", () => {
        console.log(socket.connected); // false
      });
    
      //navigation.navigate('HomeScreen');

    }
    
    const onForgotPressed = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    const onSignUpPressed = () => {
        navigation.navigate('RegisterScreen')
    }

    const {height} = useWindowDimensions();
    

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image source={Logo} 
            style={[styles.logo, {height: height*0.3}]} 
            resizeMode="contain"
            /> 
            {[...Array(3).keys()].map((index) =>{ 
            return (
            <MotiView
            from = {{opacity: 1, scale: 0.25}}
            animate = {{opacity: 0, scale: 1}}
            transition= {{
                type: 'timing',
                duration: 3000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                repeatReverse: false,
                loop: true,
            }}
            key={index}
            style={[StyleSheet.absoluteFillObject,styles.circle]}
            /> 
            );
            })}

            <CustomInput 
                placeholder="Entrez votre identifiant" 
                value={username} 
                setValue={setUsername} 
                secureTextEntry={false}/>

            <CustomInput 
                placeholder="Entrez votre mot de passe" 
                value={password} 
                setValue={setPasswrord} 
                secureTextEntry={true}/>

            <CustomButton 
            text="Se connecter" 
            onPress={onSignInPressed}
            type ="PRIMARY"
            />

            <CustomButton 
            text="Mot de passe oublié?" 
            onPress={onForgotPressed}
            type="TERTIARY"
            />

            <Text style={styles.signUp}>Vous n'avez pas encore de compte?</Text>

            <CustomButton 
            text="Créer un compte" 
            onPress={onSignUpPressed}
            type ="PRIMARY"
            />
            <Text style={styles.connectionRefused}>{connectionRefused}</Text>
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
        alignItems: 'center',
        width: '70%',
        maxWidth: 500,
        maxHeight: 375,
        marginBottom: 20,
    },
    signUp: {
        fontWeight: 'bold'
    },
    center: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    connectionRefused: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
    },
    circle: {
        width: 20,
        height: 60,
        borderRadius: 650,
        backgroundColor: '#f53d3d',
        marginLeft: '49%',
        marginTop: '25%',
    },
    megatitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 15,
        padding:30,
    }
    });


export default SignInScreen

