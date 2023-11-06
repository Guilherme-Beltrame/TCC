firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "HTML/Tela-Principal.html"
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

function valida() {
    const dados = commitDados();
    criaFundos();
    criaElementos();
    const consequencia = document.getElementById('consequencia');
    const btnConseq = document.getElementById('btnConseq');
    const resulValida = document.getElementById('resulValida');
    if (dados.cep.length <= 7) {
        consequencia.innerHTML = 'Erro';
        resulValida.innerHTML = 'campo de CEP não foi preenchido corretamente';
        btnConseq.innerHTML = 'Tentar Novamente';
    } else if (dados.cnpj.length  <= 13) {
        console.log(dados.cnpj);
        consequencia.innerHTML = 'Erro';
        resulValida.innerHTML = 'campo de CNPJ não foi preenchido corretamente';
        btnConseq.innerHTML = 'Tentar Novamente';
    }else if (validateEmail(dados.email)) {
        consequencia.innerHTML = 'Erro';
        resulValida.innerHTML = 'campo de E-mail não foi preenchido corretamente';
        btnConseq.innerHTML = 'Tentar Novamente';
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function salvardados() {
    const dadosCadInst = commitDados();
    db.collection('instituicoes').add(dadosCadInst)
        .then(() => {
            console.log('foi')
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
        //plano: form.plano().value,
        //uid: firebase.auth().currentUser.uid
    }
}

function Cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(form.email().value, form.senha().value).then(() => {
        salvardados();
    }).catch(error => {
        alert("não foi", error);
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