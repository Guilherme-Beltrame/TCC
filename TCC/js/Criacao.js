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
    resul.classList.add('fs-2', 'mx-4', 'fw-semibold', 'mb-5', 'text-center');
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

function criaFundos(fundo) {
    const body = document.getElementById(fundo);
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
        window.location.href = 'HomeInst.html';
    }
}

function ExibiProfsTela(Professores) {
    const AreaProfs = document.getElementById('Profs');

    Professores.forEach(professor => {
        const ItemProf = document.createElement('li');
        ItemProf.classList.add('Aluno');
        const imgProf = document.createElement('img');
        imgProf.classList.add('imgAluno');
        imgProf.src = '../img/Perfil-Aluno.png';

        const NomeProf = document.createElement('p');
        NomeProf.innerHTML = professor.nome;
        NomeProf.classList.add('NomeAlu', 'fw-bold');
        NomeProf.addEventListener('click', () => {
            PuxaDados(professor.idProf);
        })

        const CurProf = document.createElement('p');
        CurProf.innerHTML = professor.materia;
        CurProf.classList.add('CurAlu', 'fw-bold');

        const RmProf = document.createElement('p');
        RmProf.innerHTML = professor.rm;
        RmProf.classList.add('RmAlu', 'fw-bold');

        const FreqProf = document.createElement('p');
        FreqProf.innerHTML = frequencia(professor.Cronograma);
        FreqProf.classList.add('FreqAlu', 'fw-bold');

        const HoraProf = document.createElement('p');
        HoraProf.innerHTML = professor.entrada;
        HoraProf.classList.add('HoraAlu', 'fw-bold');

        AreaProfs.appendChild(ItemProf);
        ItemProf.appendChild(imgProf);
        ItemProf.appendChild(NomeProf);
        ItemProf.appendChild(CurProf);
        ItemProf.appendChild(RmProf);
        ItemProf.appendChild(FreqProf);
        ItemProf.appendChild(HoraProf);
    });
}

function ExibiAluTelaProf(Alunos) {
    const AreaAlunos = document.getElementById('Alunos');
    Alunos.forEach(aluno => {
        const ItemAluno = document.createElement('li');
        ItemAluno.classList.add('Aluno');
        const imgAlu = document.createElement('img');
        imgAlu.classList.add('imgAluno');
        imgAlu.src = '../img/Perfil-Aluno.png';

        const NomeAlu = document.createElement('p');
        NomeAlu.innerHTML = aluno.nome;
        NomeAlu.classList.add('NomeAlu', 'fw-bold');
        NomeAlu.addEventListener('click', () => {
            PuxaDadosprof(aluno.AluId);
        })
        const RmAlu = document.createElement('p');
        RmAlu.innerHTML = aluno.RM;
        RmAlu.classList.add('RmAlu', 'fw-bold');

        const FreqAlu = document.createElement('p');
        FreqAlu.innerHTML = frequencia(aluno.cronograma);
        FreqAlu.classList.add('FreqAlu', 'fw-bold');

        const Estado = document.createElement('p');
        Estado.innerHTML = StatusAluProf(aluno);
        Styleresul(Estado)
        Estado.classList.add('HoraAlu', 'fw-bold');

        AreaAlunos.appendChild(ItemAluno);
        ItemAluno.appendChild(imgAlu);
        ItemAluno.appendChild(NomeAlu);
        ItemAluno.appendChild(RmAlu);
        ItemAluno.appendChild(FreqAlu);
        ItemAluno.appendChild(Estado);
    });
}

function ExibiAluTela(Alunos) {
    const AreaAlunos = document.getElementById('Alunos');
    Alunos.forEach(aluno => {
        const ItemAluno = document.createElement('li');
        ItemAluno.classList.add('Aluno');
        const imgAlu = document.createElement('img');
        imgAlu.classList.add('imgAluno');
        imgAlu.src = aluno.image;

        const NomeAlu = document.createElement('p');
        NomeAlu.innerHTML = aluno.nome;
        NomeAlu.classList.add('NomeAlu', 'fw-bold');
        NomeAlu.addEventListener('click', () => {
            PuxaDados(aluno.AluId);
        })


        const RmAlu = document.createElement('p');
        RmAlu.innerHTML = aluno.RM;
        RmAlu.classList.add('RmAlu', 'fw-bold');

        const FreqAlu = document.createElement('p');
        FreqAlu.innerHTML = frequencia(aluno.cronograma);
        FreqAlu.classList.add('FreqAlu', 'fw-bold');

        const HoraAlu = document.createElement('p');
        HoraAlu.id = aluno.AluId;
        HoraAlu.innerHTML = HorarioAlu(aluno);
        corAusente(HoraAlu)

        AreaAlunos.appendChild(ItemAluno);
        ItemAluno.appendChild(imgAlu);
        ItemAluno.appendChild(NomeAlu);
        ItemAluno.appendChild(RmAlu);
        ItemAluno.appendChild(FreqAlu);
        ItemAluno.appendChild(HoraAlu);
    });
}

