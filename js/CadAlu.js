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
    .then(()=>{
        window.location.href='HomeInst.html'
    })
    .catch(erro =>{
        console.log(erro);
        alert(erro);
    })
}

function fakeDados() {
    return {
        Curso: 'Desenvolvimento de Sistemas',
        Email: 'Gui@gmail.com',
        Entrada: '07:30 AM',
        Estado: 'Ausente',
        Frequencia: {
            Segunda: 0,
            Terca: 0,
            Quarta: 0,
            Quinta: 0,
            Sexta: 0,
        },
        Nome: 'Giovana Almeida',
        RM: 2021200394,
        Saida: '15:30 PM',
        Turma: '1º ano A',
        idTurma: 'fGF3zfRjTKnwtBre5JOV',
        periodo: '7:30 ás 15:30',
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
    const dias = document.getElementsByName('dia');
    ValidaPeriodos(dias);
    const RM = formCadAlu.rm().value;
    if (RM) {
        console.log(RM)
        console.log(ValidaRM(RM));
        return !ValidaRM(RM);
    }
    return false;
}

function habilitaBtn() {
    formCadAlu.btn().disabled = apareceBtn();
}