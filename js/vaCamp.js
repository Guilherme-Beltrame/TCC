
function confereCEP() {
    const inputCEP = document.getElementById('-CEP');
    const labelCEP = document.getElementById('_TxtForCEP');
    var cep = form.cep().value;
    console.log(cep);
    console.log(validaCEP(cep))
    if (validaCEP(cep) && cep.length == 9) {
        inputCEP.classList.remove('erro');
        labelCEP.classList.remove('erro');
        labelCEP.innerHTML = '';
        labelCEP.innerHTML = 'CEP';
    } else {
        labelCEP.innerHTML = '';
        inputCEP.classList.add('erro');
        labelCEP.classList.add('erro');
        labelCEP.innerHTML = 'insira corretamente: xxxxx-xxx';
    }
    habilitaBtn();
}

function confereNum() {
    const inputNum = document.getElementById('-Num');
    const labelNum = document.getElementById('_TxtForN');
    var Num = form.num().value; 
    console.log(Num);
    if (Num >= 0 && Num) {
        inputNum.classList.remove('erro');
        labelNum.classList.remove('erro');
        labelNum.innerHTML = '';
        labelNum.innerHTML = 'Nº';
    } else {
        labelNum.innerHTML = '';
        inputNum.classList.add('erro');
        labelNum.classList.add('erro');
        labelNum.innerHTML = 'insira o numero';
    }
    habilitaBtn();
}

function confereNome() {
    const inputNome = document.getElementById('-Nome');
    const labelNome = document.getElementById('_TxtForNome');
    var Nome = form.nome().value;
    console.log(SemNum(Nome));
    if (Nome.length > 1 && SemNum(Nome) ) {
        inputNome.classList.remove('erro');
        labelNome.classList.remove('erro');
        labelNome.innerHTML = '';
        labelNome.innerHTML = 'Nome';
    } else {
        labelNome.innerHTML = '';
        inputNome.classList.add('erro');
        labelNome.classList.add('erro');
        labelNome.innerHTML = 'insira o Nome';
    }
    habilitaBtn();
}

function ConfereCNPJ() {
    const inputCNPJ = document.getElementById('-CNPJ');
    const labelCNPJ = document.getElementById('_TxtForCNPJ');
    var cnpj = form.cnpj().value;
    console.log(cnpj)
    console.log(validaCNPJ(cnpj));
    if (validaCNPJ(cnpj)&&cnpj.length == 18) {

        inputCNPJ.classList.remove('erro');
        labelCNPJ.classList.remove('erro');
        labelCNPJ.innerHTML = '';
        labelCNPJ.innerHTML = 'CNPJ';
    }
    else {
        labelCNPJ.innerHTML = '';
        inputCNPJ.classList.add('erro');
        labelCNPJ.classList.add('erro');
        labelCNPJ.innerHTML = 'insira corretamente: xx.xxx.xxx/0001-xx';
    }
    habilitaBtn();
}

function ConfereEmail() {
    const inputEmail = document.getElementById('-email');
    const labelEmail = document.getElementById('_TxtForEmail');
    var Email = form.email().value;
    console.log(Email)
    console.log(validaEmail(Email));
    if (validaEmail(Email)) {
        inputEmail.classList.remove('erro');
        labelEmail.classList.remove('erro');
        labelEmail.innerHTML = '';
        labelEmail.innerHTML = 'E-mail';
    }
    else {
        labelEmail.innerHTML = '';
        inputEmail.classList.add('erro');
        labelEmail.classList.add('erro');
        labelEmail.innerHTML = 'insira o Email corretamente: xxxx@xxxxx.xxx';
    }
    habilitaBtn();
}

function ConfereSenha() {
    const inputSenha = document.getElementById('-Senha');
    const labelSenha = document.getElementById('_TxtForSenha');
    var Senha = form.senha().value;
    console.log(Senha)
    console.log(validaSenha(Senha));
    if (validaSenha(Senha)) {
        inputSenha.classList.remove('erro');
        labelSenha.classList.remove('erro');
        labelSenha.innerHTML = '';
        labelSenha.innerHTML = 'Senha';
    }
    else {
        labelSenha.innerHTML = '';
        inputSenha.classList.add('erro');
        labelSenha.classList.add('erro');
        labelSenha.innerHTML = 'insira a Senha corretamente: Uma Maiúscula, uma minúscula, um numero e um caracter especial e com no minnimo 8 caracteres';
    }
    habilitaBtn();
}

function validaSenha(senha) {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.])(?:([0-9a-zA-Z$*&@#.])){8,}$/;
    return re.test(senha);
}

function validaCNPJ(CNPJ) {
    var re = /\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}/;
    return re.test(CNPJ);
}

function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validaCEP(cep) {
    var re = /\d{5}\-\d{3}/;
    return re.test(cep);
}

function SemNum(nome){
    var re =/(?=\D)([a-zA-Z])*([^a-zA-Zà-úÀ-Ú])?/;
    return re.test(nome);
}

function habilitaBtn(){ 
    form.btn().disabled  = apareceBtn();
}

function apareceBtn(){
    var cep = form.cep().value;
    if(!cep || !validaCEP(cep)){
        return true;
    }
    var num = form.num().value;
    if (!num){
        console.log(num);
        return true;
    }
    var cnpj = form.cnpj().value;
    if(!cnpj || !validaCNPJ(cnpj)){
        return true;
    }
    var nome = form.nome().value;
    if (!nome){
        console.log(nome);
        return true;
    }
    var email = form.email().value;
    if (!email||!validaEmail(email)){
        return true
    }
    var senha = form.senha().value;
    if (!senha||!validaSenha(senha)){
        return true;
    }
    var plano = form.plano('-selecionado').value;
    if(!plano){
        return true;
    }   
    return false;
}
