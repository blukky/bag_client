import { Inter_500Medium, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import React, { useLayoutEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-elements';

const ImageScreen = ({navigation}) => {

    useLayoutEffect(() =>{
        navigation.setOptions({
            title: '',
            headerShadowVisible: false,
            headerStyle:{
                backgroundColor: '#F9F9FA'
            },
            headerBackTitleVisible: false,
            headerTintColor: '#0C0C0D',
            headerRight:() =>{
                return(<TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('how_get')} ><Text style={{ color: '#0C0C0D', fontSize: 16, fontFamily: "Inter_800ExtraBold" }} >Пропустить</Text></TouchableOpacity>)
            }
        })
    }, [navigation])

    const [img, setImg] = useState();


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
        });

        setImg(result.uri);
    }



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >Загрузите фото паспорта</Text>
            <Text style={styles.subtext}>для подтверждения вашей личности</Text>
            <Text style={styles.subtext}>загрузите, пожалуйста, фотографию паспорта</Text>
            {img ? <Image source={{ uri: img}} style={styles.add} /> :
            <TouchableOpacity onPress={pickImage} activeOpacity={0.5} style={styles.add}><Image source={require('../assets/images/PlusCircle.png')}  /></TouchableOpacity>
            }
            <Text style={styles.label} >Первый разворот с ФИО и фото лица</Text>
            {img && <Button titleStyle={styles.textbtn} containerStyle={styles.cntbtn} buttonStyle={styles.btn} title="Завершить" />}
        </SafeAreaView>
    )
}

export default ImageScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F9F9FA',
        height: '100%'
    },
    title:{
        fontSize: 20,
        fontFamily: "Inter_800ExtraBold",
        color: "#0C0C0D",
        marginBottom: 8,
    },
    subtext:{
        fontSize: 14,
        fontFamily: "Inter_500Medium",
        color: '#0C0C0D7A',
        marginBottom: 4
    },
    label:{
        fontSize: 14,
        fontFamily: "Inter_500Medium",
        color: '#0C0C0D7A',
        marginTop: '5%',
        marginBottom: '65%'
    },
    add:{
        backgroundColor: '#23232A14',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        borderRadius: 16,
        marginTop:'20%'
    },
    btn:{
        paddingVertical: 15,
        backgroundColor: '#3333FF'
    },
    cntbtn:{
        width: '80%',
        borderRadius: 12,

    },
    textbtn:{
        fontSize: 14, 
        fontFamily: "Inter_700Bold",
        color: '#F2F2F3'
    }

})
