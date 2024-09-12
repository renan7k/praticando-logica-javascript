//function declaration
//função sem parâmetro e não retornada nada
function sayHello() {
    console.log('Hello!')
};
sayHello();

//função com parâmetro e sem retorno
function sayHelloTo(name) {
    console.log(`Heelo ${name}!`)
};
sayHelloTo('Michael');

//função sem parâmetro e com retorno
function returnHi() {
    return 'Hi!'
};
console.log(returnHi());

//Função com parâmetro e com retorno
function retornHiTo (name) {
    return `Hi ${name}!`
}
console.log(retornHiTo('Lamar'))