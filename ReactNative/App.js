import React from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Navigation from './src/navigation';
import SocketProvider from './src/server/SocketProvider';

const App = () => {
  return (
    <SocketProvider>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    </SocketProvider>
  );
} 

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#White'
  }
});

export default App;