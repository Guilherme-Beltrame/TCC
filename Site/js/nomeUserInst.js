firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user.uid)
        NomeINst(user.uid)
    }
})

function NomeINst(userID){
    db.collection('instituicoes')
        .where('uid', '==', userID)
        .get()
        .then(snapshot=>{
            console.log(snapshot.docs)
            const NomeINst = document.getElementById('NomeInstituição');
            NomeINst.innerHTML =snapshot.docs[0].data().nome;
        })
        .catch(erro =>{
            alert('erro ao carregar dados'+ erro)
            console.log(erro)
        })
}