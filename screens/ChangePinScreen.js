import { Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ChangePinScreen = ({navigation}) => {

    const [firstPin, setFirstPin] = useState('');
    const [secondPin, setSecondPin] = useState('');
    const [bFirst, setFirst] = useState(false);

    const Click = (num) => {
        if (num === 'del'){
            if (firstPin.length <= 4 && secondPin.length === 0){
                setFirstPin(firstPin.slice(0,-1));
            }else{
                setSecondPin(secondPin.slice(0,-1));
            }
        }else{
            if (firstPin.length < 4){
                setFirstPin(firstPin + num);
            }else{
                setSecondPin(secondPin + num);
            }
        }
    }

    useEffect(() =>{
        if (firstPin.length === 4){
            setFirst(true);
        }else{
            setFirst(false);
        }
        if (firstPin.length === 4 && secondPin.length === 4 && firstPin == secondPin){
            navigation.navigate('biometric');
        } else if(firstPin.length === 4 && secondPin.length == 4 && firstPin != secondPin){
            // Error
        }
    })


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}>Установите ПИН-код</Text>
            <Text style={styles.subtext}>для входа</Text>
            <View style={[styles.row_circle, bFirst ? {marginTop: '16%'} : {marginTop: '25%'} ]} >
                <View style={[styles.circle, firstPin.length < 1 ? {backgroundColor: '#23232A14'} : {backgroundColor: '#0C0C0D'} ]} ></View>
                <View style={[styles.circle, firstPin.length < 2 ? {backgroundColor: '#23232A14'}: {backgroundColor: '#0C0C0D'} ]} ></View>
                <View style={[styles.circle, firstPin.length < 3 ? {backgroundColor: '#23232A14'}: {backgroundColor: '#0C0C0D'} ]} ></View>
                <View style={[styles.circle, firstPin.length < 4 ? {backgroundColor: '#23232A14'}: {backgroundColor: '#0C0C0D'} ]} ></View>
            </View>
            {bFirst &&
             <View style={styles.row_circle_second} >
                <View style={[styles.circle, secondPin.length < 1 ? {backgroundColor: '#23232A14'}: {backgroundColor: '#0C0C0D'} ]} ></View>
                <View style={[styles.circle, secondPin.length < 2 ? {backgroundColor: '#23232A14'}: {backgroundColor: '#0C0C0D'} ]} ></View>
                <View style={[styles.circle, secondPin.length < 3 ? {backgroundColor: '#23232A14'}: {backgroundColor: '#0C0C0D'} ]} ></View>
                <View style={[styles.circle, secondPin.length < 4 ? {backgroundColor: '#23232A14'}: {backgroundColor: '#0C0C0D'} ]} ></View>
            </View>
            }
            <TouchableOpacity><Text style={styles.repeat}>Забыл пароль</Text></TouchableOpacity>
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

export default ChangePinScreen

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
        color: '#0C0C0D7A',
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        lineHeight: 24,
    },
    keyboard:{
        width: '85%',
        marginTop: '10%'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24
    },
    row_circle:{
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        marginTop: '25%'
    },
    row_circle_second:{
        flexDirection: 'row',
        marginTop: 12,
        width: '30%',
        justifyContent: 'space-between',
    },
    circle:{
        height: 20,
        width: 20,
        
        borderRadius: 20
    },
    repeat:{
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        color : '#0C0C0D',
        marginTop: '25%'
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
