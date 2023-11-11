function SairCont() {
    firebase.auth().signOut().then(() => {
        window.location.href = 'Login.html';
    }).catch(() => {
        alert("Erro ao sair da conta");
    })
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        pegaDadosdoBD(user);

        console.log(user)
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
            console.log(Turmas);
        })
}

function goToRoom(Turma) {
    window.location.href = "1-A.html?id="+Turma.id+"&inst="+Turma.users.inst+"&prof="+Turma.users.prof;
}

function pagProfs() {
    window.location.href = "Profs.html";
}

function CadTurma() {
    window.location.href = "CadTurma.html";
}
