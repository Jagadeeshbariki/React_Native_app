import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomePage from '../HomePage/HomePage';
import About from '../About/About';
import Manu from '../Manu/Manu';
import Contact from '../Contact/Contact';
const AppStack = () => {

  

    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Manu' component={Manu}/>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='Contact' component={Contact}/>
    </Stack.Navigator>
  );
}

export default AppStack;
