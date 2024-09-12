//map atua em cima de um array, podendo realizar algumas transformações. E sempre terá a mesma quantidade de elementos no resultado
// Pode transformar um numero em outro, pegar um objeto e extrair apenas um campo, formando outro array, etc(exemplo abaixo)

const numbers = [1, 2, 3, 4, 5, 6]
// Pega o array original, e transforma os números * 2, armazenando em outro array
const numbersV2 = numbers.map(function (el) {
    return el * 2
})
console.log(numbersV2)
//é uma alternativa para simplificar, não precisando utilizar por exemplo, o laço 'for'. Abaixo, um código q executa a mesma coisa, só q sem usar o map

const numbersV3 = []
for(let n of numbers) {
    numbersV3.push(n*2)
}
console.log(numbersV3)

//========================================================================================================================================
const students = [
    {name:'Jake', score: 6.4},
    {name:'Susan', score: 8.6},
    {name:'Emma', score: 9.4},
    {name:'Peter', score: 9.1}
]

const getScore = el => el.score

const result = students
        .map(getScore)
        .map(Math.ceil);   // arredondando para cima

console.log(result)
