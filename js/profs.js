function cadProfs(){
    window.location.href = "CadProfs.html";
}


function PuxaDados() {
    setTimeout(() => {
        AdiDadosTela(fakeProfs);
    }, 1000);
}
function AdiDadosTela(Profs) {
    CriaDivsIniciais();
    const docAluno = document.getElementById("DocAlu");

    Profs.forEach(Prof => {
        console.log(Prof.nome);
        const docAluno = document.getElementById("DocAlu");
        //cabecalho
        const divImgNomeSai = document.createElement('div');
        divImgNomeSai.classList.add('headerAlu');
        docAluno.appendChild(divImgNomeSai);
        //imagem do lado esquerdo
        const imgAlu = document.createElement('img');
        imgAlu.src = Prof.img;
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
        RMAlu.innerHTML = Prof.RMProf;
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
        PerAula.innerHTML = Prof.PerAula;
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
        freq.innerHTML = freqAluno(Prof.freq) + '%';
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
        HEntra.innerHTML = Prof.HEntra;
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
        HSaida.innerHTML = Prof.HSaida;
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
        Tel.innerHTML = Prof.Tel;
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
    });

}
function saiDadProf() {
    const divFund = document.getElementById("fundopreto");
    divFund.remove();
    const divDados = document.getElementById("DocAlu");
    divDados.remove();
}

function freqAluno(freq) {
    const total = ((freq.segunda + freq.terca + freq.quarta + freq.quinta + freq.sexta) / 5) * 100;
    return total;
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

const fakeProfs = [{
    img: 'img/Perfil-Aluno.png',
    nome: 'Ales Raposo Ribeiro',
    materia: 'Materia: ',
    RMProf: '20212930058',
    PerAula: '7:30 ás 14:40',
    freq: {
        segunda: 1,
        terca: 1,
        quarta: 0,
        quinta: 0,
        sexta: 1,
    },
    HEntra: '07:30 AM',
    HSaida: '15:30 PM',
    Tel: '(11) 95485-4289',
},]