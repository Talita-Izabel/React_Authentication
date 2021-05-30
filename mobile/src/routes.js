import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Logon from './pages/Logon';
import Register from './pages/Register';
import Session from './pages/Session';

export default function Routes(){
  return(
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Logon" component={Logon} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Session" component={Session} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}