function SairCont(){
    firebase.auth().signOut().then(()=> {
        window.location.href="login.html";
    }).catch(() => {
        alert("Erro ao sair da conta");
    })
}

function goToRoom(){
    window.location.href ="1-A.html";
}

function pagProfs(){
    window.location.href ="Profs.html";
}
