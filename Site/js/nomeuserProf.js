firebase.auth().onAuthStateChanged(user => {
    if (user) {
        NomeProf(user.uid)
    }
})

function NomeProf(userID){
    db.collection('professores')
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