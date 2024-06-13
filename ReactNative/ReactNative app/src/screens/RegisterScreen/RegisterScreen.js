import React, {useState, useContext} from "react"
import {View, Text, StyleSheet, ScrollView , Switch, Image} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from "@react-navigation/native"
import SocketContext from '../../SocketContext.js';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

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
    const [image, setImage] = useState(null);

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

            //upload image to server
            const formData = new FormData();
            formData.append('image.jpg', {
              uri: image,
              name: 'image.jpg',
              type: 'image/jpeg',
            });
          
            try {
              const response = await axios.post('http://137.194.210.159:80/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
          
              console.log('Image upload successful');
              console.log(response.data);
            } catch (error) {
              console.error('Image upload failed', error);
            };

            setText(sex);
        }
        
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
    }

    const onAttemptConnection = () => {
        console.warn("veuillez attendre")
    }

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

                <CustomButton 
                text="Choisissez une photo pour que l'on vous reconnaisse" 
                onPress={pickImage} 
                type = "PRIMARY"
                />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

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
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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