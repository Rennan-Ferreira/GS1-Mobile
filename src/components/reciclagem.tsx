import React, { useEffect, useState } from 'react'
import { Text, View, Pressable, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { db,doc,updateDoc,deleteDoc} from '../services/firebaseConfig'


export default function Reciclagem(props) {
    return (
        <SafeAreaView>
            <View style={style.container}>

                <Text style={style.txt}>{props.title}</Text>
                <Image></Image>
                <Text>phone</Text>

            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 5
    },
    txt: {
        flex: 1,
        fontSize: 18,
        marginLeft: 18,
        fontWeight: '500'
    }
})