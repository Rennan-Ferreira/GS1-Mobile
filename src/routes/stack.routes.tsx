import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import CriarConta from '../screens/criarConta';
import HomeClose from '../screens/homeClose';
import InfoEmail from '../screens/infoEmail';
import Login from '../screens/login';
import HomeOpen from '../screens/homeOpen';
import InicialPostagem from '../screens/inicialPostagens';
import CadastroReciclagem from '../screens/telaCadastroReciclagem';

const Stack = createNativeStackNavigator();

export function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="HomeOpen" 
            component={HomeOpen}
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="CriarConta" 
            component={CriarConta} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="InfoEmail" 
            component={InfoEmail} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="HomeClose" 
            component={HomeClose} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="CadastroReciclagem" 
            component={CadastroReciclagem} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="InicialPostagem" 
            component={InicialPostagem} 
            options={{
                headerShown:false
            }}
        />
        </Stack.Navigator>

    );
  }