firebase.auth().onAuthStateChanged(function (user) {
    setTimeout(() => {
        if (user) {
            seInst(user.uid);
            seProf(user.uid);
        }
    }, 1000);
});

function seInst(id) {
    db.collection('instituicoes')
        .where('user.uid', '==', id)
        .get()
        .then(promisse => {
            const Type = promisse.docs.map(doc => doc = doc.data().type);
            if (Type == 'instituicao') {
                window.location.href = 'HomeInst.html'
            }
        })
        .catch(error => {
            console.log(error)
        })
}

function seProf(id) {
    db.collection('professores')
        .where('user.uid', '==', id)
        .get()
        .then(promisse => {
            const Type = promisse.docs.map(doc => doc = doc.data().type);
            if (Type == 'professor') {
                window.location.href = 'HomeProf.html'
            }
        })
        .catch(error => {
            console.log(error)
        })
}
function Entrar() {
    const Email = formLogin.email().value;
    const Password = formLogin.senha().value;
    firebase.auth().signInWithEmailAndPassword(Email, Password).then(response => {
        seInst(response.user.uid);
        seProf(response.user.uid);
    }).catch(error => {
        MsgErro();
        console.log(error)
    });
}

function habilitaBtn(){ 
    formLogin.btn().disabled  = apareceBtn();
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
    var email = formLogin.email().value;
    if (!email || !validaEmail(email)) {
        return true
    }
    var senha = formLogin.senha().value;
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
    const Email = formLogin.email().value;
    firebase.auth().sendPasswordResetEmail(Email).then(() => {
        msgRcu(Email);
    }).catch(() => {
        alert("insira o email corrtamente");
    })
}
