import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { app, db, getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from '../services/firebaseConfig';

export default function CadastroReciclagem({navigation}) {
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const [recyclingList, setRecyclingList] = useState([]);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
    const addItem = async () => {
      try {
        const docRef = await addDoc(collection(db, "recyclingItems"), {
          title: title,
          phone: phone,
          image: image
        });
        alert("Item de Reciclagem Cadastrado");
        setTitle('');
        setPhone('');
        setImage(null);
        getItem(); // Atualiza a lista de itens após adicionar um novo item
      } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
      }
    };
    
  
    const getItem = async () => {
      let d = [];
      const querySnapshot = await getDocs(collection(db, "recyclingItems"));
      querySnapshot.forEach((doc) => {
        const item = {
          id: doc.id,
          title: doc.data().title,
          phone: doc.data().phone,
          image: doc.data().image
        };
        d.push(item);
      });
      setRecyclingList(d);
    };

  return (
    <SafeAreaView style={estilo.safeArea}>
      <ImageBackground
        source={require('../../assets/fundo-01.jpg')}
        style={estilo.container}
      >
    <TouchableOpacity style={{ paddingTop: 12, paddingLeft: 5 }} onPress={()=>{navigation.navigate('InicialPostagem')}}>
        <Image
        source={require('../../assets/voltar.png')}
        style={estilo.arrowBack}
        />
    </TouchableOpacity>
        <View style={estilo.fundoBranco}>
          <Text style={estilo.titulo}>Cadastro de Reciclagem</Text>

          <TextInput
            style={estilo.txtInput}
            placeholder='Título do Item'
            value={title}
            onChangeText={(value) => setTitle(value)}
          />
          <TextInput
            style={estilo.txtInput}
            placeholder='Telefone para Contato'
            value={phone}
            onChangeText={(value) => setPhone(value)}
            keyboardType='phone-pad'
          />
          <TouchableOpacity onPress={pickImage} style={estilo.imagePicker}>
            {image ? (
              <Image source={{ uri: image }} style={estilo.image} />
            ) : (
              <Text>Selecionar Imagem</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={estilo.btn}
            onPress={addItem}
          >
            <Text style={estilo.txtBtn}>Registrar</Text>
          </TouchableOpacity>
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
  fundoBranco: {
    height: 600,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
    marginVertical: 'auto'
  },
  txtInput: {
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
  imagePicker: {
    marginTop: 20,
    width: 250,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#d0d0d0'
  },
  image: {
    width: '100%',
    height: '100%'
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
  arrowBack:{
    width: 80,
    height: 40
  },  
  titulo:{
    color:'#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 50
  },
});
