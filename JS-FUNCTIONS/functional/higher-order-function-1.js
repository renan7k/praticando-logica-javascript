//Quando a linguagem permite que uma função opere outras funções

function run(fn) {
    fn()
};

function sayHello() {
    console.log('Hello!')
};

run(sayHello)

run(function () {
    console.log('run!!!')
})