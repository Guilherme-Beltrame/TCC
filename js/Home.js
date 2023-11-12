firebase.auth().onAuthStateChanged(user => {
    if (user) {
        pegaDadosdoBD(user);
    }
})

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
    window.location.href = "1-A.html?id="+Turma.id+"&inst="+Turma.users.inst+"&prof="+Turma.users.prof;
}

function pagProfs(inst) {
    window.location.href = "Profs.html?inst="+inst;
}

function CadTurma() {
    window.location.href = "CadTurma.html";
}
