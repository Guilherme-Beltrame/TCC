firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "HTML/HomeInst.html"
    }

})

function PageLogin() {
    window.location.href = "HTML/Login.html";
}
function PageCad() {
    window.location.href = "HTML/Cad.html";
}