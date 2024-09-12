function logParams(a, b, c) {
    console.log(a, b, c)
};
logParams(1, 2, 3);
logParams(1, 2);
logParams(1);

function defaultParams(a, b, c = 0) {
    console.log(a, b, c)
}
defaultParams(7, 8)

//operador spread/rest -> os 3 pontos, significam que a função pode receber uma quantidade varíavel de parâmetros
function logNums(...nums) {
        console.log(nums)
}
logNums(1, 2, 3, 4, 5)

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(2, 3, 5))