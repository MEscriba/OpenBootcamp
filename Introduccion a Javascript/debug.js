//Crea un nuevo fichero JS que contenga las siguientes líneas
//- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
//- Ejecuta la depuración de VSCode para visualizar la ejecución de la función


function ejercicio (num){
    let secuencia=[1,1,]
    
    for (let i=0; i<=num; i++){
        secuencia[i+2] = secuencia[i] + secuencia[i+1]
        secuencia.push(secuencia[i+2])
        console.log(secuencia)    
    }
    return secuencia
    
}

ejercicio(6)

