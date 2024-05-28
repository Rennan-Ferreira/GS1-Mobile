import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font';
                                        

export default function HomeClose({navigation}){

    const [loaded] = useFonts({
        'Inria': require('../../assets/fonts/InriaSans-Bold.ttf'),
        'FredokaBold': require('../../assets/fonts/Fredoka_Expanded-Bold.ttf')
      });
    if (!loaded) {
    return null;
    }



    return(
        <SafeAreaView style={estilo.safeArea}>
        <ImageBackground
            source={require('../../assets/fundo-01.jpg')}
            style={estilo.container}
        >
            <View style={estilo.ViewLogo}>
                <Image
                    source={require('../../assets/Logo.jpg')}
                    style={estilo.logo}
                />
            </View>
            <Text style={estilo.titulo}>Reciclagem</Text>
            <View style={estilo.btns}>
                <TouchableOpacity
                    style={estilo.btn}
                    onPress={()=>{navigation.navigate('Login')}}
                >
                    <Text style={estilo.txtBtn}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilo.btn}
                    onPress={()=>{navigation.navigate('CriarConta')}}
                >
                    <Text style={estilo.txtBtn}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
        </SafeAreaView>
        
    )
};

const estilo = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor:'#1E5A63'
    },
    container:{
        flex: 1
    },
    ViewLogo:{
        height: 430
    },
    logo:{
        width:320,
        height:320,
        margin:'auto'
    },
    btn:{
        backgroundColor:'#1E5A63',
        width: 230,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    txtBtn:{
        color: '#FFFFFF',
        fontFamily: 'Inria',
        fontSize: 20
    },
    btns:{
        alignItems:'center',
        justifyContent:'center',
        height:400
    },
    titulo:{
        fontSize: 40,
        textAlign:'center',
        color: '#FFFFFF',
        fontFamily:'FredokaBold',
    }
});