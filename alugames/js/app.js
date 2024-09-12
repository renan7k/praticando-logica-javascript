

function alterarStatus (id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    //Neste alerta, vamos passar a variável nomeJogo. Como usamos o método querySelector() nesta variável, é retornada a tag HTML. Não queremos imprimir a tag HTML, mas sim o texto dentro da tag <p>. Para fazer isso, podemos usar as propriedades textContent ou innerHTML.
    //alert(nomeJogo.textContent); 
    
    // Se a classe que identifica quando um jogo está alugado, existir, removemos da img e btn, e alteramos o texto
    // Caso nn, inserimos essas classes
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {// Acrescentado o if para pedir uma confirmação
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }

}