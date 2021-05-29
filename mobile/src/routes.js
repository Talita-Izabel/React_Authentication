import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logon from './Logon'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Logon" component={Logon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}