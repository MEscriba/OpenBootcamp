//Crea un archivo llamado fechas.js que contenga las siguientes líneas
//- La fecha de hoy
//- La fecha de tu nacimiento
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
//- Una variable que contenga el día de tu nacimiento
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let fechadehoy = new Date()
console.log(fechadehoy)
let fechanac = new Date(1984, 5, 26)
console.log(fechanac)
let consultasiesmastarde = fechadehoy.getTime > fechanac.getTime
console.log(consultasiesmastarde)
let dianac = fechanac.getDate()
console.log(dianac)
let mesnac = fechanac.getMonth()+1
console.log(mesnac)
let anionac = fechanac.getFullYear()
console.log(anionac)