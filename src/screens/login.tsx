import {ImageBackground, Text, View , StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function Login({navigation}) {

  const[email,setEmail]=useState('')
  const[senha,setSenha]=useState('')
  const [error, setError] = useState(null);

  <SafeAreaView style={estilo.safeArea}>
    <ImageBackground
      source={require('../../assets/fundo-01.jpg')}
      style={estilo.container}
    >
      <TouchableOpacity style={{paddingTop: 12, paddingLeft: 5}} >
          <Ionicons name="chevron-back-sharp" size={46} color="white" onPress={()=>{navigation.goBack()}}/>
      </TouchableOpacity>
      <View style={estilo.boxLogin}>
        <View style={estilo.ViewLogo}>
            <Image
                source={require('../../assets/Logo.jpg')}
                style={estilo.logo}
            />
        </View>
      
        <View style={estilo.conteudo}>
            <TextInput
                placeholder="Email"
                placeholderTextColor={'#FFFFFF'}
                style={estilo.boxInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(valor) => setEmail(valor)}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={'#FFFFFF'}
                style={estilo.boxInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={senha}
                onChangeText={(valor) => setSenha(valor)}
            />

            {error && <Text style={estilo.errorText}>{error}</Text>}

            <TouchableOpacity
                style={estilo.btn}
                //onPress={login} 
            >
                <Text style={estilo.txtBtn}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={estilo.perguntas} onPress={()=>{navigation.navigate('CriarConta')}}>Don't you have an account?</Text>
            <Text style={estilo.perguntas} onPress={()=>{navigation.navigate('InfoEmail')}}>Forgot password ?</Text>

          </View>
        </View>

    </ImageBackground>
  </SafeAreaView>
};

const estilo = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor:'#57d290'
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
  boxInput:{
    backgroundColor:'#0E2D33',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: 250,
    height: 45,
    borderRadius: 10,
    paddingLeft: 8,
    marginTop: 18,
    color: '#FFF'
  },
  conteudo:{
      alignItems:'center'
  },
  btn:{
    backgroundColor:'#1E5A63',
    width: 230,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    marginBottom:15
  },
  txtBtn:{
      color: '#FFFFFF',
      fontFamily: 'Inria',
      fontSize: 20
  },
  perguntas:{
    color:'#FFFFFF',
    marginTop:15,
    fontFamily: 'Inter'
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontFamily: 'Inter'
  },
  boxLogin:{
    height: 400,
    width:300,
    backgroundColor: 'white',
    borderRadius: 20,
  }
});