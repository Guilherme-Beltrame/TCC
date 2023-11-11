
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        setTimeout(() => {
            window.location.href = 'Tela-Principal.html';
        }, 7000);
    }

})

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
}