

let dobro = () => 2 * this.x;

/* let dobro = function() {
    return 2 * this.x;
} */

let numero = {
    x: 3,
    d: dobro
}

console.log(numero.d());