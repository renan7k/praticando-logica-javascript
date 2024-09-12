//recuperar valores, nome do produto, quantidade e valor
// calcular o preço, o nosso subtotal
//adicionar no carrinho
//calcular total do carrinho

// essa variável foi definida fora da função, pois ela será chamada a cada clique, e com isso ela seria criada a todo instante.
let totalGeral;
//Limpando a lista de produtos do carrinho, pq estava vindo já com produto selecionado
limpar()

function adicionar() {
    let produto = document.getElementById('produto').value;
    // Como o value possui nome e valor, será necessário quebrar (usando o split - separar string em array ,a partir de um separador), e vamos usar 2 variáveis
    let nomeProduto = produto.split('-')[0]; // nesse caso, separou em um array com 2 posições, como precisamos de antes do hífen, posíção 0
    let valorUnitario = produto.split('R$')[1]; // como queremos só o número, o separador é o R$

    let quantidade = document.getElementById('quantidade').value;
    let subtTotal = quantidade * valorUnitario;
    let valorTotal = document.getElementById('valor-total');

    //Para incluir um produto na lista, é necessário incluir uma "section" completa. Por isso definimos que a lista é ela mesma + novo produto
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtTotal}</span></section>`

    totalGeral = totalGeral + subtTotal;
    valorTotal.textContent = `R$ ${totalGeral}`;
    //alert(totalGeral);

    document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00'; 
}