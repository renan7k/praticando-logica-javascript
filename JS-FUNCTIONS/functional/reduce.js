// Funciona diferente do map e do filter, pois recebe 2 parâmetros
// É utilizado para por exemplo, somar todos os itens do array

const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el;
const total = numbers.reduce(sum, 0); // primeiro parâmetro é a função, e o segundo, é o valor inicial (no exemplo, da variável total)
console.log(total);

//cálculo da média
const avg = (acc, el, i, array) => {
    if(i === array.length - 1){
        return (acc + el) / array.length 
    }else {
        return acc + el
    }
}
const result = numbers.reduce(avg);
console.log(result)

//=====================================================================================================
