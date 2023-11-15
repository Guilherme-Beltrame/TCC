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
    var RM = formCadAlu.rm().value;
    if(!RM || RM.length != 10 && RM.length != 11){
        return true;
    }
    return false;
}

function habilitaBtn(){
    formCadAlu.btn().disabled  = apareceBtn();
}