function corAusente(HoraAlu){
    if(HoraAlu.innerHTML=="Ausente"){
        HoraAlu.classList.add('HoraAlu', 'ausente', 'fw-bold');
    }else{
        HoraAlu.classList.add('HoraAlu', 'fw-bold');
    }
}

function Styleresul(estado){
    if(estado.innerHTML == "Ausente"){
        estado.classList.add('ausente')
    }else{
        estado.classList.add('presente')
    }
}

function PegaPeriodo(cronograma) {
    var diaAtual = 1; // new Date().getDay();
    var peri;

    const diasAulas = [...Object.values(cronograma)]
    diasAulas.forEach(dia => {
        if(dia.diaSena == diaAtual){
            peri = dia.periodo;
        }
    });
    return peri
}

function StatusAlu(idAlu) {
    const divhorario = document.getElementById(idAlu).innerHTML;
    if(divhorario=="Ausente"){
        return'Ausente';
    } else{
        return 'Presente';
    }
}

function StatusAluProf(alu) { 
    if(alu.entrada!=''){
        if(alu.saida!=''){
            return "Ausente"
        }else{
            return"Presente"
        }
    }else{
        return "Ausente"
    }
}

function horaEntrada(aluno) {
    if(aluno.entrada != ''){
        return aluno.entrada
    }else {
        return 'Não compareceu'
    }
}

function horaSaida(aluno) {
    if(aluno.entrada != ''){
        if(aluno.saida != ''){
            return aluno.saida
        }else {
            return "Em aula"
        }
    }else {
        return 'Não compareceu'
    }
}

function HorarioAlu(aluno) {
    if(aluno.entrada != ''){
        if(aluno.saida!=''){
            return 'Ausente';
        }else{
            return aluno.entrada;
        }
    }else{
        return "Ausente"
    }
}

function frequencia(cronograma) {
    var diaSena = 1; //new Date().getDay();
    var totalAulas = 0;
    var aulasIdas = 0;
    const diasAulas = [...Object.values(cronograma)]
    console.log(diasAulas)
    diasAulas.forEach(dia => {
        if(dia.exist){
            if(dia.diaSena==diaSena){
                console.log('Segunda')
            }
            const aulas = [...Object.values(dia.aulas)]
            aulas.forEach(aula => {
                if(aula.estado=="Presente"){
                    aulasIdas++;
                }
                totalAulas++
            });
        }
    });
    const freq = (aulasIdas / totalAulas) * 100;
    return freq.toFixed(0)+'%'
}

function ExibBtnProfs(inst) {
    const Areabtn = document.getElementById('main');

    const btnProfs = document.createElement('button');
    btnProfs.classList.add('fab', 'fixed', 'bottom', 'right', 'd-flex', 'flex-row');
    btnProfs.addEventListener('click', () => {
        pagProfs(inst);
    });

    const txtProfs = document.createElement('p');
    txtProfs.classList.add('mb-0', 'fw-bold', 'fs-5');
    txtProfs.innerHTML = 'Professores';

    Areabtn.appendChild(btnProfs);
    btnProfs.appendChild(txtProfs);
}

function ExibiTurTelaProf(Turmas) {

    const AreaTurmas = document.getElementById('-Turmas');
    Turmas.forEach(Turma => {
        const divturma = document.createElement('div');
        divturma.classList.add('card');
        divturma.addEventListener('click', () => {
            goToRoom(Turma);
        })
        AreaTurmas.appendChild(divturma);

        const divgeral = document.createElement('div');
        divgeral.id = 'divGeral' + Turma.TurID;
        divgeral.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');
        divturma.appendChild(divgeral);

        const divLiTurma = document.createElement('div');
        divLiTurma.classList.add('sembtn', 'align-items-end', 'justify-content-end');
        divLiTurma.id = Turma.TurID;
        divgeral.appendChild(divLiTurma);

        const btnExclui = document.createElement('button');
        btnExclui.classList.add('btnExcluiSala', 'btn');
        btnExclui.addEventListener('click', event => {
            event.stopPropagation();
            MsgExcluiTur(Turma.TurID, Turma.nome);
        })
        divLiTurma.appendChild(btnExclui);

        const imgBtnExclui = document.createElement('img');
        imgBtnExclui.src = '../img/lixeira.png';
        btnExclui.appendChild(imgBtnExclui);

        const divNomeTurma = document.createElement('div');
        divNomeTurma.id = 'divNome' + Turma.TurID;
        divgeral.appendChild(divNomeTurma);

        const NomeTurma = document.createElement('p');
        NomeTurma.classList.add('fw-bold', 'fs-1', 'text-primary-emphasis');
        NomeTurma.innerHTML = Turma.nome;
        divNomeTurma.appendChild(NomeTurma);
    });
}

