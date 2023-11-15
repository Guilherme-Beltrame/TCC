
const form = {
    nome : () => document.getElementById('-Nome'),
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
    curNome: () => document.getElementById('-NomeCur'),
}

const formCadAlu = {
    nome: () => document.getElementById('-nome'),
    emailAlu: () => document.getElementById('-email'),
    rm: () => document.getElementById('-RM'),
    btn: () => document.getElementById('-bnt'),
    Segunda: () => document.getElementById('Segunda'),
    Terca: () => document.getElementById('Terca'),
    Quarta: () => document.getElementById('Quarta'),
    Quinta: () => document.getElementById('Quinta'),
    Sexta: () => document.getElementById('Sexta'),
}