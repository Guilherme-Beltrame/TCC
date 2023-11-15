
firebase.auth().onAuthStateChanged(user => {
    if(user){
        pegaDadosdoBD(user.uid);
    }
})

function pegaDadosdoBD(id) {
    db.collection('Turma')
        .where('users.prof', '==', id)
        .get()
        .then(snapshot => {
            const Turmas = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            console.log(Turmas);
            ExibiTurTela(Turmas);
        })
        .catch(erro =>{
            console.log(erro)
        });
}

function goToRoom(Turma) {
    window.location.href = "TurmaProf.html?id=" + Turma.id + "&prof=" + Turma.users.prof;
}

function pagProfs(inst) {
    window.location.href = "Profs.html?inst=" + inst;
}

function CadTurma() {
    window.location.href = "CadTurma.html";
}
