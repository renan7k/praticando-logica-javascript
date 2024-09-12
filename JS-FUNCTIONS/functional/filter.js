// função filter: basicamente, ela vai filtrar os elementos.
// Em alguns casos, o array resultante pode possuir o mesmo tamanho do original, menor ou até vazio

const numbers = [1, 2, 3, 4, 5, 6]

const greatherThanZero = el => el > 0;
const greatherThanTen = el => el > 10;
const even = el => el % 2 === 0 //Filtrando elementos pares

console.log(numbers.filter(greatherThanZero));
console.log(numbers.filter(greatherThanTen));
console.log(numbers.filter(even));
//========================================================================================================================================
const students = [
    {name:'Jake', score: 6.4},
    {name:'Susan', score: 8.6},
    {name:'Emma', score: 9.4},
    {name:'Peter', score: 9.1}
]

const greatStudent = student => student.score >= 9;
console.log(students.filter(greatStudent));