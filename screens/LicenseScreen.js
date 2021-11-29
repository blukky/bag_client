import { Inter_500Medium, Inter_600SemiBold, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'


const LicenseScreen = ({navigation}) => {




    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' />
            <Text style={styles.title}>Персональные данные</Text>
            <Text style={styles.subtext} >правила обработки</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.textContainer}>
                <View style={styles.abzath}>
                    <Text style={styles.numeric}>1.</Text>
                    <Text style={styles.li}>
                    Настоящие Правила обработки персональных данных (далее — Правила) имеют своей целью закрепление механизмов обеспечения прав субъекта на сохранение конфиденциальности информации о фактах, событиях и обстоятельствах его жизни, определяют основные требования к порядку сбора, систематизации, накопления, хранения, уточнения (обновления, изменения), использования, распространения (в том числе передачи), блокирования уничтожения (далее — обработки) персональных данных (далее — ПД), а также права и обязанности работников управления энергетики и тарифов Липецкой области (далее Организация) в области обработки их
                    </Text>
                </View>
                <View style={styles.abzath}>
                    <Text style={styles.numeric}>1.</Text>
                    <Text style={styles.li}>
                    Настоящие Правила обработки персональных данных (далее — Правила) имеют своей целью закрепление механизмов обеспечения прав субъекта на сохранение конфиденциальности информации о фактах, событиях и обстоятельствах его жизни, определяют основные требования к порядку сбора, систематизации, накопления, хранения, уточнения (обновления, изменения), использования, распространения (в том числе передачи), блокирования уничтожения (далее — обработки) персональных данных (далее — ПД), а также права и обязанности работников управления энергетики и тарифов Липецкой области (далее Организация) в области обработки их
                    </Text>
                </View>
            </ScrollView>
            <Button title="Я согласен с правилами"  containerStyle={styles.btn} color='#F2F2F3' buttonStyle={styles.innertBtn} onPress={() => navigation.navigate('login')} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        backgroundColor: '#F9F9FA'
    },
    title:{
        fontSize: 18,
        fontFamily: "Inter_800ExtraBold",
        color: '#0C0C0D'
    },
    subtext:{
        fontSize: 16,
        fontFamily: "Inter_600SemiBold",
        color: '#0C0C0D7A',
        marginBottom: 26
    },
    textContainer:{
        width: '85%',
    },
    abzath:{
        flexDirection: 'row',
        marginBottom: 8
    },
    numeric:{
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        color: '#0C0C0D',
        lineHeight: 22,
        marginRight: 3
    },
    li:{
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        color: '#0C0C0D',
        lineHeight: 22
    },
    btn:{
        position: 'absolute',
        bottom: '5%',
        width: '85%',
        borderRadius: 12,
    },
    innertBtn:{
        backgroundColor: '#3333FF', 
        paddingVertical: 14
    }
})

export default LicenseScreen
