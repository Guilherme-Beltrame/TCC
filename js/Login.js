firebase.auth().onAuthStateChanged(function (user) {
    setTimeout(() => {
        if (user) {
            window.location.href = "Tela-Principal.html"
        }
    }, 1000);
});

function seInst(id) {
    db.collection('instituicoes')
        .where('user.uid', '==', id)
        .get()
        .then(() => {
            window.location.href = 'HomeInst'
        })
        .catch(error => {
            console.log(error)
            return false
        })
}

function Entrar() {
    const Email = form.email().value;
    const Password = form.senha().value;
    firebase.auth().signInWithEmailAndPassword(Email, Password).then(response => {
        seInst(response.user.uid);
    }).catch(error => {
        MsgErro();
    });
}

function MsgErro() {
    criaFundos();
    criaElementos();
    MsgInvaliCredenciais();
}

function MsgInvaliCredenciais() {
    const consequencia = document.getElementById('consequencia');
    const btnConseq = document.getElementById('btnConseq');
    const resulValida = document.getElementById('resulValida');
    consequencia.innerHTML = 'ERRO!';
    resulValida.innerHTML = 'Verifique os Campos Senha e Email.';
    btnConseq.innerHTML = 'Fechar';
    btnConseq.onclick = function () {
        window.location.href = 'Login.html';
    }
}

function msgRcu(email) {
    criaFundos();
    criaElementos();
    MsgVeriEmail(email);
}

function apareceBtn() {
    var email = form.email().value;
    if (!email || !validaEmail(email)) {
        return true
    }
    var senha = form.senha().value;
    if (!senha || !validaSenha(senha)) {
        return true;
    }
    return false;
}

function MsgVeriEmail(email) {
    const consequencia = document.getElementById('consequencia');
    const btnConseq = document.getElementById('btnConseq');
    const resulValida = document.getElementById('resulValida');
    consequencia.innerHTML = 'Parabéns!';
    resulValida.innerHTML = 'Verifique o email <strong>' + email + '</strong> e altere sua Senha!';
    btnConseq.innerHTML = 'Fechar';
    btnConseq.onclick = function () {
        window.location.href = 'Login.html';
    }
}

function RecuSenha() {
    const Email = form.email().value;
    firebase.auth().sendPasswordResetEmail(Email).then(() => {
        msgRcu(Email);
    }).catch(error => {
        alert("algo deu errado" + error);
    })
}

const form = {
    email: () => document.getElementById('-email'),
    senha: () => document.getElementById('-Senha'),
    btn: () => document.getElementById('_Btn'),
}