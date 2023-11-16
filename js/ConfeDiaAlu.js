function seSelecionado(){
    const Segunda = formCadAlu.Segunda();
    const Terca = formCadAlu.Terca();
    const Quarta = formCadAlu.Quarta();
    const Quinta = formCadAlu.Quinta();
    const Sexta = formCadAlu.Sexta();
    const SegundaEntrada = formCadAlu.SegundaEntrada();
    const SegundaSaida = formCadAlu.SegundaSaida();
    const TercaEntrada = formCadAlu.TercaEntrada();
    const TercaSaida = formCadAlu.TercaSaida();
    const QuartaEntrada = formCadAlu.QuartaEntrada();
    const QuartaSaida = formCadAlu.QuartaSaida();
    const QuintaEntrada = formCadAlu.QuintaEntrada();
    const QuintaSaida = formCadAlu.QuintaSaida();
    const SextaEntrada = formCadAlu.SextaEntrada();
    const SextaSaida = formCadAlu.SextaSaida();
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