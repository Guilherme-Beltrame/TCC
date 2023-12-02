
const form = {
    nome: () => document.getElementById('-Nome'),
    btn: () => document.getElementById('-Btn'),
    cep: () => document.getElementById('-CEP'),
    num: () => document.getElementById('-Num'),
    cnpj: () => document.getElementById('-CNPJ'),
    email: () => document.getElementById('-email'),
    senha: () => document.getElementById('-Senha'),
    plano: (selecionado) => document.getElementById(selecionado),
    aceitaTermos: () => document.getElementById('-aceitaTermos'),
}

const formLogin = {
    email: () => document.getElementById('-email'),
    senha: () => document.getElementById('-Senha'),
    btn: () => document.getElementById('_Btn'),
}

const formCadTur = {
    nomeTur: () => document.getElementById('-NomeTur'),
    btncad: () => document.getElementById('-btnTurCad'),
    horaentra: aulaselec => document.getElementById(aulaselec),
    horasai: aulaselec => document.getElementById(aulaselec),
    autoTime: () => document.getElementById('habilitaAll'),
    autohora: () => document.getElementById('autoHora'),
}

const formCadProf = {
    nome: () => document.getElementById('-nome'),
    email: () => document.getElementById('email'),
    rm: () => document.getElementById('-RM'),
    nomeTurma: () => document.getElementById('-NomeTur'),
    turmasAdd: () => document.getElementsByName('turmas')
}

const formCadAlu = {
    nome: () => document.getElementById('-nome'),
    emailAlu: () => document.getElementById('-email'),
    Turma: () => document.getElementById('-NomeTur'),
    rm: () => document.getElementById('-RM'),
    btn: () => document.getElementById('-bnt'),
    Img: () => document.getElementById('ImgCad')
}