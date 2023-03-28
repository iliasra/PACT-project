import React, {useState, useContext} from "react"
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/images/SquareLogo.png'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import SocketContext from '../../SocketContext.js';



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
    
      navigation.navigate('HomeScreen');

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
        width: '70%',
        maxWidth: 500,
        maxHeight: 375,
        marginBottom: 20,
    },
    signUp: {
        fontWeight: 'bold'
    },
    connectionRefused: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
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

