import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView, TouchableNativeFeedback, NavigatorIOS} from 'react-native'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton"
import {useNavigation} from "@react-navigation/native"
import axios from "axios";

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswrord] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [text, setText] = useState('');
    const [pole, setPole] = useState('');
    const navigation = useNavigation();


    const onRegisterPressed = async () => {
        console.warn("Créer un compte")
        setText('text')
        navigation.navigate('HomeScreen')
    }
    const onAttemptConnection = () => {
        console.warn("veuillez attendre")
    }
    const [test, setTest] = useState('');

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.megatitle}>Créer un compte</Text>

            <CustomInput 
                placeholder="Entrez votre adresse Email" 
                value={email} 
                setValue={setEmail} 
                secureTextEntry={false}/>
            <CustomInput 
                placeholder="Entrez votre mot de passe" 
                value={password} 
                setValue={setPasswrord} 
                secureTextEntry={true}/>
            <CustomInput 
                placeholder="Confirmez votre mot de passe" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat} 
                secureTextEntry={true}/>
            <CustomInput 
                placeholder="REC ou élève?" 
                value={pole} 
                setValue={setPole} 
                secureTextEntry={false}/>
            
            <CustomInput 
                placeholder="Numero de bipeur" 
                value={test} 
                setValue={setTest} 
                secureTextEntry={false}/>
            
            
            <CustomButton 
            text="Créer un compte et connecter mon bipeur!" 
            onPress={onRegisterPressed}
            type ="PRIMARY"
            />

            <CustomButton 
            text="Vous avez un compte? Connectez-vous!"
            onPress={onSignInPressed}
            type="TERTIARY"
            />

            <Text>{text}</Text>

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

export default RegisterScreen