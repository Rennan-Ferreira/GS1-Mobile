import { ImageBackground, Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {auth} from '../services/firebaseConfig';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);

  const login = () => {
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setEmail("")
            setSenha("")
            navigation.navigate("HomeClose")
            alert('Login realizado com Sucesso !')
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(error);
            setError(errorMessage);
        });
  };

  return (
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
        <View style={estilo.boxLogin}>
          <View style={estilo.ViewLogo}>
            <Image
              source={require('../../assets/LogoRedonda.png')}
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
              onPress={login} 
            >
              <Text style={estilo.txtBtn}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={estilo.perguntas} onPress={() => { navigation.navigate('CriarConta') }}>Don't you have an account?</Text>
            <Text style={estilo.perguntas} onPress={() => { navigation.navigate('InfoEmail') }}>Forgot password?</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const estilo = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#57d290'
  },
  container: {
    flex: 1
  },
  ViewLogo: {
    height: 300
  },
  logo: {
    width: 220,
    height: 220,
    alignSelf: 'center'
  },
  boxInput: {
    backgroundColor: '#6ee19394',
    borderWidth: 2,
    borderColor: '#ffffffb8',
    width: 250,
    height: 45,
    borderRadius: 10,
    paddingLeft: 8,
    marginTop: 18,
    color: '#000'
  },
  conteudo: {
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#1e6324',
    width: 230,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    marginBottom: 15
  },
  txtBtn: {
    color: '#FFFFFF',
    fontFamily: 'Inria',
    fontSize: 20
  },
  perguntas: {
    color: '#000000',
    marginTop: 15,
    fontFamily: 'Inter'
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontFamily: 'Inter'
  },
  boxLogin: {
    height: 700,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  arrowBack:{
    width: 80,
    height: 40
  }
});
