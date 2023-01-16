//Crea un archivo JS que contenga las siguientes líneas
//- Una función sin parámetros que devuelva siempre "true"
//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
//- Una función generadora de índices pares automáticos

function prueba(){
    if(true){
        return true
    }
}
console.log(prueba())

const miPromesa = new Promise((resolve, reject) => {
    if (true) {
        resolve (console.log('hola soy una promesa')).setTimeout(() => {
            
        }, 5);
    } else {
        reject( console.log('ERROR'))
    }
})



console.log(miPromesa)
