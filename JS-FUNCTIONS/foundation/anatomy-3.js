// transformar uma function expression em uma function arrow

const increment1 = function (n){
    return n + 1;
};

// Arrow function sempre é anônima
const increment2 = (n) => {
    return n + 1;
};

const increment3 = n => {
    return n + 1;
};

// Quando existe uma function arrow que nn possui { }, esta função terá apenas 1 linha de código. e tudo será retornado, ou seja, o "return" está implícito
const increment4 = n => n + 1;

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(15));
console.log(increment4(31));


const sum = (a, b) => a + b;
console.log(sum(15, 14));