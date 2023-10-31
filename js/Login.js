console.log("Entrou Login");
function valida() {



    if (Email == "" || Semha == "") {
        let NVai = document.getElementById("NVai");
        NVai.removeAttribute('id');
        NVai.id = 'Esse';
        btn.click();
    }
    else if (Email != "" && Semha != "") {
        let Vai = document.getElementById("Vai");
        Vai.removeAttribute('id');
        Vai.id = 'Esse';
        btn.click();
    }
}

const NVai = document.getElementById("NVai");
const Vai = document.getElementById("Vai");
function Entrar() {
    var Email = document.getElementById("-email").value;
    var Password = document.getElementById("-senha").value;
    let btn = document.getElementById("_Btn");

    firebase.auth().signInWithEmailAndPassword(Email, Password).then(response => {
        //console.log(Email, Password);
        let V = Vai.id;
        if (V === "Vai") {
            Vai.removeAttribute('id');
            Vai.id = 'Esse';
            btn.click();
        }
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