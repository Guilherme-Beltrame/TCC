async function CadAlu() {
    await buscaIdTurma(formCadAlu.Turma().value);
    const dados = commitDados();
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

function commitDados() {
    return {
        email: formCadAlu.emailAlu().value,
        cronograma: {
            Segunda: {
                exist: formCadAlu.DiaCheck('Segunda').value,
                estado: '',
                entrada: '',
                saida: '',
                Periodo: formCadAlu.Entrada('SegundaEntrada').value + ' as ' + formCadAlu.Saida('SegundaSaida').value,
            },
            Terca: {
                exist: formCadAlu.DiaCheck('Terca').value,
                estado: '',
                entrada: '',
                saida: '',
                Periodo: formCadAlu.Entrada('TercaEntrada').value + 'as' + formCadAlu.Saida('TercaSaida').value,
            },
            Quarta: {
                exist: formCadAlu.DiaCheck('Quarta').value,
                estado: '',
                entrada: '',
                saida: '',
                Periodo: formCadAlu.Entrada('QuartaEntrada').value + 'as' + formCadAlu.Saida('QuartaSaida').value,
            },
            Quinta: {
                exist: formCadAlu.DiaCheck('Quinta').value,
                estado: '',
                entrada: '',
                saida: '',
                Periodo: formCadAlu.Entrada('QuintaEntrada').value + 'as' + formCadAlu.Saida('QuintaSaida').value,
            },
            Sexta: {
                exist: formCadAlu.DiaCheck('Sexta').value,
                estado: '',
                entrada: '',
                saida: '',
                Periodo: formCadAlu.Entrada('SextaEntrada').value + 'as' + formCadAlu.Saida('SextaSaida').value,
            }
        },
        nome: formCadAlu.nome().value,
        RM: parseFloat(formCadAlu.rm().value),
        turma: formCadAlu.Turma().value,
        idTurma: TurmaId,
        uid: firebase.auth().currentUser.uid
    }
}
var TurmaId
async function buscaIdTurma(nameTurma) {

    await db.collection('Turma')
        .where('nome', '==', nameTurma)
        .get()
        .then(snapshot => {
            const turmas = snapshot.docs.map(Turma => ({
                ...Turma.data(),
                idTurma: Turma.id,
            }));

            TurmaId = turmas[0].idTurma;
        })
        .catch(erro => {
            console.log(erro);
        });

}

function fakeDados() {
    return {
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
    var cont2 = 0;
    var nomes;
    
    if (dias) {
        dias.forEach(dia => {
            console.log(dia.value);
            if (dia.value == 'true') {
                cont2--;
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
            } else if (dia.value == 'false') {
                cont2++;
                console.log(dia.value)
                nomes = dia.id + 'Entrada';
                console.log(nomes)
                if (formCadAlu.Entrada(nomes).value != '') {
                    console.log(cont)
                    cont++;
                }
                nomes = dia.id + 'Saida';
                if (formCadAlu.Saida(nomes).value != '') {
                    cont++;
                }
            }
        });
        console.log(cont2)
        if (number > 0) {
            console.log(number);
            return true;
        } else if (cont > 0) {
            console.log(cont);
            return true;
        } else if (cont2 == 5) {
            return true;
        }
    } else {
        return false;
    }
}

function habilitaBtn() {
    formCadAlu.btn().disabled = apareceBtn();
}