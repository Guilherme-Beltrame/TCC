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
    db.collection('Alunos')
        .add(dadosCad)
        .then(() => {
            window.location.href = 'HomeInst.html';
        })
        .catch(erro => {
            alert('Erro ao cadastrar, recarregue a pág. e tente novamente.');
            console.log(erro);
        })
}



function CadAlu(){

}

function apareceBtn(){
    var nome = formCadAlu.nome().value;
    if(nome == ''){
        return true;
    }
    var email = formCadAlu.emailAlu().value;
    if (!validaEmail(email)){
        return true;
    }
    const RM = formCadAlu.rm().value;
    if(RM){
        return !ValidaRM(RM);
    }
    return false;
}

function habilitaBtn(){
    formCadAlu.btn().disabled  = apareceBtn();
}