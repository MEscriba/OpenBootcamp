//Crea un nuevo fichero JS que contenga las siguientes líneas
// Una clase llamada "Estudiante" que tenga:
//- Una variable llamada nombre
//- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
//- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
//- Crea una nueva instancia de "Estudiante"
//- Haz la llamada al método obtenDatos

class Estudiante {
    #nombre
    #lista
    constructor(nombre, lista){
        this.#nombre = nombre
        this.#lista = lista
    }

    obtenDatos(){ // Función getter -> Nos permite acceder (de forma controlada) a algún atributo protegido          
        return (`el nombre del estudiante es: ${this.#nombre} y las asignaturas que estudia son: ${this.#lista}`)
    }
}

const nuevoEstudiante = new Estudiante('Martin', ['Javascript', 'HTML', 'CSS'])
const datos = nuevoEstudiante.obtenDatos()
console.log(datos)

 