function entratelaCarregando(){
    const body = document.getElementById('main');
    const fundPreto = document.createElement('div');
    fundPreto.classList.add('fundPreto');
    fundPreto.id = "fundoload";
    body.appendChild(fundPreto);    

    const animation = document.createElement('div');
    animation.classList.add('animation', 'is-animation')
    fundPreto.appendChild(animation);
}

function saiTelaCarregando(){
    const fundload = document.getElementById('fundoload');
    console.log('entrouTira')
    if (fundload){
        fundload.remove();
    }
}