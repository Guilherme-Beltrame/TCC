firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        window.location.href = "../index.html";
    }
})

function SairCont() {
    firebase.auth().signOut().then(() => {
        window.location.href = 'Login.html';
    }).catch(() => {
        alert("Erro ao sair da conta");
    })
}