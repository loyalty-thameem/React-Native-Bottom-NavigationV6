import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigator/tabs';
import { StyleSheet, Text, View } from 'react-native';
console.reportErrorsAsExceptions = false; 
export default function App() {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  