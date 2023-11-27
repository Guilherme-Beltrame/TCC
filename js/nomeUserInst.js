firebase.auth().onAuthStateChanged(user => {
    if (user) {
        NomeINst(user.uid)
    }
})

function NomeINst(userID){
    db.collection('instituicoes')
        .where('user.uid', '==', userID)
        .get()
        .then(snapshot=>{
            const NomeINst = document.getElementById('NomeInstituição');
            NomeINst.innerHTML =snapshot.docs[0].data().nome;
        })
        .catch(erro =>{
            alert('erro ao carregar dados'+ erro)
            console.log(erro)
        })
}