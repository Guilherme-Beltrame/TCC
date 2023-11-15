
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        setTimeout(() => {
            window.location.href = 'Home.html';
        }, 7000);
    }

})

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
    if (!nome || !SemNum(nome)){
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
    var termos = form.plano('-aceitaTermos').value;
    if(termos == ''){
        return true;
    }   
    return false;
}

function FimCadastro() {
    criaFundos();
    criaElementos();
    msgSucesso();
}

function salvardados() {
    const dadosCadInst = commitDados();
    db.collection('instituicoes').add(dadosCadInst)
        .then(() => {
            FimCadastro();
        }).catch(error => {
            alert(error, 'não foi possivel cadastrar os dados no banco de dados')
        });
}

function commitDados() {
    return {
        cep: form.cep().value,
        numero: form.num().value,
        cnpj: form.cnpj().value,
        nome: form.nome().value,
        email: form.email().value,
        senha: form.senha().value,
        plano: form.plano('-selecionado').value,
        uid: firebase.auth().currentUser.uid,
        type: 'instituicao',
    }
}

function Cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(form.email().value, form.senha().value).then(() => {
        salvardados();
    }).catch(error => {
        alert("não foi", error,'tente Novamente');
    })
}

function selectPlano() {
    const planos = document.getElementsByName('planos');
    const CustomDiv = document.getElementById('CustomDiv');
    const PremiumDiv = document.getElementById('PremiumDiv');
    const BusinessDiv = document.getElementById('BusinessDiv');
    const LiteDiv = document.getElementById('LiteDiv');
    var selecionou;
    planos.forEach(plano => {
        if (plano.checked) {
            selecionou = 1;
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

    if(selecionou == 1 ){
        const foi = form.plano('-selecionado').value;
        console.log (foi);
    }

    habilitaBtn();
}

const form = {
    nome : () => document.getElementById('-Nome'),
    btn: () => document.getElementById('-Btn'),
    cep: () => document.getElementById('-CEP'),
    num: () => document.getElementById('-Num'),
    cnpj: () => document.getElementById('-CNPJ'),
    email: () => document.getElementById('-email'),
    senha: () => document.getElementById('-Senha'),
    plano: (selecionado) => document.getElementById(selecionado),
    aceitaTermos: () => document.getElementById('-aceitaTermos'),
}