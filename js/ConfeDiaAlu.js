function seSelecionado(){
    const Segunda = formCadAlu.Segunda();
    const Terca = formCadAlu.Terca();
    const Quarta = formCadAlu.Quarta();
    const Quinta = formCadAlu.Quinta();
    const Sexta = formCadAlu.Sexta();
    if(Segunda.checked){
        Segunda.value = 1;
    }else{
        Segunda.value = 0;
    }
    if(Terca.checked){
        Terca.value = 1;
    }else{
        Terca.value = 0;
    }
    if(Quarta.checked){
        Quarta.value = 1;
    }else{
        Quarta.value = 0;
    }
    if(Quinta.checked){
        Quinta.value = 1;
    }else{
        Quinta.value = 0;
    }
    if(Sexta.checked){
        Sexta.value = 1;
    }else{
        Sexta.value = 0;
    }
}


const diasSemana = [{
    1 : {
        Segunda
    }
}]