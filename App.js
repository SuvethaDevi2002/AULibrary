import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Onboarding from './src/screens/Onboarding';
import Signup from './src/Sign_up&Sign_in/Signup';
import Login from './src/Sign_up&Sign_in/Login'

const AppStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={Onboarding} />
         
          <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Signup" component={Signup} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}