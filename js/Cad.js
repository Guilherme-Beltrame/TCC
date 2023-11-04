firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "Tela-Principal.html"
    }

})

function valida() {
    let CEP = document.getElementById("-CEP").value;
    let N = document.getElementById("-Num").value;
    let CNPJ = document.getElementById("-CNPJ").value;
    let Email = document.getElementById("-email").value;
    let Semha = document.getElementById("-Senha").value;
    let btn = document.getElementById("_Btn");

    if (CEP == "" || N == "" || CNPJ == "" || Email == "" || Semha == "") {
        let NVai = document.getElementById("NVai");
        NVai.removeAttribute('id');
        NVai.id = 'Esse';
        btn.click();
    }
    else if (CEP != "" && N != "" && CNPJ != "" && Email != "" && Semha != "") {
        let Vai = document.getElementById("Vai");
        Vai.removeAttribute('id');
        Vai.id = 'Esse';
        btn.click();
    }
}

function salvardados() {
    const dadosCadInst = commitDados();
        db.collection('instituicoes').add(dadosCadInst)
            .then(() => {
                valida();
            }).catch(error => {
                valida();
                console.log(error);
            });
}

function commitDados() {
    return {
        cep: form.cep().value,
        numero: form.num().value,
        cnpj: form.cnpj().value,
        email: form.email().value,
        senha: form.senha().value,
        plano: form.plano().value
    }
}

function Cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(form.email().value, form.senha().value).then(() => {
        window.location.href = "Tela-Principal.html";
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