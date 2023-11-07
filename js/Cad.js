
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        setTimeout(() => {
            window.location.href = 'Tela-Principal.html';
        }, 7000);
    }

})


function criaFundos() {
    const body = document.getElementById('_fundLC');
    const fundPreto = document.createElement('div');
    fundPreto.classList.add('fundPreto');
    fundPreto.id = "fundopreto";

    const validacao = document.createElement('div');
    validacao.classList.add('DocCad');
    validacao.id = 'DocCad';

    body.appendChild(fundPreto);
    body.appendChild(validacao);
}

function FimCadastro() {
    criaFundos();
    criaElementos();
    msgSucesso();
}

function msgSucesso() {
    const consequencia = document.getElementById('consequencia');
    const btnConseq = document.getElementById('btnConseq');
    const resulValida = document.getElementById('resulValida');
    consequencia.innerHTML = 'Parabéns!';
    resulValida.innerHTML = 'Seu cadastro foi concluído com sucesso!';
    btnConseq.innerHTML = 'Entrar';
    btnConseq.onclick = function () {
        window.location.href = 'Tela-Principal.html';
    }
}

function criaElementos() {
    const validacao = document.getElementById('DocCad');

    const headerCard = document.createElement('div');
    headerCard.classList.add('headerCad');
    headerCard.id = 'headerCad';
    validacao.appendChild(headerCard);

    const consequencia = document.createElement('p');
    consequencia.classList.add('fs-2', 'fw-bold');
    consequencia.id = 'consequencia';
    headerCard.appendChild(consequencia);

    const resul = document.createElement('p');
    resul.classList.add('fs-2', 'mx-4', 'fw-semibold', 'my-5', 'text-center');
    resul.id = 'resulValida';
    validacao.appendChild(resul);

    const divBtn = document.createElement('div');
    divBtn.classList.add('entraCad', 'mb-5', 'd-flex', 'align-items-center', 'justify-content-center');
    divBtn.id = 'divBtn';
    validacao.appendChild(divBtn);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList.add('btn', 'btn-success', 'fw-bold');
    btn.id = 'btnConseq';
    divBtn.appendChild(btn);
}

function confereCEP() {
    const inputCEP = document.getElementById('-CEP');
    const labelCEP = document.getElementById('_TxtForCEP');
    var cep = form.cep().value;
    console.log(cep);
    console.log(validaCEP(cep))
    if (validaCEP(cep)) {
        inputCEP.classList.remove('erro');
        labelCEP.classList.remove('erro');
        labelCEP.innerHTML = '';
        labelCEP.innerHTML = 'CEP';
    } else {
        labelCEP.innerHTML = '';
        inputCEP.classList.add('erro');
        labelCEP.classList.add('erro');
        labelCEP.innerHTML = 'insira o cep corretamente: xxxxx-xxx';
    }
}

function ConfereCNPJ() {
    const inputCNPJ = document.getElementById('-CNPJ');
    const labelCNPJ = document.getElementById('_TxtForCNPJ');
    var cnpj = form.cnpj().value;
    console.log(cnpj)
    console.log(validaCNPJ(cnpj));
    if (validaCNPJ(cnpj)) {

        inputCNPJ.classList.remove('erro');
        labelCNPJ.classList.remove('erro');
        labelCNPJ.innerHTML = '';
        labelCNPJ.innerHTML = 'CNPJ';
    }
    else {
        labelCNPJ.innerHTML = '';
        inputCNPJ.classList.add('erro');
        labelCNPJ.classList.add('erro');
        labelCNPJ.innerHTML = 'insira o CNPJ corretamente: xx.xxx.xxx/0001-xx';
    }
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
        labelSenha.innerHTML = 'ESenha';
    }
    else {
        labelSenha.innerHTML = '';
        inputSenha.classList.add('erro');
        labelSenha.classList.add('erro');
        labelSenha.innerHTML = 'insira o Senha corretamente: Uma Maiúscula, uma minúscula, um numero e um caracter especial ';
    }
}

function validaSenha(senha) {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.])(?:([0-9a-zA-Z$*&@#.])){8,}$/;
    return re.test(senha);
}

function validaCNPJ(CNPJ) {
    var re = /\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}/;
    return re.test(CNPJ);
}

function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validaCEP(cep) {
    var re = /\d{5}\-?\d{3}/;
    return re.test(cep);
}

function salvardados() {
    const dadosCadInst = commitDados();
    db.collection('instituicoes').add(dadosCadInst)
        .then(() => {
            FimCadastro();
        }).catch(error => {

            console.log(error);
        });
}

function commitDados() {
    return {
        cep: form.cep().value,
        numero: form.num().value,
        cnpj: form.cnpj().value,
        nome: 'Teste User',
        email: form.email().value,
        senha: form.senha().value,
        plano: form.plano().value,
        uid: firebase.auth().currentUser.uid
    }
}

function Cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(form.email().value, form.senha().value).then(() => {
        salvardados();
    }).catch(error => {
        alert("não foi", error);
        console.log(error)
    })
}

function selectPlano() {
    const planos = document.getElementsByName('planos');
    const CustomDiv = document.getElementById('CustomDiv');
    const PremiumDiv = document.getElementById('PremiumDiv');
    const BusinessDiv = document.getElementById('BusinessDiv');
    const LiteDiv = document.getElementById('LiteDiv');
    planos.forEach(plano => {
        if (plano.checked) {
            let qual = plano.value;
            if (qual == 'Lite') {
                const Lite = document.createElement('p');
                Lite.classList.add('fs-5', 'text-light');
                Lite.id = 'descLite';
                Lite.innerHTML = 'Leitor QR, instalação e 100 crachás';
                LiteDiv.appendChild(Lite);
            } else if (qual == 'Business') {
                const Business = document.createElement('p');
                Business.classList.add('fs-5', 'text-light');
                Business.id = 'descBusiness';
                Business.innerHTML = 'Leitor QR, instalação e 100 crachás platium e manutenção anual básica';
                BusinessDiv.appendChild(Business);
            } else if (qual == 'Premium') {
                const Premium = document.createElement('p');
                Premium.classList.add('fs-5', 'text-light');
                Premium.id = 'descPremium';
                Premium.innerHTML = 'Leitor QR, instalação e 100 crachás gold e manutenção anual gate';
                PremiumDiv.appendChild(Premium);
            } else if (qual == 'Custom') {
                const Custom = document.createElement('p');
                Custom.classList.add('fs-5', 'text-light');
                Custom.id = 'descCustom';
                Custom.innerHTML = 'Escolha de tipo de crachá (bronze, platium ou gold), quantidade de crachás e quantidade de manutenções desejadas (o leitor de QR code e a instalação já estão inclusas).';
                CustomDiv.appendChild(Custom);
            }
            plano.removeAttribute('id');
            plano.id = '-selecionado';
        }
        else {
            if (document.getElementById('desc' + plano.value)) {
                const desc = document.getElementById('desc' + plano.value);
                desc.remove();
            }
            plano.id = plano.value;
        }
    });
}

const form = {
    cep: () => document.getElementById('-CEP'),
    num: () => document.getElementById('-Num'),
    cnpj: () => document.getElementById('-CNPJ'),
    email: () => document.getElementById('-email'),
    senha: () => document.getElementById('-Senha'),
    plano: () => document.getElementById('-selecionado'),
}