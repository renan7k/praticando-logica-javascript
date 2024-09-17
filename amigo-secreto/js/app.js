
let participantes = [];
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    //incluindo validações
    if (participantes.includes(amigo.value)){
        alert('O nome digitado já existe. Digite o apelido ou sobrenome!!')
    }else if (amigo.value == ''){
        alert('O campo está vazio. Digite um nome!')
    }else {
        participantes.push(amigo.value);
    };
    

    listaAmigos.textContent = participantes;
    amigo.value = '';
}

function sortear () {
    if(participantes.length < 4 ) {
        alert('Adicione no mínimo 4 amigos!');
        return;
    }
  
    embaralha(participantes);
    let sorteio = document.getElementById('lista-sorteio');

    //Como o array está embaralhado, a lógica é q o 1º pegue o 2º, e assim por diante, até que o último pegue o 1º
    for (let i = 0; i < participantes.length; i++) {

        if (i == participantes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + participantes[i] + ' --> ' + participantes[0] + '<br>';
        }else {
            sorteio.innerHTML = sorteio.innerHTML + participantes[i] + ' --> ' + participantes[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    participantes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}
