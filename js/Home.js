firebase.auth().onAuthStateChanged(user => {
    console.log(seInst(user.uid))
    if (seInst(user.uid)) {
        pegaDadosdoBD(user.uid);
    } else if (seProf(user.uid)) {
        pegaDadosdoBD(user.uid);
    } else {
        
        alert('Você não tem permissão em acessar esses dados');
        //window.location.href = "../index.html";
    }
})

function seInst(id) {
    db.collection('instituicoes')
        .where('user.uid', '==', id)
        .get()
        .then(() =>{
            console.log(id)
            return true
        })
        .catch(error =>{
            console.log(id)
            return error
        });
}

function seProf(id) {
    db.collection('Professores')
        .where('uid', '==', id)
        .get()
        .then(() =>{
            return true
        })
        .catch(error =>{
            return false
        });
}

function pegaDadosdoBD(user) {
    db.collection('Turma')
        .where('users.inst', '==', user.uid)
        .get()
        .then(snapshot => {
            const Turmas = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            ExibiTurTela(Turmas);
            ExibBtnProfs(user.uid);
        })
}

function goToRoom(Turma) {
    window.location.href = "1-A.html?id=" + Turma.id + "&inst=" + Turma.users.inst + "&prof=" + Turma.users.prof;
}

function pagProfs(inst) {
    window.location.href = "Profs.html?inst=" + inst;
}

function CadTurma() {
    window.location.href = "CadTurma.html";
}
