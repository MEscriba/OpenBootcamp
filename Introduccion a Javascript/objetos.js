//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
//- Una variable que obtenga tu edad a partir del objeto anterior
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let datospersonales = {
    nombre: 'martin',
    apellido: 'escriba',
    edad: 38,
    altura: 170,
    eresDesarrollador: true
}

let obteneredad = datospersonales.edad
console.log(obteneredad)

let lista = [ datospersonales, datosmejoresamigos={
    nombre: 'nico',
    apellido: 'da silva',
    edad: 39,
    altura: 190,
    eresDesarrollador: false
}, {
    nombre: 'joako',
    apellido: 'garmendia',
    edad: 19,
    altura: 180,
    eresDesarrollador: false
}]
console.log(lista)

let listaordenada = lista.sort((a , b)=> a.edad - b.edad)
console.log(listaordenada)