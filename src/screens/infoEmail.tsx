import {ImageBackground, Text, View , StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function InfoEmail({navigation}) {
  const[email,setEmail]=useState('')
  const [error, setError] = useState(null);

  return(

  <SafeAreaView style={estilo.safeArea}>
  <ImageBackground
    source={require('../../assets/fundo-01.jpg')}
    style={estilo.container}
  >

    

        <TouchableOpacity style={{ paddingTop: 12, paddingLeft: 5 }} onPress={() => { navigation.goBack() }}>
          <Image
            source={require('../../assets/voltar.png')}
            style={estilo.arrowBack}
          />
        </TouchableOpacity>
    <View style={estilo.form}>

      <View style={estilo.ViewLogo}>
          <Image
              source={require('../../assets/Logo.jpg')}
              style={estilo.logo}
          />
      </View>
            
            
      <View style={estilo.conteudo}>
          <Text style={estilo.titulo}>Informe o email cadastrado:</Text>
          <TextInput
              placeholder="Email"
              placeholderTextColor={'#FFFFFF'}
              style={estilo.boxInput}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(valor) => setEmail(valor)}
          />

          {error && <Text style={estilo.errorText}>{error}</Text>}

          <TouchableOpacity
              style={estilo.btn}
              //onPress={enviarEmail}
          >
              <Text style={estilo.txtBtn}>ENVIAR</Text>
          </TouchableOpacity>
      </View>
      </View>

  </ImageBackground>
  </SafeAreaView>
  );
};

const estilo = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor:'#1d7933'
  },
  container:{
      flex: 1
  },
  ViewLogo:{
    height: 300
  },
  logo:{
      width:230,
      height:230,
      alignSelf:'center'
  },
  btn:{
      backgroundColor:'#1e6324',
      width: 230,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 55,
      marginBottom:15
  },
  txtBtn:{
      color: '#000000',
      fontFamily: 'Inria',
      fontSize: 20
  },
  boxInput:{
      backgroundColor:'#6ee19394',
      borderWidth: 2,
      borderColor: '#FFFFFF',
      width: 250,
      height: 45,
      borderRadius: 10,
      paddingLeft: 8,
      marginTop: 5,
      color: '#000'
  },
  conteudo:{
      alignItems:'center'
  },
  titulo:{
      color:'#000',
      marginTop:15,
      fontFamily: 'Inter'
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontFamily: 'Inter'
  },
  arrowBack:{
    width: 80,
    height: 40
  },
  form:{
    height: 500,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'center',
    marginVertical: 'auto',
    marginBottom: 150
  }
});
