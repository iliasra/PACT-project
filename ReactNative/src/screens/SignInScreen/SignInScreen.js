import React, {useState} from "react"
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import Logo from "../../../assets/images/non_transparent.png"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'


//dropdown imports
import { Dropdown } from 'react-native-element-dropdown';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPasswrord] = useState('');

    
    //dropdownconsts
    const dropdowndata = [
        { label: 'Student', value: 'student' },
        { label: 'REC', value: 'REC' }
    ];
    const [selectedValue, setSelectedValue] = useState("tracos");


    const navigation = useNavigation();

    const onSignInPressed = () => {
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
                placeholder="Entrez votre adresse Email" 
                value={username} 
                setValue={setUsername} 
                secureTextEntry={false}/>
            <CustomInput 
                placeholder="Entrez votre mot de passe" 
                value={password} 
                setValue={setPasswrord} 
                secureTextEntry={true}/>
            
            
            <Dropdown
                /*labelfield='category picker'
                data={dropdowndata} 
                value={selectedValue}
                onChangeText={setSelectedValue}
                placeholder="category"
                searchPlaceholder="quelle categorie?"
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle = {styles.selectedTextStyle}
                styles={[styles.dropdown]}
                inputSearchStyle={styles.inputSearchStyle}*/
                />


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

    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    });


export default SignInScreen

