firebase.auth().onAuthStateChanged(user => {
    seInst(user.uid);
    seProf(user.uid);
})

function seInst(id) {
    db.collection('instituicoes')
        .where('user.uid', '==', id)
        .get()
        .then(types => {
            const type = types.docs.map(insttype => ({
                ...insttype.data(),
            }));
            type.forEach(typeinst => {
                console.log(typeinst.type)
                pegaDadosdoBD(typeinst.user.uid)
                ExibBtnProfs(typeinst.user.uid);
            });
        })
        .catch(error => {
            console.log(error)
            return false
        })
}

function seProf(id) {
    db.collection('Professores')
        .where('uid', '==', id)
        .get()
        .then(() => {
            return true
        })
        .catch(error => {
            return false
        });
}

function pegaDadosdoBD(id) {
    db.collection('Turma')
        .where('users.inst', '==', id)
        .get()
        .then(snapshot => {
            const Turmas = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            ExibiTurTela(Turmas);
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
