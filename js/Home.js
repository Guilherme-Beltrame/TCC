function SairCont(){
    firebase.auth().signOut().then(()=> {
        window.location.href = 'Login.html';
    }).catch(() => {
        alert("Erro ao sair da conta");
    })
}

function goToRoom(){
    window.location.href ="1-A.html";
}

function pagProfs(){
    window.location.href ="Profs.html";
}

function CadTurma(){
    window.location.href = "CadTurma.html";
}

verdadosusu();

function verdadosusu(){
    const user = firebase.auth().currentUser;

if (user) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

}