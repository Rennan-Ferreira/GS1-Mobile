import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import CriarConta from '../screens/criarConta';
import HomeClose from '../screens/homeClose';
import InfoEmail from '../screens/infoEmail';
import Login from '../screens/login';
import HomeOpen from '../screens/homeOpen';

const Stack = createNativeStackNavigator();

export function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="HomeClose" 
            component={HomeClose}
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="CriarConta" 
            getComponent={CriarConta} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="InfoEmail" 
            getComponent={InfoEmail} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="Login" 
            getComponent={Login} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="HomeOpen" 
            component={HomeOpen} 
            options={{
                headerShown:false
            }}
        />
      </Stack.Navigator>
    );
  }