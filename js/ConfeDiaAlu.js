
function seSelecionado(){
    const Segunda = formCadAlu.Segunda();
    const Terca = formCadAlu.Terca();
    const Quarta = formCadAlu.Quarta();
    const Quinta = formCadAlu.Quinta();
    const Sexta = formCadAlu.Sexta();
    if(Segunda.checked){
        Segunda.value = 1;
        console.log("Seegunda ="+Segunda.value)
    }else{
        Segunda.value = 0;
        console.log("Seegunda = "+Segunda.value)
    }
    if(Terca.checked){
        Terca.value = 1;
        console.log("Terca ="+Terca.value)
    }else{
        Terca.value = 0;
        console.log("Terca = "+Terca.value)
    }
    if(Quarta.checked){
        Quarta.value = 1;
        console.log("Quarta ="+Quarta.value)
    }else{
        Quarta.value = 0;
        console.log("Quarta = "+Quarta.value)
    }
    if(Quinta.checked){
        Quinta.value = 1;
        console.log("Quinta ="+Quinta.value)
    }else{
        Quinta.value = 0;
        console.log("Quinta = "+Quinta.value)
    }
    if(Sexta.checked){
        Sexta.value = 1;
        console.log("Sexta ="+Sexta.value)
    }else{
        Sexta.value = 0;
        console.log("Sexta = "+Sexta.value)
    }
}
