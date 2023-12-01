import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ImageBackground, ScrollView, TextInput, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Aluno } from '../Aluno';

export function Qrcode({ navigation }) {
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  async function handleBarCodeScanned({ type, data }) {
    navigation.navigate('Aluno')
  }
  return (


    <View style={styles.main}>
      <View style={styles.topo}>
        <Text style={{ paddingTop: 30, color: 'white', fontSize: 20 }}>Leia o QR</Text>
      </View>
      <View style={styles.view}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : ()=>{navigation.navigate('Aluno')}}
          style={[StyleSheet.absoluteFill, styles.scann]}
        />
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap:100,
    backgroundColor: '#a9a9d5',
  },
  sairText: {
    color: 'white',
    textAlign: 'center'
  },
  topo: {
    flex: 0.15,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#090952',
  },

  voltar: {
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 2,

  },
  scann: {  
    height: '80%',
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#090952',
  },
  view: {
    display:'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '63%',
    width: '80%',
  },

  conjunTop: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    backgroundColor: '#090952',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
