import {Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Image} from 'react-native';


export default function HomeClose({navigation}) {
  return(
    <SafeAreaView style={estilo.safeArea}>
      <ImageBackground
          source={require('../../assets/fundo-01.jpg')}
          style={estilo.container}
      >
        <View style={estilo.fundoBranco}>
          <View style={estilo.ViewLogo}>
                <Image
                    source={require('../../assets/LogoRedonda.png')}
                    style={estilo.logo}
                />
          </View>
          <Text style={estilo.titulo}>Quem é você ?</Text>

          <View style={estilo.btns}>
                <TouchableOpacity
                    style={estilo.btn}
                    onPress={()=>{navigation.navigate('InicialPostagem')}}
                >
                    <Text style={estilo.txtBtn}>Pescador</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilo.btn}
                    onPress={()=>{navigation.navigate('InicialPostagem')}}
                >
                    <Text style={estilo.txtBtn}>Reciclador</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilo.btn}
                    onPress={()=>{navigation.navigate('InicialPostagem')}}
                >
                    <Text style={estilo.txtBtn}>Empresa</Text>
                </TouchableOpacity>
            </View>

        </View>
        
      </ImageBackground>
    </SafeAreaView>
    
  )
};

const estilo = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor:'#57d290'
  },
  container:{
    flex: 1
  },
  fundoBranco:{
    height: 600,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
    marginVertical: 'auto'
  },
  btn:{
    backgroundColor:'#57d290',
    width: 230,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  txtBtn:{
    color: '#000000',
    fontFamily: 'Inria',
    fontSize: 20
  },
  btns:{
    alignItems:'center',
    justifyContent:'center',
    height:300
  },
  titulo:{
    color:'#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50
  },
  ViewLogo:{
    height: 200
  },
  logo:{
      width:180,
      height:180,
      margin:'auto'
  },
});
