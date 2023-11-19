function commitDados() {
    return {
        nome: formCadTur.nomeTur().value,
        users: {
            inst: firebase.auth().currentUser.uid,
        }
    }
}

function cadTurBD() {
    const dadosCad = commitDados();
    db.collection('Alunos')
        .add(dadosCad)
        .then(() => {
            window.location.href = 'HomeInst.html';
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })
}

function CadAlu() {
    const dados = fakeDados();

    db.collection('Alunos')
        .add(dados)
        .then(() => {
            window.location.href = 'HomeInst.html'
        })
        .catch(erro => {
            console.log(erro);
            alert(erro);
        })
}

function commitDados(){
    return{
        email: formCadAlu.email().value,
        cronograma: {
            Segunda:{
                
            }
        }
    }
}

function fakeDados() {
    return {
        Email: 'Gui@gmail.com',
        Cronograma: {
            Segunda: {
                exist: true,
                estado: 'Presente',
                Entrada: '07:30',
                Saida: '',
                Periodo: '07:30 as 15:30'
            }, terca: {
                exist: true,
                estado: 'Presente',
                Entrada: '07:30',
                Saida: '',
                Periodo: '07:30 as 15:30'
            }, Quarta: {
                exist: false,
                estado: '',
                Entrada: '',
                Saida: '',
                Periodo: ''
            }, Segunda: {
                exist: true,
                estado: 'Ausente',
                Entrada: '07:30',
                Saida: '10:30',
                Periodo: '08:30 as 15:30'
            }, Segunda: {
                exist: false,
                estado: 'Presente',
                Entrada: '07:30',
                Saida: '',
                Periodo: '07:30 as 15:30'
            },
        },
        Nome: 'Giovana Almeida',
        RM: 2021200394,
        Turma: '1º ano A',
        idTurma: 'fGF3zfRjTKnwtBre5JOV',
        uid: 'duqCTVcpKybWOpLxpuxOVzZUoV42'
    }
}

function apareceBtn() {
    var nome = formCadAlu.nome().value;
    if (nome == '') {
        console.log(nome)
        return true;
    }
    var email = formCadAlu.emailAlu().value;
    if (!validaEmail(email)) {
        console.log(email)
        return true;
    }
    var turma = formCadAlu.Turma().value
    if (turma == '' || turma.length <= 1) {
        console.log(turma);
        return true;
    }
    const RM = formCadAlu.rm().value;
    if (RM < 0 || RM.length < 10 || RM.length > 11) {
        console.log(RM.length)
        return true;
    }
    const dias = document.getElementsByName('dia');
    var number = 0;
    var cont = 0;
    var nomes;
    if (dias) {
        dias.forEach(dia => {
            console.log(dia.value);
            if (dia.value == 1) {
                nomes = dia.id + 'Entrada';
                console.log(formCadAlu.Entrada(nomes).value);
                if (formCadAlu.Entrada(nomes).value == '') {
                    console.log('foiEntraVazio')
                    number++;
                    console.log(number)
                }
                nomes = dia.id + 'Saida';
                if (formCadAlu.Saida(nomes).value == '') {
                    console.log('foiSaidaVazio')
                    number++;
                    console.log(number)

                }
            } else if (dia.value == 0) {
                nomes = dia.id + 'Entrada';
                if(formCadAlu.Entrada(nomes).value!= ''){
                    cont++;
                }
                nomes = dia.id + 'Saida';
                if (formCadAlu.Saida(nomes).value != '') {
                    cont++;
                }
            }
        });
        if (number > 0) {
            console.log(number);
            return true;
        } else if(cont>0){
            console.log(cont);
            return true;
        }
    } else {
        return false;
    }
}

function habilitaBtn() {
    formCadAlu.btn().disabled = apareceBtn();
}