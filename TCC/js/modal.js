console.log('foi')

function Parcelas() {
    console.log('foi')
    const body = document.getElementById('body');
    body.classList.add('d-flex', 'align-items-center', 'justify-content-center');
    const divDundPreto = document.createElement('div');
    divDundPreto.classList.add('fundoPreto');
    body.appendChild(divDundPreto);

    const divModalParcela = document.createElement('div');
    divModalParcela.classList.add('modalparcelas');
    body.appendChild(divModalParcela);

    const topo = document.createElement('div');
    topo.classList.add('topo', 'fs-4', 'fw-bold');
    topo.innerHTML = 'Parcelar em:'
    divModalParcela.appendChild(topo);

    const conteudoModal = document.createElement('div');
    conteudoModal.classList.add('conteudoModal');
    divModalParcela.appendChild(conteudoModal);

    const parcelas = document.createElement('ol');
    parcelas.classList.add('d-flex', 'p-0', 'gap-3');
    conteudoModal.appendChild(parcelas);

    const divisaoParcelas1 = document.createElement('div');
    divisaoParcelas1.classList.add('d-flex', 'flex-column');
    parcelas.appendChild(divisaoParcelas1);

    //item 1
    const umaVez = document.createElement('li');
    umaVez.classList.add('vezes');
    divisaoParcelas1.appendChild(umaVez);
    const form1 = document.createElement('div');
    form1.classList.add('form-check');
    umaVez.appendChild(form1);
    const input1 = document.createElement('input');
    input1.classList.add('form-check-input');
    input1.type = 'radio';
    input1.name = 'vezes';
    input1.id = '1x';
    input1.value = '1x';
    form1.appendChild(input1);
    const label1 = document.createElement('label');
    label1.classList.add('form-check-label');
    label1.setAttribute('for', '1x');
    label1.innerHTML = '1x R$ 10.986,25';
    form1.appendChild(label1);

    //item 1
    const duasVez = document.createElement('li');
    duasVez.classList.add('vezes');
    divisaoParcelas1.appendChild(duasVez);
    const form2 = document.createElement('div');
    form2.classList.add('form-check');
    duasVez.appendChild(form2);
    const input2 = document.createElement('input');
    input2.classList.add('form-check-input');
    input2.type = 'radio';
    input2.name = 'vezes';
    input2.id = '2x';
    input2.value = '2x';
    form2.appendChild(input2);
    const label2 = document.createElement('label');
    label2.classList.add('form-check-label');
    label2.setAttribute('for', '2x');
    label2.innerHTML = '2x R$ 10.986,25';
    form2.appendChild(label2);
    //item 1
    const tresVez = document.createElement('li');
    tresVez.classList.add('vezes');
    divisaoParcelas1.appendChild(tresVez);
    const for3 = document.createElement('div');
    for3.classList.add('form-check');
    tresVez.appendChild(for3);
    const inpu3 = document.createElement('input');
    inpu3.classList.add('form-check-input');
    inpu3.type = 'radio';
    inpu3.name = 'vezes';
    inpu3.id = '3x';
    inpu3.value = '3x';
    for3.appendChild(inpu3);
    const labe3 = document.createElement('label');
    labe3.classList.add('form-check-label');
    labe3.setAttribute('for', '3x');
    labe3.innerHTML = '3x R$ 10.986,25';
    for3.appendChild(labe3);

    const divisaoParcelas2 = document.createElement('div');
    divisaoParcelas2.classList.add('d-flex', 'flex-column');
    parcelas.appendChild(divisaoParcelas2);
    //item 1
    const quaVez = document.createElement('li');
    quaVez.classList.add('vezes');
    divisaoParcelas2.appendChild(quaVez);
    const form4 = document.createElement('div');
    form4.classList.add('form-check');
    quaVez.appendChild(form4);
    const input4 = document.createElement('input');
    input4.classList.add('form-check-input');
    input4.type = 'radio';
    input4.name = 'vezes';
    input4.id = '4x';
    input4.value = '4x';
    form4.appendChild(input4);
    const label4 = document.createElement('label');
    label4.classList.add('form-check-label');
    label4.setAttribute('for', '4x');
    label4.innerHTML = '4x R$ 10.986,25';
    form4.appendChild(label4);
    //item 1
    const cinVez = document.createElement('li');
    cinVez.classList.add('vezes');
    divisaoParcelas2.appendChild(cinVez);
    const form5 = document.createElement('div');
    form5.classList.add('form-check');
    cinVez.appendChild(form5);
    const input5 = document.createElement('input');
    input5.classList.add('form-check-input');
    input5.type = 'radio';
    input5.name = 'vezes';
    input5.id = '5x';
    input5.value = '5x';
    form5.appendChild(input5);
    const label5 = document.createElement('label');
    label5.classList.add('form-check-label');
    label5.setAttribute('for', '5x');
    label5.innerHTML = '5x R$ 10.986,25';
    form5.appendChild(label5);
    //item 1
    const seiVez = document.createElement('li');
    seiVez.classList.add('vezes');
    divisaoParcelas2.appendChild(seiVez);
    const form6 = document.createElement('div');
    form6.classList.add('form-check');
    seiVez.appendChild(form6);
    const input6 = document.createElement('input');
    input6.classList.add('form-check-input');
    input6.type = 'radio';
    input6.name = 'vezes';
    input6.id = '6x';
    input6.value = '6x';
    form6.appendChild(input6);
    const label6 = document.createElement('label');
    label6.classList.add('form-check-label');
    label6.setAttribute('for', '6x');
    label6.innerHTML = '6x R$ 10.986,25';
    form6.appendChild(label6);

}