function ExibiTurTela(Turmas) {

    const AreaTurmas = document.getElementById('-Turmas');
    Turmas.forEach(Turma => {
        const divturma = document.createElement('div');
        divturma.classList.add('card');
        divturma.addEventListener('click', () => {
            goToRoom(Turma);
        })
        AreaTurmas.appendChild(divturma);

        const divgeral = document.createElement('div');
        divgeral.id = 'divGeral' + Turma.TurID;
        divgeral.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');
        divturma.appendChild(divgeral);

        const divLiTurma = document.createElement('div');
        divLiTurma.classList.add('sembtn', 'align-items-end', 'justify-content-end');
        divLiTurma.id = Turma.TurID;
        divgeral.appendChild(divLiTurma);

        const btnExclui = document.createElement('button');
        btnExclui.classList.add('btnExcluiSala');
        btnExclui.addEventListener('click', event => {
            event.stopPropagation();
            MsgExcluiTur(Turma.TurID, Turma.nome);
        })
        divLiTurma.appendChild(btnExclui);

        const imgBtnExclui = document.createElement('img');
        imgBtnExclui.src = '../img/lixeira.png';
        btnExclui.appendChild(imgBtnExclui);

        const divNomeTurma = document.createElement('div');
        divNomeTurma.id = 'divNome' + Turma.TurID;
        divgeral.appendChild(divNomeTurma);

        const NomeTurma = document.createElement('p');
        NomeTurma.classList.add('fw-bold', 'fs-1', 'text-primary-emphasis');
        NomeTurma.innerHTML = Turma.nome;
        divNomeTurma.appendChild(NomeTurma);

        divturma.onmouseleave = () => {
            SaiLixeira(Turma.TurID, ('divNome' + Turma.TurID), ('divGeral' + Turma.TurID));
        }
        divturma.onmouseenter = () => {
            ApaLixeira(Turma.TurID, ('divNome' + Turma.TurID), ('divGeral' + Turma.TurID));
        }
    });
}

function MsgExcluiTur(TurID, turNome) {
    criaFundos('main');
    criaElementos();
    const consequencia = document.getElementById('consequencia');
    const btnConseq = document.getElementById('btnConseq');
    const resulValida = document.getElementById('resulValida');
    const cabecalho = document.getElementById('headerCad');
    consequencia.innerHTML = 'Cuidado!';
    resulValida.innerHTML = 'Term certeza que deseja excluir permanentemente a turma ' + turNome + '?';
    btnConseq.innerHTML = 'Sim';
    btnConseq.onclick = function () {
        ExcluiTurmaDB(TurID, turNome);
    }
    const btnSair = document.createElement("button");
    btnSair.type = 'button';
    btnSair.id = 'sairbtn';
    btnSair.onclick = function () {
        const divFund = document.getElementById("fundopreto");
        divFund.remove();
        const divDados = document.getElementById("DocCad");
        divDados.remove();
    }
    btnSair.classList.add("btn-close", "mb-5", "ms-2");
    cabecalho.appendChild(btnSair);
}

function msgSucessoExclu(turNome) {
    const btnsai = document.getElementById('sairbtn');
    btnsai.remove();
    const cabecalho = document.getElementById('headerCad');
    cabecalho.classList.remove('headerCad');
    cabecalho.classList.add('pt-4')
    const consequencia = document.getElementById('consequencia');
    const btnConseq = document.getElementById('btnConseq');
    const resulValida = document.getElementById('resulValida');
    consequencia.innerHTML = 'Parabéns!';
    resulValida.innerHTML = 'A turma ' + turNome + ' Foi excluida com sucesso';
    btnConseq.innerHTML = 'Fechar';
    btnConseq.onclick = function () {
        window.location.href = 'HomeInst.html'
    }
}

function msgContaCad(){
    const consequencia = document.getElementById('consequencia');
    const btnConseq = document.getElementById('btnConseq');
    const resulValida = document.getElementById('resulValida');
    consequencia.innerHTML = 'Erro!';
    resulValida.innerHTML = 'Esta consta já está cadastrada!';
    btnConseq.innerHTML = 'Tentar com outra conta';
    btnConseq.onclick = function () {
        window.location.href = 'Cad.html';
    }
}