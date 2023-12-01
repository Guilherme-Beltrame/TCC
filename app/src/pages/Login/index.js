import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, TextInput, } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth'
import { auth, db } from '../../services/configFirebase';
import { Loadin } from '../Loadin/loadin';
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";

export function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [corborda1, setCorBorda1] = useState(styles.display1);
    const [corborda2, SetCorborda2] = useState(styles.display2);
    const [corrigeerroEmail, setcorrigeerroemail] = useState(false);
    const [corrigeerroSenha, setcorrigeerrosenha] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [erromsg, setErrorMessage] = useState(false);

    useEffect(() => {
       async function veriLog(){
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('QR');
            }
          }); 
       }
       veriLog();
      });

    function vEmai() {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            setCorBorda1(styles.display1erro)
            setcorrigeerroemail(true)
        }
        else {
            setCorBorda1(styles.display1)
            setcorrigeerroemail(false)
        }
    }
    function vSenha() {
        let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@.#])[0-9a-zA-Z$*&.@#]{8,}$/;
        if (reg.test(senha) === false) {
            SetCorborda2(styles.display2erro)
            setcorrigeerrosenha(true)
        } else {
            SetCorborda2(styles.display2)
            setcorrigeerrosenha(false)
        }
    }
    async function EntraConta() {
        let regs = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@.#])[0-9a-zA-Z$*&.@#]{8,}$/;
        let rege = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (regs.test(senha) === false) {
            setcorrigeerrosenha(true)
        } else if (rege.test(email) === false) {
            setcorrigeerroemail(true);
        } else if (!regs.test(senha) === false && !rege.test(email) === false) {
            setCarregando(true);
            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setCarregando(false)
                    //SeInst(user.uid);
                    navigation.navigate('QR');
                })
                .catch((error) => {
                    console.log(error.code, error.message)
                    setErrorMessage(true)
                    setCarregando(false)
                });
        }
    }

    async function SeInst(idUser) {
        const ref = query(collection(db, "instituicoes"), where("user.uid", "==", idUser).catch(erro => { console.log(erro) }))
        const querySnapshot = await getDoc(ref)
        console.log(querySnapshot);
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/Logo.png')} style={styles.logo} />
                    {erromsg ?
                    <Text style={{ color: 'red' }} >
                        Você digitou o Email ou a senha incorreta. Tente Novamente.
                    </Text>
                    : null}
                </View>
                <View style={{paddingBottom:30}}>
                    <TextInput
                        style={corborda1}
                        onEndEditing={vEmai}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="E-mail/usuário"
                        keyboardType="email-address"
                    />
                    {corrigeerroEmail ?
                        <Text style={{ marginLeft: 30, color: 'red' }} >
                            Digite o email corretamente
                        </Text>
                        : null}
                    <TextInput
                        style={corborda2}
                        onEndEditing={vSenha}
                        onChangeText={setSenha}
                        value={senha}
                        contextMenuHidden={true}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    {corrigeerroSenha ?
                        <Text style={{ marginLeft: 30, color: 'red' }} >
                            Pelo menos 8 caracteres, com no minimo: minusculo, maiusculo, numerico e especial.
                        </Text>
                        : null}
                    <TouchableOpacity onPress={EntraConta} style={styles.btn} >
                        <Text
                            style={styles.tituloBtn}>
                            ENTRAR
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal visible={carregando} animationType="fade" transparent={true}>
                    <Loadin
                    />
                </Modal>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090952',
    },

    logo: {
        marginHorizontal: 50,
        marginTop: 30,
        height: 300,
        width: 200,
    },

    display1: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 30,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'white',
    }, display2: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 30,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'white',
    },

    display1erro: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 30,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'white',
    }, display2erro: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 30,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'white',
    },

    btn: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginHorizontal: 100,
        marginTop: 50,
        width: 200,
        borderRadius: 20
    },

    tituloBtn: {
        alignSelf: 'center',
        color: '#090952',
        fontSize: 20
    },
    partBaixo: {
        alignItems: 'center',
        marginTop: 30
    },

    ec: {
        color: '#FFFFFF'

    },
});
