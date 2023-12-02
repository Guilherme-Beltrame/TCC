
firebase.auth().onAuthStateChanged(user => {
    if(user){
        pegaDadosdoBD(user.uid);
        saiTelaCarregando();
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
            ExibiTurTelaProf(Turmas);
        })
        .catch(erro =>{
            console.log(erro)
        });
}

function goToRoom(Turma) {
    window.location.href = "turmaProf.html?id=" + Turma.id + "&prof=" + Turma.users.prof;
}

function CadTurma() {
    window.location.href = "CadTurma.html";
}
