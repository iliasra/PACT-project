import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "SignIn" component={SignInScreen} />
                <Stack.Screen name = "RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name = "NewPasswordScreen" component={NewPasswordScreen} />
                <Stack.Screen name = "ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen name = "HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;