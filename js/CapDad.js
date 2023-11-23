
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
}

const formCadAlu = {
    nome: () => document.getElementById('-nome'),
    emailAlu: () => document.getElementById('-email'),
    Turma: () => document.getElementById('-NomeTur'),
    rm: () => document.getElementById('-RM'),
    btn: () => document.getElementById('-bnt'),
    DiaCheck: diaSelec => document.getElementById(diaSelec),
    Entrada: diaSelec => document.getElementById(diaSelec),
    Saida: diaSelec => document.getElementById(diaSelec),
}

const prePalavras = {
    ausente : 'Ausente',
    faltou: 'Faltou',
    SemAula: 'Sem aula hoje',
    aSair: 'A sair',
}