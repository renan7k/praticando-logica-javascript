function finalPrice(tax, price) {
    return price * ( 1 + tax)
}

console.log(finalPrice(0.0875, 25.1))
console.log(finalPrice(0.0875, 108.9))


//curring================================================
function finalPrice1(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}
const nycFinalPrice = finalPrice1(0.0875)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(108.9))