function cadProfs() {
    window.location.href = "CadProfs.html";
}

firebase.auth().onAuthStateChanged(user => {
    if (user.uid == pegaIds().uidInst) {
        ExibiProfsInsti(pegaIds().uidInst);
    } else {
        alert('Você não tem permissão em acessar esses dados');
        window.location.href = "HomeInst.html";
    }
})

function ExibiProfsInsti(IdInst) {
    db.collection('professores')
        .where('id-inst', '==', IdInst)
        .get()
        .then(snapshot => {
            const Professores = snapshot.docs.map(Professor => ({
                ...Professor.data(),
                idProf: Professor.id
            }));
            ExibiProfsTela(Professores);
        })
}

function pegaIds() {
    const parametrosUsuario = new URLSearchParams(window.location.search);
    return {
        uidInst: parametrosUsuario.get('inst'),
    }
}

function PuxaDados(profID) {
    db.collection('professores')
        .doc(profID)
        .get()
        .then(dadosprof => {
            if (dadosprof.exists) {
                console.log(dadosprof.data());
                AdiDadosTela(dadosprof.data());
            } else {
                alert("Erro ao carregar dados");
            }
        })
        .catch(() => {
            alert("Erro ao carregaaaaaaaaar dados");
        })
}

function AdiDadosTela(Prof) {
    CriaDivsIniciais();
    console.log(Prof.nome);
    const docAluno = document.getElementById("DocAlu");
    //cabecalho
    const divImgNomeSai = document.createElement('div');
    divImgNomeSai.classList.add('headerAlu');
    docAluno.appendChild(divImgNomeSai);
    //imagem do lado esquerdo
    const imgAlu = document.createElement('img');
    imgAlu.src = '../img/Perfil-Aluno.png';
    imgAlu.alt = "Foto Aluno";
    imgAlu.classList.add('imgAluno');
    divImgNomeSai.appendChild(imgAlu);
    //nome ao centro
    const NomeAlu = document.createElement('p');
    NomeAlu.innerHTML = Prof.nome;
    NomeAlu.classList.add("fw-bold", "fs-4", "text-uppercase", "mb-0");
    divImgNomeSai.appendChild(NomeAlu);
    //botão dee sair ao canto supeerior direito
    const btnSair = document.createElement("button");
    btnSair.type = 'button';
    btnSair.onclick = function () {
        saiDadProf();
    }
    btnSair.classList.add("btn-close", "mb-5", "ms-2");
    divImgNomeSai.appendChild(btnSair);

    //dados
    const olDados = document.createElement('ol');
    olDados.classList.add('docDadoAlu');
    docAluno.appendChild(olDados);
    //Dado 2
    const item2 = document.createElement('li');
    item2.classList.add('dado');
    olDados.appendChild(item2);
    const Curso = document.createElement("p");
    Curso.innerHTML = 'Hoje: ';
    Curso.classList.add('fw-bold');
    item2.appendChild(Curso);
    const curso = document.createElement("p");
    curso.innerHTML = Prof.materia;
    item2.appendChild(curso);
    //Dado 3
    const item3 = document.createElement('li');
    item3.classList.add('dado');
    olDados.appendChild(item3);
    const RM = document.createElement("p");
    RM.innerHTML = 'RM: ';
    RM.classList.add('fw-bold');
    item3.appendChild(RM);
    const RMAlu = document.createElement("p");
    RMAlu.innerHTML = Prof.rm;
    item3.appendChild(RMAlu);
    //Dado 4
    const item4 = document.createElement('li');
    item4.classList.add('dado');
    olDados.appendChild(item4);
    const peri = document.createElement("p");
    peri.innerHTML = 'Período de aula: ';
    peri.classList.add('fw-bold');
    item4.appendChild(peri);
    const PerAula = document.createElement("p");
    PerAula.innerHTML = Prof.entrada + 'ás '+ Prof.saida;
    item4.appendChild(PerAula);
    //Dado 5
    const item5 = document.createElement('li');
    item5.classList.add('dado');
    olDados.appendChild(item5);
    const fre = document.createElement("p");
    fre.innerHTML = 'Frequência: ';
    fre.classList.add('fw-bold');
    item5.appendChild(fre);
    const freq = document.createElement("p");
    freq.innerHTML = frequencia(Prof.frequencia).value;
    item5.appendChild(freq);
    //Dado 6
    const item6 = document.createElement('li');
    item6.classList.add('dado');
    olDados.appendChild(item6);
    const horaEntra = document.createElement("p");
    horaEntra.innerHTML = 'Horário de entrada: ';
    horaEntra.classList.add('fw-bold');
    item6.appendChild(horaEntra);
    const HEntra = document.createElement("p");
    HEntra.innerHTML = Prof.entrada;
    item6.appendChild(HEntra);
    //Dado 7
    const item7 = document.createElement('li');
    item7.classList.add('dado');
    olDados.appendChild(item7);
    const horaSai = document.createElement("p");
    horaSai.innerHTML = 'Horário de saída: ';
    horaSai.classList.add('fw-bold');
    item7.appendChild(horaSai);
    const HSaida = document.createElement("p");
    HSaida.innerHTML = Prof.saida;
    item7.appendChild(HSaida);
    //Dado 8
    const item8 = document.createElement('li');
    item8.classList.add('dado');
    olDados.appendChild(item8);
    const tel = document.createElement("p");
    tel.innerHTML = 'Telefone: ';
    tel.classList.add('fw-bold');
    item8.appendChild(tel);
    const Tel = document.createElement("p");
    Tel.innerHTML = Prof.telefone;
    item8.appendChild(Tel);

    //area do Btn sair mais cedo
    const divbtn = document.createElement('div');
    divbtn.classList.add("saidaAlu", "d-flex", "align-items-end", "justify-content-end", "mb-3");
    docAluno.appendChild(divbtn);
    //Btn sair mais cedo
    const SairCedo = document.createElement("button");
    SairCedo.type = 'button';
    SairCedo.innerHTML = "Ausente";
    SairCedo.classList.add("btn", "btn-success", "fw-bold");
    divbtn.appendChild(SairCedo);
}
function saiDadProf() {
    const divFund = document.getElementById("fundopreto");
    divFund.remove();
    const divDados = document.getElementById("DocAlu");
    divDados.remove();
}

function CriaDivsIniciais() {
    const main = document.getElementById("main");
    const div = document.createElement('div');
    div.classList.add('fundPreto');
    div.id = "fundopreto";
    main.appendChild(div);
    const div2 = document.createElement('div');
    div2.classList.add('DocAlu');
    div2.id = 'DocAlu';
    main.appendChild(div2);
}