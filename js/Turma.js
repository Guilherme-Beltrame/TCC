
function PuxaDados() {
    setTimeout(() => {
        AdiDadosTela(fakesAlunos);
    }, 1000);
}

function AdiDadosTela(Alunos) {
    CriaDivsIniciais();
    const docAluno = document.getElementById("DocAlu");

    Alunos.forEach(Alunos => {
        const divImgNomeSai = document.createElement('div');
        const olDados = document.createElement('ol');
        const divbtn = document.createElement('div');

        divImgNomeSai.classList.add('headerAlu');
        const imgAlu = document.createElement('img');



        docAluno.appendChild(divImgNomeSai);
        docAluno.appendChild(olDados);
        docAluno.appendChild(divbtn);
    });

}

function CriaDivsIniciais() {
    const main = document.getElementById("main");
    const div = document.createElement('div');
    div.classList.add('fundPreto');
    main.appendChild(div);
    const div2 = document.createElement('div');
    div2.classList.add('DocAlu');
    div2.id = 'DocAlu';
    main.appendChild(div2);
}

const fakesAlunos = [{
    img: 'img/Perfil-Aluno.png',
    nome: 'Enzo Vinycius Da Silva Dias',
    estado: 'Presente',
    curso: 'Desenvolvimento de sistemas',
    RM: '20212930058',
    PerAula: '7:30 ás 15:30',
    freq: {
        segunda: 1,
        terca: 1,
        quarta: 1,
        quinta: 1,
        sexta: 1,
    },
    HEntra: '07:30 AM',
    HSaida: '15:30 PM',
},]