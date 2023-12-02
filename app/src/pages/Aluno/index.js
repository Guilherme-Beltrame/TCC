import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { auth, db } from '../../services/configFirebase';
import { Loadin } from '../Loadin/loadin';
import { getDoc, doc, updateDoc } from "firebase/firestore";

export function Aluno({ capthQR, rezetaQR }) {
    const [nome, setnome] = useState('')
    const [Imagem, setImage] = useState('')
    const [horaentrada, SetHoraentrada] = useState('');
    const [rm, setRM] = useState('');
    const [email, setemail] = useState('');
    const [idTurma, setidTurma] = useState('');
    const [turma, setturma] = useState('');
    const [uidInst, setuidInst] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [register, setRegister] = useState(true);
    const [entrada, setentrada] = useState(false);
    var cronograma;

    useEffect(() => {
        async function vai() {
            setCarregando(true);
            await pegadadosDB();
            sobealteracoes();
            setCarregando(false)
        }
        vai()
    }, []);

    async function pegadadosDB() {
        const docRef = doc(db, 'Alunos', capthQR);
        const docSnapshot = await getDoc(docRef);
        var re = /(\w+)\:(\w+)/;
        if (docSnapshot.exists()) {
            await setturma(docSnapshot.data().turma);
            await setuidInst(docSnapshot.data().uidInst);
            await setidTurma(docSnapshot.data().idTurma);
            await setnome(docSnapshot.data().nome);
            await setRM(docSnapshot.data().RM);
            await setImage(docSnapshot.data().image);
            await setemail(docSnapshot.data().email);
            let diaSena = 5;//new Date().getDay();
            let hours = new Date().getHours();
            (hours < 10) && (hours = `0${hours}`);
            let min = new Date().getMinutes();
            (min < 10) && (min = `0${min}`);
            await SetHoraentrada(
                `${hours}:${min}`
            );
            setentrada(horaentrada);
            const diasAulas = [...Object.values(docSnapshot.data().cronograma)]
            diasAulas.forEach(dia => {
                if (dia.diaSena == diaSena) {
                    const aulas = [...Object.values(dia.aulas)]
                    aulas.forEach(aula => {
                        var HoraAulafinal = aula.finalAula.replace(re, "$1");
                        var MinAulaFinal = aula.finalAula.replace(re, "$2");
                        var HoraAluEntrada = '10'//horaentrada.replace(re, "$1");
                        var MinAluEntrada = '30'//horaentrada.replace(re, "$2");
                        var diferencaHora = HoraAulafinal - HoraAluEntrada;
                        var diferecaMin = MinAulaFinal - MinAluEntrada
                        if (diferencaHora < 0) {
                            aula.estado = 'Ausente'
                        } else {
                            if (diferecaMin >= 0) {
                                aula.estado = 'Presente'
                            } else {
                                aula.estado = 'Ausente'
                            }
                        }

                    })
                }
            });

            cronograma = diasAulas;
        } else {
            alert('dados não encontrados')
        }

    }

    async function dadosjuntos() {
        await pegadadosDB();
        return {
            RM: rm,
            cronograma: cronograma,
            email: email,
            entrada: entrada,
            idTurma: idTurma,
            image: Imagem,
            nome: nome,
            saida: '',
            turma: turma,
            uidInst: uidInst,
        }
    }

    async function sobealteracoes() {
        const dados = await dadosjuntos();
        console.log(dados)
    }

    var click = 0;

    const registrarbd = async () => {
        const dados = await dadosjuntos();
        console.log(dados)
        sobealteracoes();

        click++
        if (click == 2) {
            const snapshotRef = doc(db, 'Alunos', capthQR);
            await updateDoc(snapshotRef, dados);
            setRegister(false);

        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.conteudo}>
                    <View style={styles.textNome}>
                        <Text style={styles.text}> {nome}</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: Imagem }} />
                    </View>
                    <Text style={styles.text2}><Text style={{ color: '#99FD9D', fontWeight: 800 }}> Horário:</Text> {horaentrada} </Text>
                    {register ?
                        <TouchableOpacity
                            onPress={registrarbd}
                            style={styles.btn}>
                            <Text style={styles.tituloBtn}>Registrar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={rezetaQR}
                            style={styles.btn}>
                            <Text style={styles.tituloBtn}>OK</Text>
                        </TouchableOpacity>}
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
    scrollView: {
        flex: 1,
    },
    conteudo: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 80,
        marginTop: 70,
    },
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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
    textNome: {
        flex: 0.3,
        width: '90%'
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
