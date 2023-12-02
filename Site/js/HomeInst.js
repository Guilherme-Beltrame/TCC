firebase.auth().onAuthStateChanged(user => {
    seProf(user.uid);
    if (user) {
        pegaDadosdoBD(user.uid);
        saiTelaCarregando();
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
            entratelaCarregando();
            saiTelaCarregando();
            msgSucessoExclu(NomeTur);
            saiTelaCarregando();
            console.error("Error removing document: ", error);
        })
}

function pegaDadosdoBD(id) {
    db.collection('Turma')
        .where('users.inst', '==', id)
        .get()
        .then(snapshot => {
            const Turmas = snapshot.docs.map(doc => ({
                ...doc.data(),
                TurID: doc.id
            }));

            ExibiTurTela(Turmas);
            ExibBtnProfs(id);

        })
        .catch(erro => {
            console.log(erro)
        });
}

function goToRoom(Turma) {
    window.location.href = "TurmaInst.html?id=" + Turma.TurID + "&inst=" + Turma.users.inst;
}

function pagProfs(inst) {
    window.location.href = "Profs.html?inst=" + inst;
}

function CadTurma() {
    window.location.href = "CadTurma.html";
}

function ApaLixeira(idTurma, idDivNome, idDivGeral) {
    const lixeira = document.getElementById(idTurma);
    const divGeral = document.getElementById(idDivGeral);
    const divnome = document.getElementById(idDivNome);

    divGeral.classList.remove('justify-content-center');
    divGeral.classList.add('justify-content-start');

    lixeira.classList.remove('sembtn');
    lixeira.classList.add('combtn');

    divnome.classList.add('mt-4');
}

function SaiLixeira(idTurma, idDivNome, idDivGeral) {
    const lixeira = document.getElementById(idTurma);
    const divGeral = document.getElementById(idDivGeral);
    const divnome = document.getElementById(idDivNome);

    divGeral.classList.remove('justify-content-start');
    divGeral.classList.add('justify-content-center');

    lixeira.classList.remove('combtn');
    lixeira.classList.add('sembtn');

    divnome.classList.remove('mt-4');
}

function ExcluiTurmaDB(idTur, NomeTur) {
    entratelaCarregando();
    db.collection("Turma").doc(idTur).delete().then(() => {
        saiTelaCarregando();
        msgSucessoExclu(NomeTur);
    }).catch((error) => {
        saiTelaCarregando();
        console.error("Error removing document: ", error);
    });
}