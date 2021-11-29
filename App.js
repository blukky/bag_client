import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';

import LicenseScreen from './screens/LicenseScreen';
import LoginScreen from './screens/LoginScreen';
import CodeScreen from './screens/CodeScreen';
import ChangePinScreen from './screens/ChangePinScreen';
import BiometricScreen from './screens/BiometricScreen';
import DocumentScreen from './screens/DocumentScreen';
import InputLastNameScreen from './screens/InputLastNameScreen';
import InputFirstNameScreen from './screens/InputFirstNameScreen';
import InputPatronymicScreen from './screens/InputPatronymicScreen';
import HowGetScreen from './screens/HowGetScreen';
import BirthDayScreen from './screens/BirthDayScreen';
import DateGetScreen from './screens/DateGetScreen';
import ImageScreen from './screens/ImageScreen';


const  Stack = createNativeStackNavigator()

function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='start' >
        <Stack.Screen options={{headerShown: false}} name='start' component={LicenseScreen} />
        <Stack.Screen options={{headerShown: false}} name='login' component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name='code' component={CodeScreen} />
        <Stack.Screen options={{headerShown: false}} name='changepin' component={ChangePinScreen} />
        <Stack.Screen options={{headerShown: false}} name='biometric' component={BiometricScreen} />
        <Stack.Screen name='document' component={DocumentScreen} />
        <Stack.Screen name='last_name' component={InputLastNameScreen} />
        <Stack.Screen name='first_name' component={InputFirstNameScreen} />
        <Stack.Screen name='patronymic' component={InputPatronymicScreen} />
        <Stack.Screen name='how_get' component={HowGetScreen} />
        <Stack.Screen name='birthday' component={BirthDayScreen} />
        <Stack.Screen name='date_get' component={DateGetScreen} />
        <Stack.Screen name='input_image' component={ImageScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App

