import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';

import { Diseases } from './components/diseases';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heart } from './components/heart';
import { Pressure } from './components/pressure';
import { Diabetes } from './components/diabetes';
import { Hepatitis } from './components/hepatitis';
import { Kidney } from './components/kidney';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

<NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen  name="Diseases" component={Diseases}  />
        <Stack.Screen  name="Heart" component={Heart}  />
        <Stack.Screen  name="Pressure" component={Pressure}  />
        <Stack.Screen  name="Diabetes" component={Diabetes}  />
        <Stack.Screen  name="Hepatitis C" component={Hepatitis}  />
        <Stack.Screen  name="Kidney" component={Kidney}  />




      </Stack.Navigator>
    </NavigationContainer>

  
  );
}
