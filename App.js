import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import AppStack from './AppNavigationStack/AppStack';
import {  StyleSheet, View,ScrollView, } from 'react-native';
import Header from './Header/Header';
import Manu from './Manu/Manu';
import HomePage from './HomePage/HomePage';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {


  return (
    
    <NavigationContainer> 
      <View >
        <Header/>
        <Manu/>
        <HomePage/>
        <AppStack/>
      </View>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'150px'
  },
});
