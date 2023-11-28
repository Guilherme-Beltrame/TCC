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
                    [document.getElementById('Aula1Segunda').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Segunda').value,
                        estado: '',
                        finalAula: document.getElementById('Saida1').value,
                    },
                    [document.getElementById('Aula2Segunda').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Segunda').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Segunda').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Segunda').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Segunda').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Terca: {
                exist: true,
                diaSena: 2,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Terca').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Terca').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Terca').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Terca').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Terca').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Terca').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Quarta: {
                exist: true,
                diaSena: 3,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Quarta').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Quarta').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Quarta').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Quarta').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Quarta').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Quarta').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Quinta: {
                exist: true,
                diaSena: 4,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Quinta').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Quinta').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Quinta').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Quinta').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Quinta').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Quinta').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Sexta: {
                exist: true,
                diaSena: 5,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Sexta').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Sexta').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Sexta').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Sexta').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Sexta').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Sexta').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            }
        }
    }
}

function commitDadosAutoTime() {
    return {
        nome: formCadTur.nomeTur().value,
        users: {
            inst: firebase.auth().currentUser.uid,
        },
        cronograma: {
            Segunda: {
                exist: true,
                diaSena: 1,
                periodo: periodoSegunda,
                aulas: {

                }
            }
        }
    }
}

function CadTurma() {
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
        cronograma: {
            exist: true,
            Segunda: {
                exist: true,
                diaSena: 1,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Segunda').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Segunda').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Segunda').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Segunda').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Segunda').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Segunda').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Segunda').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Terca: {
                exist: true,
                diaSena: 2,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Terca').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Terca').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Terca').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Terca').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Terca').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Terca').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Terca').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Quarta: {
                exist: true,
                diaSena: 3,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Quarta').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Quarta').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Quarta').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Quarta').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Quarta').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Quarta').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Quarta').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Quinta: {
                exist: true,
                diaSena: 4,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Quinta').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Quinta').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Quinta').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Quinta').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Quinta').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Quinta').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Quinta').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            },
            Sexta: {
                exist: true,
                diaSena: 5,
                periodo: document.getElementById('Entra1').value + ' as ' + document.getElementById('Entra6').value,
                aulas: {
                    [document.getElementById('Aula1Sexta').value]: {
                        periAula: document.getElementById('Entra1').value + ' as ' + document.getElementById('Sai1').value,
                        materia: document.getElementById('Aula1Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra1').value,
                    },
                    [document.getElementById('Aula2Sexta').value]: {
                        periAula: document.getElementById('Entra2').value + ' as ' + document.getElementById('Sai2').value,
                        materia: document.getElementById('Aula2Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra2').value,
                    },
                    [document.getElementById('Aula3Sexta').value]: {
                        periAula: document.getElementById('Entra3').value + ' as ' + document.getElementById('Sai3').value,
                        materia: document.getElementById('Aula3Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra3').value,
                    },
                    [document.getElementById('Aula4Sexta').value]: {
                        periAula: document.getElementById('Entra4').value + ' as ' + document.getElementById('Sai4').value,
                        materia: document.getElementById('Aula4Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra4').value,
                    },
                    [document.getElementById('Aula5Sexta').value]: {
                        periAula: document.getElementById('Entra5').value + ' as ' + document.getElementById('Sai5').value,
                        materia: document.getElementById('Aula5Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra5').value,
                    },
                    [document.getElementById('Aula6Sexta').value]: {
                        periAula: document.getElementById('Entra6').value + ' as ' + document.getElementById('Sai6').value,
                        materia: document.getElementById('Aula6Sexta').value,
                        estado: '',
                        inicio: document.getElementById('Entra6').value,
                    }
                }
            }
        }
    }
}

function CadTurEInstHora() {
    CadTurma();
    const dadohorario = commitHorario();
    var userUid = firebase.auth().currentUser.uid;
    db.collection('instituicoes')
        .where('user.uid', '==', userUid)
        .add(dadohorario)
        .then(() => {
            window.location.href = 'HomeInst.html';
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })  
}

function cadTurBD() {
    const autoTime = formCadTur.autoTime();
    const dadosCad = '';
    if (autoTime.checked) {
        CadTurEInstHora();
        // dadosCad = await commitDadosAutoTime();
    } else {
        CadTurma();
    }


}

function alteravaloropition(id) {
    const option = document.getElementById(id);
    console.log(option.value)
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