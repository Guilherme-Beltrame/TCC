function cadProfs() {
    window.location.href = "CadProfs.html";
}

firebase.auth().onAuthStateChanged(user => {
    if (user.uid == pegaIds().uidInst) {
        ExibiProfsInsti(pegaIds().uidInst);
        saiTelaCarregando();
    } else {
        saiTelaCarregando();
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
            console.log(Professores);   
            ExibiProfsTela(Professores);
        })
}

function pegaIds() {
    const parametrosUsuario = new URLSearchParams(window.location.search);
    return {
        uidInst: parametrosUsuario.get('inst'),
    }
}

function PuxaDadosProf(profID) {
    entratelaCarregando();
    db.collection('professores')
        .doc(profID)
        .get()
        .then(dadosprof => {
            if (dadosprof.exists) {
                console.log(dadosprof.data());
                AdiDadosTelaProfinfo(dadosprof.data(), profID);
            } else {
                saiTelaCarregando();
                alert("Erro ao carregar dados");
            }
            saiTelaCarregando();
        })
        .catch(erro => {
            saiTelaCarregando();
            confirm(erro)
            alert("Erro ao carregaaaaaaaaar dados");
        })
}

function AdiDadosTelaProfinfo(Prof, profID) {
    CriaDivsIniciais();
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
    Curso.innerHTML = 'Materia: ';
    Curso.classList.add('tituDadAlu');
    item2.appendChild(Curso);
    const curso = document.createElement("p");
    curso.classList.add('fw-bold', 'dadAlu');
    curso.innerHTML = Prof.materia;
    item2.appendChild(curso);
    
    //Dado 2
    const item1 = document.createElement('li');
    item1.classList.add('dado');
    olDados.appendChild(item1);
    const estadotxt = document.createElement("p");
    estadotxt.innerHTML = 'Hoje: ';
    estadotxt.classList.add('tituDadAlu');
    item1.appendChild(estadotxt);
    const estado = document.createElement("p");
    estado.innerHTML = StatusAluProf(Prof);
    item1.appendChild(estado);
    //Dado 3
    const item3 = document.createElement('li');
    item3.classList.add('dado');
    olDados.appendChild(item3);
    const RM = document.createElement("p");
    RM.innerHTML = 'RM: ';
    RM.classList.add('tituDadAlu');
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
    peri.classList.add('tituDadAlu');
    item4.appendChild(peri);
    const PerAula = document.createElement("p");
    PerAula.innerHTML = PegaPeriodo(Prof.cronograma);
    item4.appendChild(PerAula);
    //Dado 5
    const item5 = document.createElement('li');
    item5.classList.add('dado');
    olDados.appendChild(item5);
    const fre = document.createElement("p");
    fre.innerHTML = 'Frequência: ';
    fre.classList.add('tituDadAlu');
    item5.appendChild(fre);
    const freq = document.createElement("p");
    freq.innerHTML = frequencia(Prof.cronograma);
    item5.appendChild(freq);
    //Dado 6
    const item6 = document.createElement('li');
    item6.classList.add('dado');
    olDados.appendChild(item6);
    const horaEntra = document.createElement("p");
    horaEntra.innerHTML = 'Horário de entrada: ';
    horaEntra.classList.add('tituDadAlu');
    item6.appendChild(horaEntra);
    const HEntra = document.createElement("p");
    HEntra.innerHTML = horaEntrada(Prof);
    item6.appendChild(HEntra);
    //Dado 7
    const item7 = document.createElement('li');
    item7.classList.add('dado');
    olDados.appendChild(item7);
    const horaSai = document.createElement("p");
    horaSai.innerHTML = 'Horário de saída: ';
    horaSai.classList.add('tituDadAlu');
    item7.appendChild(horaSai);
    const HSaida = document.createElement("p");
    HSaida.innerHTML = horaSaida(Prof);
    item7.appendChild(HSaida);
    //Dado 8
    const item8 = document.createElement('li');
    item8.classList.add('dado');
    olDados.appendChild(item8);
    const tel = document.createElement("p");
    tel.innerHTML = 'Telefone: ';
    tel.classList.add('tituDadAlu');
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
    SairCedo.onclick = function () {
        LiberaProf(Prof, profID);
    }
    SairCedo.classList.add("btn", "btn-success", "fw-bold");
    SairCedo.innerHTML = "Ausente";
    veriBtnSairProf(SairCedo, Prof, divbtn);
    divbtn.appendChild(SairCedo);
}

function veriBtnSairProf(btn, prof, divbtn) {
    if(prof.entrada!=''){
        if(prof.saida!=''){
            excloubtn(divbtn);
        }else{
            aparecebtn(btn);
        }
    }else{
        excloubtn(divbtn);
    }
}

function estiBtnAusent(btn) {
    btn.disabled = true;
    btn.classList.add('btn', 'btn-danger', 'fw-bold');
}

function excloubtn(divbtn) {
    divbtn.remove();
}

function aparecebtn(btn) {
    btn.classList.add('btn', 'btn-success', 'fw-bold');
}

function LiberaProf(prof, profID){
    prof.saida = (new Date().getHours())+':'+(new Date().getMinutes());
    const dados = (prof);
    db.collection('professores')
        .doc(profID)
        .update(dados)
        .then(()=>{
            window.location.reload();
        })
        .catch(erro=>{
            console.log(erro)
        })
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