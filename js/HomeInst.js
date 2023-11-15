
firebase.auth().onAuthStateChanged(user => {
    if(user){
        pegaDadosdoBD(user.uid);
    }
})

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
            ExibBtnProfs(id);
        })
        .catch(erro =>{
            console.log(erro)
        });
}

function goToRoom(Turma) {
    window.location.href = "TurmaInst.html?id=" + Turma.id + "&inst=" + Turma.users.inst;
}

function pagProfs(inst) {
    window.location.href = "Profs.html?inst=" + inst;
}

function CadTurma() {
    window.location.href = "CadTurma.html";
}
