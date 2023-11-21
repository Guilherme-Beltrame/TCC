function commitDados() {
    return {
        nome: formCadTur.nomeTur().value,
        users: {
            inst: firebase.auth().currentUser.uid,
        }
    }
}

function cadTurBD() {
    const dadosCad = commitDados();
    db.collection('Turma')
        .add(dadosCad)
        .then(()=>{
            window.location.href = 'HomeInst.html';
        })
        .catch(erro =>{
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })

}

function apareceBtn(){
    const nometur = formCadTur.nomeTur().value;
    if(nometur == '' || nometur.length < 3){
        return true;
    }
    else{
        return false;
    }
}

function habilitaBtn(){
    formCadTur.btncad().disabled = apareceBtn();
}