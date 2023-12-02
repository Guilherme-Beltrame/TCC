firebase.auth().onAuthStateChanged(user => {
    if (user) {
        if (pegaIds().uidTurma.exist) {
            preencherNomeTur(pegaIds().uidTurma.id);
        }
    }
})

function preencherNomeTur(idTur) {
    console.log(idTur)
    db.collection('Turma').doc(idTur).get()
        .then(snapshot => {
            if (snapshot.exists == true) {
                const nometurinput = formCadAlu.Turma();
                nometurinput.value = snapshot.data().nome;
            }
        }).catch(erro => {
            console.log(erro)
        })
}

function pegaIds() {
    const parametrosUsuario = new URLSearchParams(window.location.search);
    return {
        uidTurma: {
            exist: parametrosUsuario.get("exist"),
            id: parametrosUsuario.get('id'),
        },
    }
}

async function CadAlu() {
    entratelaCarregando();
    await buscaIdTurma(formCadAlu.Turma().value);
    await cadimgStorage();
    await buscaCronograma(TurmaId);
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

var linkIMGStorage;
function commitDados() {
    return {
        cronograma: cronogramadb,
        email: formCadAlu.emailAlu().value,
        entrada: '',
        saida: '',
        nome: formCadAlu.nome().value,
        RM: parseFloat(formCadAlu.rm().value),
        turma: formCadAlu.Turma().value,
        idTurma: TurmaId,
        uidInst: firebase.auth().currentUser.uid,
        image: linkIMGStorage,
    }
}
var TurmaId
async function buscaIdTurma(nameTurma) {

    await db.collection('Turma')
        .where('nome', '==', nameTurma)
        .get()
        .then(snapshot => {
            const turmas = snapshot.docs.map(Turma => ({
                ...Turma.data(),
                idTurma: Turma.id,
            }));
            TurmaId = turmas[0].idTurma;
        })
        .catch(erro => {
            console.log(erro);
        });

}

var imagemArquivo;
var nomeImagem;

async function guardaimgeaparece(e) {
    console.log(e)
    const pictureImage = document.getElementById("image");
    const textInput = document.getElementById('txtimg');
    const file = e.files[0];
    imagemArquivo = file;
    console.log(imagemArquivo);
    nomeImagem = file.name;

    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", function (e) {
            textInput.style.display = '';
            textInput.style.display = 'none';
            const readerTarget = e.target;
            console.log(readerTarget)
            pictureImage.src = ''
            pictureImage.src = readerTarget.result;
        });
        reader.readAsDataURL(file);

    } else {
        textInput.style.display = '';
        textInput.style.display = 'block';
        pictureImage.src = ''
        pictureImage.src = '../img/add.png';
    }
    habilitaBtn()
}


function apareceBtn() {
    var nome = formCadAlu.nome().value;
    if (nome == '' || nome.length < 3) {
        return true;
    }
    var email = formCadAlu.emailAlu().value;
    if (!validaEmail(email)) {
        return true;
    }
    var turma = formCadAlu.Turma().value
    if (turma == '' || turma.length <= 1) {
        return true;
    }
    var img = formCadAlu.Img().files;
    if (img.length == 0 || img.length > 1) {
        return true;
    }
    const RM = formCadAlu.rm().value;
    if (RM < 0 || RM.length < 10 || RM.length > 11) {
        return true;
    } else {
        return false;
    }
}

function habilitaBtn() {
    formCadAlu.btn().disabled = apareceBtn();
}