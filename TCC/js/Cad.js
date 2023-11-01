console.log("Entrou Cad");
function valida() {
    let CEP = document.getElementById("-CEP").value;
    let N = document.getElementById("-Num").value;
    let CNPJ = document.getElementById("-CNPJ").value;
    let Email = document.getElementById("-email").value;
    let Semha = document.getElementById("-Senha").value;
    let btn = document.getElementById("_Btn");
    
    if (CEP == "" || N == "" || CNPJ == "" || Email == "" || Semha == ""){
        let NVai = document.getElementById("NVai");
        NVai.removeAttribute('id');
        NVai.id ='Esse';
        btn.click();
    }
    else if (CEP != "" && N != "" && CNPJ != "" && Email != "" && Semha != "") {
        let Vai = document.getElementById("Vai");
        Vai.removeAttribute('id');
        Vai.id = 'Esse';
        btn.click();
    }
}

function Cadastrar(){
    const Email = document.getElementById("-email").value;
    const Semha = document.getElementById("-Senha").value;
    firebase.auth().createUserWithEmailAndPassword(Email, Semha).then(()=>{
        window.location.href = "Tela-Principal.html";
    }).catch(error => {
        alert("não foi", error);
    })
}