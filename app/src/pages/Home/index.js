import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export function Inicio(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />

      <Text style={styles.text}> Mantenha seu espaço de ensino </Text>
      <Text style={styles.text}> SEGURO </Text>

      
    <TouchableOpacity onPress={()=>props.navigation.navigate('login')} style={styles.btn} > 
    <Text style={styles.tituloBtn}>CONHEÇA NOSSO APP</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

   container: {
    flex: 1,
    backgroundColor: '#090952',

   },

  text: {
    fontSize: 20,
    margin: 10,
    alignSelf: 'center',
    color: '#FFFFFF',
  },

  logo: {
    alignItems: 'center',
    height: 400,
    width: 300,
    justifyContent: "center",
    marginHorizontal: 50,
    marginTop: 30
  
  },
});
