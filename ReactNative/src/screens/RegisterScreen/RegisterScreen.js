import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView, TouchableNativeFeedback, NavigatorIOS} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from "@react-navigation/native"


const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswrord] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [text, setText] = useState('');
    const navigation = useNavigation();


    const onRegisterPressed = async () => {
        console.warn("Créer un compte")
        setText('text')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    
    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Créer un compte</Text>

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
            
            <CustomButton 
            text="Créer un compte" 
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
});

export default RegisterScreen