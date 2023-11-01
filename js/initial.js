firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "Tela-Principal.html"
    }

})

function PageLogin() {
    window.location.href = "Login.html";
}
function PageCad() {
    window.location.href = "Cad.html";
}