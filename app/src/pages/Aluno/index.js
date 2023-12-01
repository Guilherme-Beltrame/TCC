import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';

export function Aluno(props) {
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.conteudo}>
                    <Text style={styles.text}> Sarah Rodrigues Vanderlei</Text>
                    <View style={styles.view}>
                        <Text>
                            Imagem
                        </Text>
                    </View>
                    <Text style={styles.text2}><Text style={{color:'#99FD9D', fontWeight:800}}> Horário:</Text> 07:30 </Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('QR')}
                        style={styles.btn}>
                        <Text style={styles.tituloBtn}>OK</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    conteudo:{
        flex:1,
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:80,
        marginTop:100,
    },
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent:'center'
    },

    btn: {
        backgroundColor: '#090952',
        padding: 15,
        width: 290,
        borderRadius: 20,
    },
    tituloBtn: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },

    text: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#000000',
    },

    text2: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#000000',
    },

    view: {
        alignItems: 'center',
        height: 300,
        width: 280,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#090952',

    },
});
