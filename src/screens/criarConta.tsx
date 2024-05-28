import {Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function CriarConta({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
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
        <View style={estilo.boxInputs}>
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
            placeholder="Username"
            secureTextEntry={false}
            placeholderTextColor={'#FFFFFF'}
            style={estilo.boxInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={userName}
            onChangeText={(valor) => setUserName(valor)}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'#FFFFFF'}
            style={estilo.boxInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(valor) => setPassword(valor)}
          />

          <TextInput
            placeholder="Confirm password"
            secureTextEntry={true}
            placeholderTextColor={'#FFFFFF'}
            style={estilo.boxInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={confirmPassword}
            onChangeText={(valor) => setConfirmPassword(valor)}
          />

          {error && <Text style={estilo.errorText}>{error}</Text>}

          <TouchableOpacity
            style={estilo.btn}
            //onPress={handleSignUp}
          >
            <Text style={estilo.txtBtn}>SIGN UP</Text>
          </TouchableOpacity>

          <Text style={estilo.perguntas} onPress={() => { navigation.navigate('Login') }}>Do you have an account?</Text>
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
    height: 260
  },
  logo: {
    width: 230,
    height: 230,
    alignSelf: 'center'
  },
  btn: {
    backgroundColor: '#1e6324',
    width: 230,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginBottom: 15
  },
  txtBtn: {
    color: '#FFFFFF',
    fontFamily: 'Inria',
    fontSize: 20
  },
  boxInput: {
    backgroundColor: '#6ee19394',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: 250,
    height: 45,
    borderRadius: 10,
    paddingLeft: 8,
    marginTop: 15,
    color: '#000'
  },
  conteudo: {
    alignItems: 'center'
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
  boxInputs:{
    height: 730,
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
