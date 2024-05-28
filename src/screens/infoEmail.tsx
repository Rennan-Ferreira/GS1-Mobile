import {ImageBackground, Text, View , StyleSheet, SafeAreaView} from 'react-native';


export default function InfoEmail() {
  <SafeAreaView style={estilo.safeArea}>
  <ImageBackground
    source={require('../../assets/fundo-01.jpg')}
    style={estilo.container}
  >

  </ImageBackground>
  </SafeAreaView>
};

const estilo = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor:'#1d7933'
  },
  container:{
      flex: 1
  }
});
