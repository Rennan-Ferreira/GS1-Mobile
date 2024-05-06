import React from 'react'
import { Text, View, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


export default function LojaItem() {

    return (
        <SafeAreaView>
            <View style={style.container}>
                <Pressable>
                    <AntDesign name="checkcircleo" size={24} color="black" />
                </Pressable>

                <Text style={style.txt}>Produto</Text>

                <Pressable>
                    <MaterialIcons name="delete" size={24} color="black" />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
        width: '90%',
        borderRadius: 10,
        alignSelf:'center',
        marginVertical:5
    },
    txt: {
        flex:1,
        fontSize: 18,
        marginLeft: 18,
        fontWeight: '500'
    }
})