import { Pressable,StyleSheet, Text, TextInput, View } from 'react-native';
import LojaItem from './src/components/LojaItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  const add = async() =>{
    try {
      const docRef = await addDoc(collection(db, "produtos"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Lista de itens</Text>
        <Text style={styles.numItem}>3</Text>
        <Pressable>
          <MaterialIcons name="delete" size={24} color="black" />
        </Pressable>
      </View>
      <LojaItem />
      <LojaItem />
      <LojaItem />

      <TextInput 
        style={styles.txtInput}
        placeholder='Digite o nome do produto...'
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  header:{
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    padding:10,
    borderRadius:10,
    alignItems:'center'
  },
  headerTxt:{
    fontSize:25,
    fontWeight:'500',
    flex:1
  },
  numItem:{
    fontSize:25,
    fontWeight:'500',
    marginRight:20
  },
  txtInput:{
    backgroundColor:'lightgrey',
    padding:10,
    width:'90%',
    borderRadius:10,
    alignSelf:'center',
    marginTop:'auto',
    marginBottom:10
  }
});
