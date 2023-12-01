firebase.auth().onAuthStateChanged(user => {
    seHora(user.uid);
})

function seHora(id) {
    db.collection('instituicoes')
        .where('user.uid', '==', id)
        .get()
        .then(promisse => {
            const Type = promisse.docs.map(doc => doc = doc.data());
            if (Type[0].type == 'instituicao') {
                if (Type[0].autoHora == false) {
                    console.log('entrou')
                    formCadTur.btncad().addEventListener('click', () => {
                        cadTurBD();
                    })
                } else {
                    preenchePeriodos(Type[0].user.uid);
                    formCadTur.autohora().setAttribute('style', 'display:none !important');
                }
            }
            saiTelaCarregando();
        })
        .catch(error => {
            console.log(error)
        })
}

async function preenchePeriodos(uidInst) {
    await db.collection('instituicoes')
        .where('user.uid', '==', uidInst)
        .get()
        .then(inst => {
            const instituicao = inst.docs.map(doc => doc = doc.data());
            const diasSena = [...Object.values(instituicao[0].aulas)]
            console.log(diasSena)
            diasSena.forEach(dia => {
                let horaEntra = 'Entra'+dia.aula
                let inputentraHora = document.getElementById(horaEntra);
                inputentraHora.value = dia.inicio;
                let horaSaida = 'Sai'+dia.aula
                let inputSaidaHora = document.getElementById(horaSaida);
                inputSaidaHora.value = dia.final;
            });
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })
}

function commitDados() {
    return {
        nome: formCadTur.nomeTur().value,
        users: {
            inst: firebase.auth().currentUser.uid,
        },
        cronograma: {
            Segunda: {
                exist: true,
                diaSena: 1,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    1: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Segunda').value,
                        estado: '',
                        finalAula: document.getElementById('Sai1').value,
                    },
                    2: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Segunda').value,
                        estado: '',
                        finalAula: document.getElementById('Sai2').value,
                    },
                    3: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Segunda').value,
                        estado: '',
                        finalAula: document.getElementById('Sai3').value,
                    },
                    4: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Segunda').value,
                        estado: '',
                        finalAula: document.getElementById('Sai4').value,
                    },
                    5: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Segunda').value,
                        estado: '',
                        finalAula: document.getElementById('Sai5').value,
                    },
                    6: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Segunda').value,
                        estado: '',
                        finalAula: document.getElementById('Sai6').value,
                    }
                }
            },
            Terca: {
                exist: true,
                diaSena: 2,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    1: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Terca').value,
                        estado: '',
                        finalAula: document.getElementById('Sai1').value,
                    },
                    2: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Terca').value,
                        estado: '',
                        finalAula: document.getElementById('Sai2').value,
                    },
                    3: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Terca').value,
                        estado: '',
                        finalAula: document.getElementById('Sai3').value,
                    },
                    4: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Terca').value,
                        estado: '',
                        finalAula: document.getElementById('Sai4').value,
                    },
                    5: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Terca').value,
                        estado: '',
                        finalAula: document.getElementById('Sai5').value,
                    },
                    6: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Terca').value,
                        estado: '',
                        finalAula: document.getElementById('Sai6').value,
                    }
                }
            },
            Quarta: {
                exist: true,
                diaSena: 3,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    1: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Quarta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai1').value,
                    },
                    2: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Quarta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai2').value,
                    },
                    3: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Quarta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai3').value,
                    },
                    4: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Quarta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai4').value,
                    },
                    5: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Quarta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai5').value,
                    },
                    6: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Quarta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai6').value,
                    }
                }
            },
            Quinta: {
                exist: true,
                diaSena: 4,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    1: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Quinta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai1').value,
                    },
                    2: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Quinta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai2').value,
                    },
                    3: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Quinta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai3').value,
                    },
                    4: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Quinta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai4').value,
                    },
                    5: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Quinta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai5').value,
                    },
                    6: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Quinta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai6').value,
                    }
                }
            },
            Sexta: {
                exist: true,
                diaSena: 5,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    1: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Sexta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai1').value,
                    },
                    2: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Sexta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai2').value,
                    },
                    3: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Sexta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai3').value,
                    },
                    4: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Sexta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai4').value,
                    },
                    5: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Sexta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai5').value,
                    },
                    6: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Sexta').value,
                        estado: '',
                        finalAula: document.getElementById('Sai6').value,
                    }
                }
            }
        }
    }
}

function CadTurmaBD() {
    const dados = commitDados();
    console.log(dados)
    db.collection('Turma')
        .add(dados)
        .then(() => {
            window.location.href = 'HomeInst.html';
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })
}

function commitHorario() {
    return {
        aulas: {
            1: {
                aula: 1,
                final: document.getElementById('Sai1').value,
                inicio: document.getElementById('Entra1').value,
            },
            2: {
                aula: 2,
                final: document.getElementById('Sai2').value,
                inicio: document.getElementById('Entra2').value,
            },
            3: {
                aula: 3,
                final: document.getElementById('Sai3').value,
                inicio: document.getElementById('Entra3').value,
            },
            4: {
                aula: 4,
                final: document.getElementById('Sai4').value,
                inicio: document.getElementById('Entra4').value,
            },
            5: {
                aula: 5,
                final: document.getElementById('Sai5').value,
                inicio: document.getElementById('Entra5').value,
            },
            6: {
                aula: 6,
                final: document.getElementById('Sai6').value,
                inicio: document.getElementById('Entra6').value,
            }
        }
    }
}

function CarHoraTur(uid) {
    const dadosHora = commitHorario();
    db.collection('instituicoes')
        .doc(uid)
        .update(dadosHora)
        .then(() => {
            CadTurmaBD();
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })
}

async function alteraAutoHora(uid, instdad) {
    await db.collection('instituicoes')
        .doc(uid)
        .update(instdad)
        .then(() => {
            CarHoraTur(uid);
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })
}

async function habilitaAutoHora() {
    const dadohorario = '';
    const userUid = await firebase.auth().currentUser.uid;
    await db.collection('instituicoes')
        .where('user.uid', '==', userUid)
        .get()
        .then(inst => {
            const instituicao = inst.docs.map(doc => ({ ...doc.data(), iddoc: doc.id }));
            instituicao[0].autoHora = true;
            console.log(instituicao[0].iddoc)
            alteraAutoHora(instituicao[0].iddoc, instituicao[0])
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })
}

function cadTurBD() {
    const autoTime = formCadTur.autoTime();
    if (autoTime.checked) {
        habilitaAutoHora();
    } else {
        CadTurmaBD();
    }
}

function apareceBtn() {
    const nometur = formCadTur.nomeTur().value;
    const camptimesai = document.getElementsByName('horaSai');
    const camptimeentra = document.getElementsByName('horaEntra');
    const materias = document.getElementsByName('materaia');
    var cont, cont2, cont3 = 0;
    camptimeentra.forEach(campo => {
        if (campo.value == '') {
            cont++
        }
    });
    camptimesai.forEach(campo => {
        if (campo.value == '') {
            cont2++
        }
    });
    materias.forEach(campo => {
        if (campo.value == '') {
            cont3++
        }
    });
    if (cont2 > 0) {
        return true;
    } else if (cont > 0) {
        return true;
    } else if (cont3 > 0) {
        return true;
    } else if (nometur == '' || nometur.length < 3) {
        return true;
    } else {
        return false;
    }
}

function habilitaBtn() {
    formCadTur.btncad().disabled = apareceBtn();
}