function valida() {
    let Email = document.getElementById("-email").value;
    let Semha = document.getElementById("-Senha").value;
    let btn = document.getElementById("_Btn");
    
    if (Email == "" || Semha == ""){
        let NVai = document.getElementById("NVai");
        NVai.removeAttribute('id');
        NVai.id ='Esse';
        btn.click();
    }
    else if (Email != "" && Semha != "") {
        let Vai = document.getElementById("Vai");
        Vai.removeAttribute('id');
        Vai.id = 'Esse';
        btn.click();
    }
}