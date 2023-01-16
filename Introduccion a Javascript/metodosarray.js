//Crea un archivo JS que contenga las siguientes líneas
//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let listacompras = ["lechuga", "carne", "trapo", "cerveza", "pilas"]
console.log(listacompras)
listacompras.push("Aceite de Girasol")
console.log(listacompras)
listacompras.pop()
console.log(listacompras)
let peliculasfav = [{titulo: "terminator", director: "el loquito aquel", fecha:{dia:20, mes:12, anio:1980}}, {titulo:"star wars", director: "Jhon Connor", fecha:{dia:1, mes:1, anio:2050}},{titulo: "back to the future", director: "Eustaquio Noguera", fecha:{dia:2, mes:3, anio:1999}}]
console.log(peliculasfav)
let pelicpost = peliculasfav.filter((valor)=> valor.fecha.anio> 2010 && valor.fecha.mes >= 1)
console.log(pelicpost)
let directores = peliculasfav.map((valor)=>valor.director)
console.log(directores)
let titulos = peliculasfav.map((valor)=>valor.titulo)
console.log(titulos)
let directoresytitulos = directores.concat(titulos)
console.log(directoresytitulos)
let directytitulosconprop = [...directores, ...titulos]
console.log(directytitulosconprop)

