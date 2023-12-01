
async function CadAlu() {
    entratelaCarregando();
    await buscaCronograma(TurmaId);
    await cadimgStorage();
    let interval = setInterval(() => {
        if (linkIMGStorage != undefined) {
            clearInterval(interval);
        }
        const dados = commitDados();
        db.collection('Alunos')
            .add(dados)
            .then(() => {
                window.location.href = 'HomeInst.html'
            })
            .catch(erro => {
                console.log(erro);
                alert(erro);
            })
    }, 1000);
    saiTelaCarregando();
}

function addTurmas(){
    const turma = formCadProf.nomeTurma().value;
    db.collection('Turma')
        .where('nome', '==', turma)
        .get()
        .then(snapshot=>{
            console.log(snapshot);
        }).catch(error=>{
            console.log(error.code +'  '+error.message)
        })
}

console.log(document.getElementsByName('turmas').id )

var linkIMGStorage;
var turmas;
function commitDados() {
    return {
        cronograma: cronogramadb,
        email: formCadAlu.emailAlu().value,
        entrada: '',
        saida: '',
        nome: formCadAlu.nome().value,
        RM: parseFloat(formCadAlu.rm().value),
        turma: turmas,
        idTurma: TurmaId,
        uidInst: firebase.auth().currentUser.uid,
        image: linkIMGStorage,
    }
}

var cronogramadb;
async function buscaCronograma(id) {
    await db.collection('Turma')
        .doc(id)
        .get()
        .then(snapshot => {
            cronogramadb = snapshot.data().cronograma;
        })
        .catch(erro => {
            console.log(erro);
        });
}

function cadimgStorage() {
    const enviaIMG = storage.ref().child('AlunoImg').child(nomeImagem).put(imagemArquivo);
    var i = 0;
    enviaIMG.on("state_changed", function (snapshot) {
        if (i == 0) {
            enviaIMG.snapshot.ref.getDownloadURL().then(async function (url_img) {
                console.log('entrou')
                linkIMGStorage = url_img;
                console.log(linkIMGStorage);
            })
            i++
        }
    }, function (error) {
        console.log(error);
    })
}


function buscaIdTurma(nameTurma){
    db.collection('Turma')
        .where('nome', '==', nameTurma)
        .get()
        .then(snapshot => {
            const turmas = snapshot.docs.map(Turma => ({
                ...Turma.data(),
                idTurma:Turma.id,
            }));
            var idTur;
            turmas.forEach(turma =>{
                console.log(turma.idTurma)
                idTur = turma.idTurma;
            });
            console.log(idTur)
            return {
                turID: idTur,
            };
        })
        .catch(erro  => {
            console.log(erro);
        });
}

function fakeDados() {
    return {
        nome: 'Giovana Almeida',
        RM: 2021200394,
        turma: '1º ano A',
        idTurma: 'fGF3zfRjTKnwtBre5JOV',
        uid: 'duqCTVcpKybWOpLxpuxOVzZUoV42'
    }
}

function apareceBtn() {
    var nome = formCadAlu.nome().value;
    if (nome == '') {
        console.log(nome)
        return true;
    }
    var email = formCadAlu.emailAlu().value;
    if (!validaEmail(email)) {
        console.log(email)
        return true;
    }
    var turma = formCadAlu.Turma().value
    if (turma == '' || turma.length <= 1) {
        console.log(turma);
        return true;
    }
    const dias = document.getElementsByName('dia');
    var number = 0;
    var cont = 0;
    var cont2 = 0;
    var nomes;
    if (dias) {
        dias.forEach(dia => {
            console.log(dia.value);
            if (dia.value == 'true') {
                cont2--;
                nomes = dia.id + 'Entrada';
                console.log(formCadAlu.Entrada(nomes).value);
                if (formCadAlu.Entrada(nomes).value == '') {
                    console.log('foiEntraVazio')
                    number++;
                    console.log(number)
                }
                nomes = dia.id + 'Saida';
                if (formCadAlu.Saida(nomes).value == '') {
                    console.log('foiSaidaVazio')
                    number++;
                    console.log(number)

                }
            } else if (dia.value == 'false') {
                cont2++;
                console.log(dia.value)
                nomes = dia.id + 'Entrada';
                console.log(nomes)
                if(formCadAlu.Entrada(nomes).value!= ''){
                    console.log(cont)
                    cont++;
                }
                nomes = dia.id + 'Saida';
                if (formCadAlu.Saida(nomes).value != '') {
                    cont++;
                }
            }
        });
        console.log(cont2)
        if (number > 0) {
            console.log(number);
            return true;
        } else if(cont>0){
            console.log(cont);
            return true;
        } else if (cont2 == 5){
            return true;
        }
    } else {
        return false;
    }
}

function habilitaBtn() {
    formCadAlu.btn().disabled = apareceBtn();
}