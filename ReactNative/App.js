import React from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#F9FBFC'
  }
});

export default App;