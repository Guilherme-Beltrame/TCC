firebase.auth().onAuthStateChanged(user => {
    seProf(user.uid);
    seInst(user.uid);
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
                pegaDadosdoBDInst(typeinst.user.uid)
                ExibBtnProfs(typeinst.user.uid);
            });
        })
        .catch(error => {
            console.log(error)
            return false
        })
}

function seProf(id) {
    retielemento();
    db.collection('professores')
        .where('user.uid', '==', id)
        .get()
        .then(types => {
            const type = types.docs.map(proftype => ({
                ...proftype.data(),
            }));
            type.forEach(typeprof => {
                console.log(typeprof.user.uid);
                pegaDadosdoBDprof(typeprof.user.uid);
            });
        })
        .catch(error => {
            console.log(error)
            return false
        });
}

function retielemento(){
    const el = {
        tracos: () => document.getElementById('tracos'),
        divCadTur: () => document.getElementById('addTur'),
    }
    el.tracos().classList.add('fora');
    el.divCadTur().classList.add('fora');
}

function pegaDadosdoBDprof(id) {
    db.collection('Turma')
        .where('users.prof', '==', id)
        .get()
        .then(snapshot => {
            const Turmas = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            ExibiTurTela(Turmas);
        })
}

function pegaDadosdoBDInst(id) {
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
