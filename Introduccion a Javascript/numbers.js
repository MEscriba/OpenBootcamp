//Crea un archivo JS que contenga las siguientes líneas
//- Una variable que contenga tu altura en centímetros (entero)
//- Una variable que contenga tu altura en metros (número de coma flotante)
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
//- Una variable que contenga tu altura en metros redondeada hacia arriba
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let altura = 170
console.log(altura+ ' cm')
let alturamt = 1.70
console.log(alturamt.toFixed(2) + ' mts')
let peso = 88.5
console.log(peso + ' kg')
let alturared = Math.round(alturamt)
console.log(alturared)
let pesored = Math.floor(peso)
console.log(pesored)
let maxval = Number.MAX_VALUE
console.log(maxval)

