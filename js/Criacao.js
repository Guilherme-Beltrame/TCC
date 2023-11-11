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

function ExibiAluTela(Alunos){
    const AreaAlunos = document.getElementById('Alunos');
    Alunos.forEach(aluno => {
        const ItemAluno = document.createElement('li');
        ItemAluno.classList.add('Aluno');
        const imgAlu = document.createElement('img');
        imgAlu.classList.add('imgAluno');
        imgAlu.src = '../img/Perfil-Aluno.png';

        const NomeAlu = document.createElement('p');
        NomeAlu.innerHTML = aluno.Nome;
        NomeAlu.classList.add('NomeAlu', 'fw-bold');
        NomeAlu.addEventListener('click',()=>{
            PuxaDados(aluno.AluId);
        })

        const CurAlu = document.createElement('p');
        CurAlu.innerHTML = aluno.Curso;
        CurAlu.classList.add('CurAlu', 'fw-bold');

        const RmAlu = document.createElement('p');
        RmAlu.innerHTML = aluno.RM;
        RmAlu.classList.add('RmAlu', 'fw-bold');

        const FreqAlu = document.createElement('p');
        FreqAlu.innerHTML = freqAluno(aluno.Frequencia).value;
        FreqAlu.classList.add('FreqAlu', 'fw-bold');

        const HoraAlu = document.createElement('p');
        HoraAlu.innerHTML = aluno.Entrada;
        HoraAlu.classList.add('HoraAlu', 'fw-bold');

        AreaAlunos.appendChild(ItemAluno);
        ItemAluno.appendChild(imgAlu);
        ItemAluno.appendChild(NomeAlu);
        ItemAluno.appendChild(CurAlu);
        ItemAluno.appendChild(RmAlu);
        ItemAluno.appendChild(FreqAlu);
        ItemAluno.appendChild(HoraAlu);
    });
}

function freqAluno(Freq) {
    var dias = 0;
    if(Freq.Segunda&&Freq.Segunda == 1){
        dias++;
    }
    if(Freq.Terca&&Freq.Terca == 1){
        dias++;
    }
    if(Freq.Quarta&&Freq.Quarta == 1){
        dias++;
    }
    if(Freq.Quinta&&Freq.Quinta == 1){
        dias++;
    }
    if(Freq.Sexta&&Freq.Sexta == 1){
        dias++;
    }
    const total = (dias / 5) * 100;
    return {
        value: total +'%',
    };
}

function ExibiTurTela(Turmas){
    const AreaTurmas = document.getElementById('-Turmas');

    Turmas.forEach(Turma => {
        const divturma = document.createElement('div');
        divturma.classList.add('card');
        divturma.addEventListener('click', ()=> {
            goToRoom(Turma);
        })
        const divNomeTurma = document.createElement('div');
        divNomeTurma.classList.add('card-body', 'd-flex', 'align-items-center', 'justify-content-center');

        const NomeTurma = document.createElement('p');
        NomeTurma.classList.add('fw-bold', 'fs-1', 'text-primary-emphasis');
        NomeTurma.innerHTML = Turma.nome;

        AreaTurmas.appendChild(divturma);
        divturma.appendChild(divNomeTurma);
        divNomeTurma.appendChild(NomeTurma);
    });
}