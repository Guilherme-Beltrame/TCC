firebase.auth().onAuthStateChanged(user => {
    if (user.uid == pegaIds().uidInst) {
        ExibiAlunosInsti(pegaIds().uidTurma);
        saiTelaCarregando();
    } else if (user.uid == pegaIds().uidProf) {
        ExibiAlunosProf(pegaIds().uidTurma);
        saiTelaCarregando();
    } else {
        saiTelaCarregando();
        alert('Você não tem permissão em acessar esses dados');
        window.location.href = "../index.html";
    }
})

function pegaIds() {
    const parametrosUsuario = new URLSearchParams(window.location.search);
    return {
        uidProf: parametrosUsuario.get('prof'),
        uidInst: parametrosUsuario.get('inst'),
        uidTurma: parametrosUsuario.get('id'),
    }
}

function cadAlu(idTurma){
    console.log(idTurma);    
    window.location.href = 'CadAluno.html?id='+idTurma;
}

function ExibiAlunosProf(idTurma) {
    db.collection('Alunos')
        .where('idTurma', '==', idTurma)
        .get()
        .then(snapshot => {
            const Alunos = snapshot.docs.map(Aluno => ({
                ...Aluno.data(),
                AluId: Aluno.id
            }));
            console.log(Alunos)
            ExibiAluTelaProf(Alunos);
        }).catch(erro=>{
            console.log(erro)
        })
}

function ExibiAlunosInsti(idTurma) {
    db.collection('Alunos')
        .where('idTurma', '==', idTurma)
        .get()
        .then(snapshot => {
            const Alunos = snapshot.docs.map(Aluno => ({
                ...Aluno.data(),
                AluId: Aluno.id
            }));
            console.log(Alunos);
            ExibiAluTela(Alunos);
        })
}

function PuxaDadosprof(AluId) {
    entratelaCarregando();
    db.collection('Alunos')
        .doc(AluId)
        .get()
        .then(dados => {
            if (dados.exists) {
                AdiDadosTelaProf(dados.data());
                saiTelaCarregando();
            } else {
                saiTelaCarregando();
                alert("Erro ao carregar dados");
            }
        })
        .catch(erro => {
            saiTelaCarregando();
            alert("Erro ao carregaaaaaaaaar dados");
            console.log(erro)
        })
}

function PuxaDados(AluId) {
    entratelaCarregando();
    db.collection('Alunos')
        .doc(AluId)
        .get()
        .then(dados => {
            if (dados.exists) {
                AdiDadosTela(dados.data());
                saiTelaCarregando();
            } else {
                saiTelaCarregando();
                alert("Erro ao carregar dados");
            }
        })
        .catch(erro => {
            saiTelaCarregando();
            alert("Erro ao carregaaaaaaaaar dados");
            console.log(erro)
        })
}

function AdiDadosTelaProf(Aluno) {
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
    NomeAlu.innerHTML = Aluno.nome;
    NomeAlu.classList.add("fw-bold", "fs-4", "text-uppercase", "mb-0");
    divImgNomeSai.appendChild(NomeAlu);
    //botão dee sair ao canto supeerior direito
    const btnSair = document.createElement("button");
    btnSair.type = 'button';
    btnSair.onclick = function () {
        saiDadAlu();
    }
    btnSair.classList.add("btn-close", "mb-5", "ms-2");
    divImgNomeSai.appendChild(btnSair);

    //dados
    const olDados = document.createElement('ol');
    olDados.classList.add('docDadoAlu');
    docAluno.appendChild(olDados);
    //Dado 1
    const item1 = document.createElement('li');
    item1.classList.add('dado');
    olDados.appendChild(item1);
    const hoje = document.createElement("p");
    hoje.innerHTML = 'Hoje: ';
    hoje.classList.add('fw-bold', 'tituDadAlu');
    item1.appendChild(hoje);
    const estado = document.createElement("p");
    colorEstado(Aluno.cronograma, estado);
    estado.innerHTML = StatusAlu(Aluno.cronograma);
    item1.appendChild(estado);
    //Dado 3
    const item3 = document.createElement('li');
    item3.classList.add('dado');
    olDados.appendChild(item3);
    const RM = document.createElement("p");
    RM.innerHTML = 'RM: ';
    RM.classList.add('fw-bold', 'tituDadAlu');
    item3.appendChild(RM);
    const RMAlu = document.createElement("p");
    RMAlu.innerHTML = Aluno.RM;
    item3.appendChild(RMAlu);
    //Dado 5
    const item5 = document.createElement('li');
    item5.classList.add('dado');
    olDados.appendChild(item5);
    const fre = document.createElement("p");
    fre.innerHTML = 'Frequência: ';
    fre.classList.add('fw-bold', 'tituDadAlu');
    item5.appendChild(fre);
    const freq = document.createElement("p");
    freq.innerHTML = frequencia(Aluno.cronograma);
    item5.appendChild(freq);
}

