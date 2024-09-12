
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);  // se nn passar o value, aa variável estaria armazenando a tag HTML. O value guarda o valor digitado
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    // como sabemos que os campos só devem possuir números, utilizamos a função parseInt para converter. Pois o value captura uma string, podendo conter letras
    //alert(`Quantidade: ${quantidade}, de: ${de}, até: ${ate}`);


    //Veja que utilizamos dentro do bloco if o comando return. Esse comando, usado dentro desse bloco e sem de fato retornar nada, 
    //serve para que a função sortear() seja interrompida nesse ponto, sem seguir para as linhas de baixo. 
    //Isso é muito útil quando você não quer que o código adicional seja executado dada alguma circunstância específica. Nesse caso, por exemplo, se o usuário informou erroneamente os valores, não faz sentido continuar com o sorteio.
    if(de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return; //usado paara interromper a função sortear
    }

    //condicional paraa verificar se a quantidade de números não é maior que o intervalo
    if (quantidade > (ate - de + 1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    
    let sorteados = [];
    let numero;
    for ( let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        // utilizamos o loop while para repetir um bloco de código "ENQUANTO" uma condição específica é verdadeira
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        } //Enquanto o número sorteado JÁ existir no array, será solicitado a geração de um novo número
        sorteados.push(numero);
    }
    // Capturando o elemento no html, e dessa vez "setando" um comportamento
    // usamos o innerHTML, mas poderia ser usado o .textContent, que tbm insere ou modifica um texto SIMPLES  dentro de um elemento html
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao () {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    // O botão desabilitado tem uma class (definido no css) diferente. Portanto, validamos o estado, e inserimos a class de botão habilitado
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
};

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}