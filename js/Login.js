firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "Tela-Principal.html"
    }
});

function Entrar() {
    const Email =form.email().value;
    const Password = form.senha().value;
    firebase.auth().signInWithEmailAndPassword(Email, Password).then(response => {
        window.location.href = "Tela-Principal.html"
    }).catch(error => {

    });
}

function RecuSenha() {
    const Email = form.email().value;
    firebase.auth().sendPasswordResetEmail(Email).then(() => {
        alert("foi");
    }).catch(error => {
        alert("algo deu errado" + error);
    })
}

const form = {
    email: () => document.getElementById('-email'),
    senha: () => document.getElementById('-Senha'),
}