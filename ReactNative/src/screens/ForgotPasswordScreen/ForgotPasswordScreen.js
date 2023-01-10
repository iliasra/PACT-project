import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
   
    const onForgotPressed = () => {

        navigation.navigate("NewPasswordScreen"); 
    }

    const onSignInPressed = () => {

        navigation.navigate("SignIn")
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Réinitialisez votre mot de passe</Text>

            <CustomInput 
                placeholder="Entrez votre adresse Email" 
                value={email} 
                setValue={setEmail} 
                secureTextEntry={false}/>
            
            <CustomButton 
            text="Envoyer un mail de réinitialisation " 
            onPress={onForgotPressed}
            type ="PRIMARY"
            />

            <CustomButton 
            text="Retourner à la page de connexion"
            onPress={onSignInPressed}
            type="TERTIARY"
            />

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

export default ForgotPasswordScreen