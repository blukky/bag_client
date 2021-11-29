import { Inter_500Medium, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthDayScreen = ({navigation}) => {

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

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
      };



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >Введите паспортные данные</Text>
            <Text style={styles.subtext}>для ускорения обслуживания и получения</Text>
            <Text style={styles.subtext}>дополнительных привилегий</Text>
            <Text style={styles.label} >Дата рождения</Text>
            <DateTimePicker
                style={styles.picker}
                value={date}
                mode="date"
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                textColor="#0C0C0D"
                locale="ru-RU"
                />
            <KeyboardAvoidingView behavior='padding' style={styles.row}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.subtext} >Зачем нам ваши </Text>
                    <Text style={styles.subtext}>паспортные данные?</Text>
                    </TouchableOpacity>
                <Button buttonStyle={styles.btn} onPress={() => navigation.navigate('how_get')} containerStyle={styles.cont_btn} icon={<AntDesign name="arrowright" size={24} color="#F2F2F3" />} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default BirthDayScreen

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
        marginTop: '20%'
    },
    picker:{
        height: '40%',
        width: '80%',
        marginBottom: '50%',
    },
    row:{
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
    },
    btn:{
        backgroundColor: '#3333FF',
        width: 64,
        height: 64,
        borderRadius: 64
    },
    cont_btn:{
        alignItems: 'center',
        justifyContent: 'center'
    }

})
