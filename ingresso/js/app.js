
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

function comprar() {

    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(ingresso == 'pista' && quantidade <= qtdPista){
        qtdPista = qtdPista - quantidade;
        alert('Compra realizada com sucesso!!');
        document.getElementById('qtd-pista').textContent = qtdPista;

    }else if(ingresso == 'inferior' && quantidade <= qtdInferior) {
        qtdInferior = qtdInferior - quantidade;
        alert('Compra realizada com sucesso!!');
        document.getElementById('qtd-inferior').textContent = qtdInferior;

    }else if(ingresso == 'superior' && quantidade <= qtdSuperior) {
        qtdSuperior = qtdSuperior - quantidade;
        alert('Compra realizada com sucesso!!');
        document.getElementById('qtd-superior').textContent = qtdSuperior;

    }else {
        alert(`Quantidade indisponível para ${ingresso}`);
    }

    // Para ficar mais organizado, poderia separar por funções para cada tipo de ingresso. Ex.: comprarPista();
}
