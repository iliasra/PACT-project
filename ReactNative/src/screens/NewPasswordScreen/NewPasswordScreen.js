import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();
   
    const onForgotPressed = () => {
        console.warn("réinitialiser")
    }

    const onSignInPressed = () => {

        navigation.navigate("SignIn")
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Réinitialisez votre mot de passe</Text>

            <CustomInput 
                placeholder="Entrez le code de vérification" 
                value={code} 
                setValue={setCode} 
                secureTextEntry={false}/>
            
            <CustomInput 
                placeholder="Entrez votre nouveau mot de passe" 
                value={newPassword} 
                setValue={setNewPassword} 
                secureTextEntry={true}/>

            <CustomButton 
            text="Réinitialiser votre mot de passe" 
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

export default NewPasswordScreen