function AdiDadosTela(Aluno) {
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
    NomeAlu.classList.add('nomeAlu');
    NomeAlu.innerHTML = Aluno.nome;
    NomeAlu.classList.add("fw-bold", "fs-4", "text-uppercase", "mb-0");
    divImgNomeSai.appendChild(NomeAlu);
    //botão dee sair ao canto supeerior direito
    const btnSair = document.createElement("button");
    btnSair.type = 'button';
    btnSair.onclick = function () {
        saiDadAlu();
    }
    btnSair.classList.add("btn-close", "mb-5", "ms-2");
    divImgNomeSai.appendChild(btnSair);

    //dados
    const olDados = document.createElement('ol');
    olDados.classList.add('docDadoAlu');
    docAluno.appendChild(olDados);
    //Dado 1
    const item1 = document.createElement('li');
    item1.classList.add('dado');
    olDados.appendChild(item1);
    const hoje = document.createElement("p");
    hoje.innerHTML = 'Hoje: ';
    hoje.classList.add('tituDadAlu');
    item1.appendChild(hoje);
    const estado = document.createElement("p");
    colorEstado(Aluno.cronograma, estado);
    estado.innerHTML = StatusAlu(Aluno.cronograma);
    item1.appendChild(estado);
    //Dado 3
    const item3 = document.createElement('li');
    item3.classList.add('dado');
    olDados.appendChild(item3);
    const RM = document.createElement("p");
    RM.innerHTML = 'RM: ';
    RM.classList.add( 'tituDadAlu');
    item3.appendChild(RM);
    const RMAlu = document.createElement("p");
    RMAlu.classList.add('fw-bold', 'dadAlu');
    RMAlu.innerHTML = Aluno.RM;
    item3.appendChild(RMAlu);
    //Dado 4
    const item4 = document.createElement('li');
    item4.classList.add('dado');
    olDados.appendChild(item4);
    const peri = document.createElement("p");
    peri.innerHTML = 'Período de aula: ';
    peri.classList.add( 'tituDadAlu');
    item4.appendChild(peri);
    const PerAula = document.createElement("p");
    PerAula.classList.add('fw-bold', 'dadAlu');
    PerAula.innerHTML = PegaPeriodo(Aluno.cronograma);
    item4.appendChild(PerAula);
    //Dado 5
    const item5 = document.createElement('li');
    item5.classList.add('dado');
    olDados.appendChild(item5);
    const fre = document.createElement("p");
    fre.innerHTML = 'Frequência: ';
    fre.classList.add( 'tituDadAlu');
    item5.appendChild(fre);
    const freq = document.createElement("p");
    freq.classList.add('fw-bold', 'dadAlu');
    freq.innerHTML = frequencia(Aluno.cronograma);
    item5.appendChild(freq);
    //Dado 6
    const item6 = document.createElement('li');
    item6.classList.add('dado');
    olDados.appendChild(item6);
    const horaEntra = document.createElement("p");
    horaEntra.innerHTML = 'Horário de entrada: ';
    horaEntra.classList.add( 'tituDadAlu');
    item6.appendChild(horaEntra);
    const HEntra = document.createElement("p");
    HEntra.classList.add('fw-bold', 'dadAlu');
    HEntra.innerHTML = horaEntrada(Aluno.cronograma);
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
    HSaida.classList.add('fw-bold', 'dadAlu');
    HSaida.innerHTML = horaSaida(Aluno.cronograma);
    item7.appendChild(HSaida);

    //area do Btn sair mais cedo
    const divbtn = document.createElement('div');
    divbtn.classList.add("saidaAlu", "d-flex", "align-items-end", "justify-content-end", "mb-3");
    docAluno.appendChild(divbtn);
    //Btn sair mais cedo
    const SairCedo = document.createElement("button");
    SairCedo.type = 'button'
    SairCedo.onclick = function () {
        LiberaAlu();
    }
    SairCedo.innerHTML = 'Ausente'
    veriBtnSair(SairCedo, Aluno.cronograma, divbtn);
    divbtn.appendChild(SairCedo);
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

function colorEstado(cronograma, estado) {
    let dataAtual = new Date().getDay();
    if (dataAtual == 1) {
        if (cronograma.Segunda.exist == "true") {
            if (cronograma.Segunda.estado == "Presente") {
               estado.classList.add('presente')
            } else if (cronograma.Segunda.estado == "Ausente") {
                estado.classList.add('ausente')
            }
        } else if (cronograma.Segunda.exist == "false") {
            estado.classList.add('dadAlu', 'fw-bold')
        }
    }
    if (dataAtual == 2) {
        if (cronograma.Terca.exist == "true") {
            if (cronograma.Terca.estado == "Presente") {
                estado.classList.add('presente')
             } else if (cronograma.Terca.estado == "Ausente") {
                 estado.classList.add('ausente')
             }
        } else if (cronograma.Terca.exist == "false") {
            estado.classList.add('dadAlu', 'fw-bold')
        }
    }
    if (dataAtual == 3) {
        if (cronograma.Quarta.exist == "true") {
            if (cronograma.Quarta.estado == "Presente") {
                estado.classList.add('presente')
             } else if (cronograma.Quarta.estado == "Ausente") {
                 estado.classList.add('ausente')
             }
        } else if (cronograma.Quarta.exist == "false") {
            estado.classList.add('dadAlu', 'fw-bold')
        }
    }
    if (dataAtual == 4) {
        if (cronograma.Quinta.exist == "true") {
            if (cronograma.Quinta.estado == "Presente") {
                estado.classList.add('presente')
             } else if (cronograma.Quinta.estado == "Ausente") {
                 estado.classList.add('ausente')
             }
        } else if (cronograma.Quinta.exist == "false") {
            estado.classList.add('dadAlu', 'fw-bold')
        }
    }
    if (dataAtual == 5) {
        if (cronograma.Sexta.exist == "true") {
            if (cronograma.Sexta.estado == "Presente") {
                estado.classList.add('presente')
             } else if (cronograma.Sexta.estado == "Ausente") {
                 estado.classList.add('ausente')
             }
        } else if (cronograma.Sexta.exist == "false") {
            estado.classList.add('dadAlu', 'fw-bold')
        }
    }
}

function veriBtnSair(btn, cronograma, divbtn) {
    let dataAtual = new Date().getDay();
    if (dataAtual == 1) {
        if (cronograma.Segunda.exist == "true") {
            if (cronograma.Segunda.estado == "Presente") {
                aparecebtn(btn);
            } else if (cronograma.Segunda.estado == "Ausente") {
                if (cronograma.Segunda.saida == "") {
                    excloubtn(divbtn);
                } else if (cronograma.Segunda.saida != "") {
                    excloubtn(divbtn);
                }
            }
        } else if (cronograma.Segunda.exist == "false") {
            excloubtn(divbtn);
        }
    }
    if (dataAtual == 2) {
        if (cronograma.Terca.exist == "true") {
            if (cronograma.Terca.estado == "Presente") {
                aparecebtn(btn);
            } else if (cronograma.Terca.estado == "Ausente") {
                if (cronograma.Terca.saida == "") {
                    excloubtn(divbtn);
                } else if (cronograma.Terca.saida != "") {
                    excloubtn(divbtn);
                }
            }
        } else if (cronograma.Terca.exist == "false") {
            excloubtn(divbtn);
        }
    }
    if (dataAtual == 3) {
        if (cronograma.Quarta.exist == "true") {
            if (cronograma.Quarta.estado == "Presente") {
                aparecebtn(btn);
            } else if (cronograma.Quarta.estado == "Ausente") {
                if (cronograma.Quarta.saida == "") {
                    excloubtn(divbtn);
                } else if (cronograma.Quarta.saida != "") {
                    excloubtn(divbtn);
                }
            }
        } else if (cronograma.Quarta.exist == "false") {
            excloubtn(divbtn);
        }
    }
    if (dataAtual == 4) {
        if (cronograma.Quinta.exist == "true") {
            if (cronograma.Quinta.estado == "Presente") {
                aparecebtn(btn);
            } else if (cronograma.Quinta.estado == "Ausente") {
                if (cronograma.Quinta.saida == "") {
                    excloubtn(divbtn);
                } else if (cronograma.Quinta.saida != "") {
                    excloubtn(divbtn);
                }
            }
        } else if (cronograma.Quinta.exist == "false") {
            excloubtn(divbtn);
        }
    }
    if (dataAtual == 5) {
        if (cronograma.Sexta.exist == "true") {
            if (cronograma.Sexta.estado == "Presente") {
                aparecebtn(btn);
            } else if (cronograma.Sexta.estado == "Ausente") {
                if (cronograma.Sexta.saida == "") {
                    excloubtn(divbtn);
                } else if (cronograma.Sexta.saida != "") {
                    excloubtn(divbtn);
                }
            }
        } else if (cronograma.Sexta.exist == "false") {
            excloubtn(divbtn);
        }
    }
}

function saiDadAlu() {
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