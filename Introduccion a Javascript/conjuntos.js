//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//- Un nuevo Set con los nombres de tu familia
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
let nombres = ['martin', 'sebastian', 'jimena', 'luis', 'marta']
let nombresdemifamlia = new Set (nombres)

console.log(nombres)
nombresdemifamlia.add('martin')
console.log(nombresdemifamlia)
nombresdemifamlia.add('javascript')
console.log(nombresdemifamlia)
