const NVai = document.getElementById("NVai");
const Vai = document.getElementById("Vai");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "Tela-Principal.html"
    }

})


function Entrar() {
    const Email = document.getElementById("-email").value;
    const Password = document.getElementById("-senha").value;
    let btn = document.getElementById("_Btn");

    firebase.auth().signInWithEmailAndPassword(Email, Password).then(response => {
        console.log('sucess', response)
    }).catch(error => {

        let V = NVai.id;
        if (V === "NVai") {
            NVai.removeAttribute('id');
            NVai.id = 'Esse';
            btn.click();
        }
        console.log('error', error)
    });
}

function RecuSenha() {
    const Email = document.getElementById("-email").value;
    const Password = document.getElementById("-senha").value;
    firebase.auth().sendPasswordResetEmail(Email).then(() => {
        alert("foi");
    }).catch(error => {
        alert("algo deu errado" + error);
    })
}