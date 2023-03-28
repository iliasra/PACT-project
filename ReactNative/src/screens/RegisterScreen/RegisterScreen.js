<<<<<<< HEAD
import React, {useState, useContext} from "react"
import {View, Text, StyleSheet, ScrollView , Switch} from 'react-native'
import CustomInput from "../../components/CustomInput"
=======
import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView, TouchableNativeFeedback, NavigatorIOS} from 'react-native'
import CustomInput from "../../components/CustomInput";
>>>>>>> origin/ReactColin
import CustomButton from "../../components/CustomButton"
import {useNavigation} from "@react-navigation/native"
import SocketContext from '../../SocketContext.js';


const RegisterScreen = () => {
    const socket = useContext(SocketContext);
    const [pseudo, setPseudo] = useState('');
    const [numbip, setNumbip] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const [password, setPasswrord] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [text, setText] = useState('');
    const [pole, setPole] = useState('');
    const navigation = useNavigation();

    //define a variable "sex" who will be equal to "homme" or "femme" depending on the switch
    var sex;
    if (isEnabled){
        sex = "F";
    }
    else{
        sex = "M";
    }
    //define a variable "rec" who will be equal to "1" or "0" depending on the switch
    var rec;
    if (isEnabled2){
        rec = "1";
    }
    else{
        rec = "0";
    }

    var photo = 0;

    const onRegisterPressed = async () => {
<<<<<<< HEAD
        if (password!=passwordRepeat){
            console.warn("Les mots de passe ne correspondent pas");
            setText('Les mots de passe ne correspondent pas');
        }
        else{
            console.warn("Création du compte");
            socket.emit("username:", pseudo);
            socket.emit("password:", password);
            socket.emit("nom:", nom);
            socket.emit("prenom:", prenom);
            socket.emit("rec:", rec);
            socket.emit("photo:", photo);
            socket.emit("numbip:", numbip);
            socket.emit("sexe:", sex);
            socket.emit("numbip:", numbip);
            socket.emit("add");
            setText(sex);
        }
        
=======
        console.warn("Créer un compte")
        setText('text')
        navigation.navigate('HomeScreen')
>>>>>>> origin/ReactColin
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
                placeholder="Entrez votre adresse pseudo" 
                value={pseudo} 
                setValue={setPseudo} 
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
<<<<<<< HEAD
                <Text style={{marginTop:10}}>Choisissez votre sexe:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop:10, }}>
            <Text style={{ marginRight: 8 }}>Homme</Text>
                <Switch
                    trackColor={{false: '#C4F3EA', true: '#E7AD99'}}
                    thumbColor={isEnabled ? '#ECC8AF' : '#D1E3DD'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}/>
                
                <Text style={{ marginLeft: 8 }}>Femme</Text>
            </View>
            <Text style={{marginTop:10}}>Etes-vous membre du pôle REC?:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop:10, }}>
            <Text style={{ marginRight: 8 }}>Non</Text>
                <Switch
                    trackColor={{false: '#C4F3EA', true: '#C4F3EA'}}
                    thumbColor={isEnabled2 ? '#D1E3DD' : '#D1E3DD'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}/>
                <Text style={{ marginLeft: 8 }}>Oui</Text>
            </View>
            <CustomInput 
                placeholder="Entrez votre prénom" 
                value={prenom} 
                setValue={setPrenom} 
                secureTextEntry={false}/>
                <CustomInput 
                placeholder="Entrez votre nom" 
                value={nom} 
                setValue={setNom} 
                secureTextEntry={false}/>
                <CustomInput 
                placeholder="Entrez l'identifiant de votre bipeur" 
                value={numbip} 
                setValue={setNumbip} 
                secureTextEntry={false}/>
=======
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
            
            
>>>>>>> origin/ReactColin
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
<<<<<<< HEAD
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
=======
    megatitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 15,
        padding:30,
    },
>>>>>>> origin/ReactColin
});

export default RegisterScreen