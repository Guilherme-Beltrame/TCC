function SairCont(){
    firebase.auth().signOut().then(()=> {
        window.location.href="login.html";
    }).catch(() => {
        alert("Erro ao sair da conta");
    })
}