import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const CodeScreen = ({navigation, route}) => {

    const [code, setCode] = useState('');
    const [select, setSelection] = useState(0);
    const VerifyCode = '4536';
    const [verify, setVerify] = useState(true);

    const changeSel = (sel) => {
        setSelection(sel.start);
    }

    const Click = (num) => {
        if (num === 'del'){
            if (select > 0){
            setCode(code.slice(0,select-1)+ code.slice(select));
            setSelection(select-1);
            }
        }else{
            if (code.length  <4){
            setCode(code.slice(0,select)+num+code.slice(select));
            setSelection(select + 1);
            }
        }
      };
    
    useEffect(() =>{
      if (code.length === 4 && code === VerifyCode){
        navigation.navigate('changepin');
      }
      else if(code.length === 4 && code != VerifyCode){
          setVerify(false);
      }
      else if (code.length < 4 && !verify){
          setVerify(true);
      }
    })


    return (
       <SafeAreaView style={styles.container} >
            <StatusBar style="dark" />
           <Text style={styles.title}>Код из СМС</Text>
           <Text style={styles.subtext} >Введите код из сообщения,</Text>
           <Text style={styles.subsubtext} >отправленного на номер</Text>
           <Text style={styles.subsubtext} >{route.params.login}</Text>
            <TextInput autoFocus style={[styles.inputText, verify ? {color:'#0C0C0D'} : {color:"#9B0000"}]} showSoftInputOnFocus={false} selection={{start:select, end:select}} onSelectionChange={({ nativeEvent: { selection } }) => changeSel(selection)}   value={code} />
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

export default CodeScreen

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