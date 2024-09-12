// função anônima - função que nn tem nome
(function (a, b, c) {
    return a + b + c
})
//function expression - (const,let,var)
const sum = function (a, b) {
    return a + b
}
const result = sum(56, 78)
console.log(result)

// Tbm se pode criar uma constante e receber o valor de sum, que aponta para a função.Como no exemplo abaxio, que anotherSum, aponta para sum
const anotherSum = sum
console.log(anotherSum(5, 9))