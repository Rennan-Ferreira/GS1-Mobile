import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { app, db, getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from '../services/firebaseConfig';

export default function Inicial({ navigation }) {
  const [recyclingItems, setRecyclingItems] = useState([]);

  useEffect(() => {
    const fetchRecyclingItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'recyclingItems'));
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setRecyclingItems(items);
    };
    fetchRecyclingItems();
  }, [navigation]); 
  

  return (
    <SafeAreaView style={estilo.safeArea}>
      <ImageBackground
        source={require('../../assets/fundo-01.jpg')}
        style={estilo.container}
      >
        <View style={estilo.fundoBranco}>
          <Text style={estilo.titulo}>Reciclagens</Text>

          <FlatList
            data={recyclingItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  // Ação ao clicar no item da lista
                }}
                style={estilo.itemContainer}
              >
                <Text>{item.title}</Text>
                <Text>Telefone: {item.phone}</Text>
                <Image source={{ uri: item.image }} style={estilo.itemImage} />
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={estilo.btn}
            onPress={() => { navigation.navigate('CadastroReciclagem') }}
          >
            <Text style={estilo.txtBtn}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#57d290'
  },
  container: {
    flex: 1
  },
  fundoBranco: {
    height: 800,
    width: 390,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
    marginVertical: 'auto'
  },
  btn: {
    backgroundColor: '#57d290',
    width: 230,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  txtBtn: {
    color: '#000000',
    fontFamily: 'Inria',
    fontSize: 20
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  itemImage: {
    width: 100,
    height: 100,
    marginTop: 5
  },
  titulo:{
    color:'#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
});
