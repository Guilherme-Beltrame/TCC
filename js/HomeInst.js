firebase.auth().onAuthStateChanged(user => {
    
    seProf(user.uid);
    if(user){
        pegaDadosdoBD(user.uid);
    }
})

function seProf(id) {
    db.collection('professores')
        .where('user.uid', '==', id)
        .get()
        .then(promisse => {
            const Type = promisse.docs.map(doc => doc = doc.data().type);
            if (Type == 'professor') {
                alert('Você não tem permissão de acesso a essa pág.')
                window.location.href = 'HomeProf.html'
            }
        })
        .catch(error => {
            console.log(error)
        })
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
