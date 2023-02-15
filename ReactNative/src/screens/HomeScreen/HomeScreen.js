import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
    const [test, setTest] = useState('');
    const navigation = useNavigation();
   
    const onAttemptConnection = () => {
        console.warn("veuillez attendre")
    }

    const logOutButton = () => {
        navigation.navigate("SignIn")
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Home Screen</Text>

            <CustomInput 
                placeholder="ça marche?" 
                value={test} 
                setValue={setTest} 
                secureTextEntry={false}/>
            
            <CustomButton 
            text="Connecter mon bipeur" 
            onPress={onAttemptConnection}
            type ="PRIMARY"
            />

            <CustomButton 
            text="Log out?"
            onPress={logOutButton}
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

export default HomeScreen