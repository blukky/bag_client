import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Button } from 'react-native-elements';
import { Inter_500Medium, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { color } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';




const BiometricScreen = ({navigation}) => {


    const [title,setTitle] = useState('');
    const [image,setImage] = useState();
    const [textBtn, settextBtn] = useState('')


    useEffect(() => {
        LocalAuthentication.supportedAuthenticationTypesAsync().then((type)=>{
            if (type.indexOf(1) != -1){
                setTitle('Использовать отпечаток пальца');
                setImage(require('../assets/images/fingerprint.png'));
                settextBtn('Использовать Touch ID');
            }else if (type.indexOf(2) != -1){
                setTitle('Использовать сканирование лица');
                setImage(require('../assets/images/face.png'));
                settextBtn('Использовать Face ID');
            }
        })
    })


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Image style={styles.img} source={image} />
            <View style={styles.circle} ></View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.subtext}>для быстрого входа в приложение</Text>
            <Text style={styles.subtext}>без ввода ПИН-кода?</Text>
            <Button title={textBtn} onPress={() => navigation.navigate('document')} titleStyle={styles.text_primary}  containerStyle={styles.primary_btn} buttonStyle={styles.primary} />
            <Button title="Пропустить" onPress={() => navigation.navigate('document')} titleStyle={styles.text_secondary} containerStyle={styles.secondary_btn} buttonStyle={styles.secondary} />
        </SafeAreaView>
    )
};

export default BiometricScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100%',
        marginTop: 10,
        backgroundColor: '#F9F9FA'
    },
    img:{
        position: 'absolute',
        top: '25%'
    },
    circle:{
        position: 'absolute',
        top: '35%',
        width: 128,
        height: 128,
        borderRadius: 128,
        backgroundColor: '#23232A14'
    },
    title:{
        fontFamily: "Inter_800ExtraBold",
        fontSize: 24,
        color: '#0C0C0D',
        width: '75%',
        textAlign: 'center',
        marginBottom: 8
    },
    subtext:{
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        color: '#0C0C0D7A',
    },
    primary_btn:{
        width: '80%',
        borderRadius: 12,
        marginTop: '25%',
        marginBottom: 12
    },
    primary:{
        backgroundColor: '#3333FF',
        paddingVertical: 15
    },
    secondary_btn:{
        width: '80%',
        borderRadius: 12,
        marginBottom: 10,
    },
    secondary:{
        backgroundColor: '#DFDFE1',
        paddingVertical: 15,
    },
    text_primary:{
        color: '#F2F2F3',
        fontSize: 14,
        fontFamily: "Inter_700Bold"
    },
    text_secondary:{
        color: '#0C0C0D',
        fontSize: 14,
        fontFamily: "Inter_700Bold"
    },

})
