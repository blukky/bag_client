import { Inter_500Medium, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Input } from 'react-native-elements'

const LoginScreen = ({navigation}) => {

    const [number, setNumber] = useState('+7 ');
    const [select, setSelection] = useState(3);


    const changeSel = (sel) => {
        if (sel.start < 2){
            setSelection(2);
        }else{
            setSelection(sel.start);
        }
    }

    const Click = (num) => {
        if (num === 'del'){
            if (select > 3){
            setNumber(number.slice(0,select-1)+ number.slice(select));
            setSelection(select-1);
            }
        }else{
            setNumber(number.slice(0,select)+num+number.slice(select));
            setSelection(select + 1);
        }
      };
    
    useEffect(() =>{
      if (number.length === 13){
        // fetch('http://172.20.10.4:3000/api/validate', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify({
        //         phone: number,
        //       })
        //   })
        //   .then(res => console.log(res.json()))
        navigation.navigate('code', {login:number})
          
      }
    })


    return (
       <SafeAreaView style={styles.container} >
            <StatusBar style="dark" />
           <Text style={styles.title}>Вход</Text>
           <Text style={styles.subtext} >Введите номер телефона, </Text>
           <Text style={styles.subsubtext} >чтобы войти в существующий аккаунт </Text>
           <Text style={styles.subsubtext} >или создать новый</Text>
            <TextInput autoFocus style={styles.inputText} showSoftInputOnFocus={false} selection={{start:select, end:select}} onSelectionChange={({ nativeEvent: { selection } }) => changeSel(selection)}   value={number} />
            <View style={styles.keyboard}>
                <View style={styles.row} >
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('1')}  ><Text style={styles.num} >1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('2')}><Text style={styles.num}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('3')}><Text style={styles.num}>3</Text></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('4')}><Text style={styles.num}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('5')}><Text style={styles.num}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('6')}><Text style={styles.num}>6</Text></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('7')}><Text style={styles.num}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('8')}><Text style={styles.num}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('9')}><Text style={styles.num}>9</Text></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#F9F9FA'}]} ><Text></Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> Click('0')}><Text style={styles.num}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#F9F9FA'}]} activeOpacity={0.5} onPress={()=> Click('del')}><Image source={require('../assets/images/Delete.png')}  /></TouchableOpacity>
                </View>
            </View>
       </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 10,
            backgroundColor: '#F9F9FA'
    },
    title:{
        marginTop: 24,
        fontSize: 24,
        fontFamily: "Inter_800ExtraBold",
        color: '#0C0C0D'
    },
    subtext:{
        marginTop: 8,
        color: '#0C0C0D7A',
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        lineHeight: 24,
    },
    subsubtext:{
        color: '#0C0C0D7A',
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        lineHeight: 24,
    },
    inputText:{
        fontSize: 32,
        fontFamily: "Inter_800ExtraBold",
        color: '#0C0C0D',
        marginTop: '25%'
    },
    keyboard:{
        width: '85%',
        marginTop: '25%'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24
    },
    btn:{
        width: 72,
        height: 72,
        borderRadius: 72,
        alignItems: 'center',
        backgroundColor: '#23232A14',
        justifyContent: 'center'
        
    },
    num:{

        fontSize: 20,
        fontFamily: "Inter_800ExtraBold",

    }



})
