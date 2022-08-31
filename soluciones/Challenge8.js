let numero = 21
let lstrestos = []
let resto = 0
while (numero > 1){
    resto = parseInt(numero % 2)
    numero = numero/2
    lstrestos.push(resto)
}
console.log(lstrestos.reverse())